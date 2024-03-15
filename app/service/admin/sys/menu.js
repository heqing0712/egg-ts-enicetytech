"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
/**
 * 系统-菜单
 */
class SysMenuService extends base_1.default {
    /**
     * 获取所有菜单
     */
    async list() {
        return await this.getRepo().admin.sys.Menu.find();
    }
    /**
     * 保存或新增菜单
     */
    async save(menu) {
        const result = await this.getRepo().admin.sys.Menu.save(menu);
        return result;
    }
    /**
     * 根据角色获取所有菜单
     */
    async getMenus(uid) {
        const roleIds = await this.service.admin.sys.role.getRoleIdByUser(uid);
        let menus = [];
        if (_.includes(roleIds, this.config.rootRoleId)) {
            // root find all
            menus = await this.getRepo().admin.sys.Menu.find();
        }
        else {
            // [ 1, 2, 3 ] role find
            menus = await this.getRepo().admin.sys.Menu.createQueryBuilder('menu')
                .innerJoinAndSelect('sys_role_menu', 'role_menu', 'menu.id = role_menu.menu_id')
                .andWhere('role_menu.role_id IN (:...roldIds)', { roldIds: roleIds })
                .orderBy('menu.order_num', 'DESC')
                .getMany();
        }
        return menus;
    }
    /**
     * 查找当前菜单下的子菜单，目录以及菜单
     */
    async findChildMenus(mid) {
        const allMenus = [];
        const menus = await this.getRepo().admin.sys.Menu.find({ parentId: mid });
        // if (_.isEmpty(menus)) {
        //   return allMenus;
        // }
        // const childMenus: any = [];
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].type !== 2) {
                // 子目录下是菜单或目录，继续往下级查找
                const c = await this.findChildMenus(menus[i].id);
                allMenus.push(c);
            }
            allMenus.push(menus[i].id);
        }
        return allMenus;
    }
    /**
     * 获取某个菜单的信息
     * @param mid menu id
     */
    async getMenuItemInfo(mid) {
        const menu = await this.getRepo().admin.sys.Menu.findOne({ id: mid });
        return menu;
    }
    /**
     * 获取某个菜单以及关联的父菜单的信息
     */
    async getMenuItemAndParentInfo(mid) {
        const menu = await this.getRepo().admin.sys.Menu.findOne({ id: mid });
        let parentMenu = null;
        if (menu && menu.parentId) {
            parentMenu = await this.getRepo().admin.sys.Menu.findOne({ id: menu.parentId });
        }
        return { menu, parentMenu };
    }
    /**
     * 查找节点路由是否存在
     */
    async findRouterExist(router) {
        const menus = await this.getRepo().admin.sys.Menu.findOne({ router });
        return !_.isEmpty(menus);
    }
    /**
     * 获取当前用户的所有权限
     */
    async getPerms(uid) {
        const roleIds = await this.service.admin.sys.role.getRoleIdByUser(uid);
        let perms = [];
        let result = null;
        if (_.includes(roleIds, this.config.rootRoleId)) {
            // root find all perms
            result = await this.getRepo().admin.sys.Menu.find({ perms: typeorm_1.Not(typeorm_1.IsNull()), type: 2 });
        }
        else {
            result = await this.getRepo().admin.sys.Menu.createQueryBuilder('menu')
                .innerJoinAndSelect('sys_role_menu', 'role_menu', 'menu.id = role_menu.menu_id')
                .andWhere('role_menu.role_id IN (:...roldIds)', { roldIds: roleIds })
                .andWhere('menu.type = 2')
                .andWhere('menu.perms IS NOT NULL')
                .getMany();
        }
        if (!_.isEmpty(result)) {
            result.forEach(e => {
                perms = _.concat(perms, e.perms.split(','));
            });
            perms = _.uniq(perms);
        }
        return perms;
    }
    /**
     * 删除多项菜单
     */
    async deleteMenuItem(mids) {
        return await this.getRepo().admin.sys.Menu.delete(mids);
    }
    /**
     * 刷新指定用户ID的权限
     */
    async refreshPerms(uid) {
        const perms = await this.getPerms(uid);
        const online = await this.getAdminRedis().get(`admin:token:${uid}`);
        if (online) {
            // 判断是否在线
            await this.getAdminRedis().set(`admin:perms:${uid}`, JSON.stringify(perms));
        }
    }
    /**
     * 刷新所有在线用户的权限
     */
    async refreshOnlineUserPerms() {
        const onlineUserIds = await this.getAdminRedis().keys('admin:token:*');
        if (onlineUserIds && onlineUserIds.length > 0) {
            for (let i = 0; i < onlineUserIds.length; i++) {
                const uid = onlineUserIds[i].split('admin:token:')[1];
                const perms = await this.getPerms(parseInt(uid));
                await this.getAdminRedis().set(`admin:perms:${uid}`, JSON.stringify(perms));
            }
        }
    }
}
exports.default = SysMenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLHFDQUFzQztBQUV0Qzs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSxjQUFXO0lBRXJEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBUztRQUNsQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFXO1FBQ3hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQyxnQkFBZ0I7WUFDaEIsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BEO2FBQU07WUFDTCx3QkFBd0I7WUFDeEIsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtB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
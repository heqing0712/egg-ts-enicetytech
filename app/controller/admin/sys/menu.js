"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const _ = require("lodash");
const menu_1 = require("../../../dto/admin/sys/menu");
class SysMenuController extends base_1.default {
    /**
     * @api {get} /admin/sys/menu/list 获取所有菜单
     * @apiGroup 系统菜单
     * @apiUse Auth
     * @apiUse BaseRes
     */
    async list() {
        this.res({
            data: await this.service.admin.sys.menu.getMenus(this.ctx.token.uid),
        });
    }
    /**
     * @api {post} /admin/sys/menu/add 增加菜单
     * @apiGroup 系统菜单
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} type 菜单类别
     * @apiParam {Number} parentId 父级菜单，无则为-1
     * @apiParam {String} name 菜单名称
     * @apiParam {Number} orderNum 排序
     * @apiParam {String} router 路由地址
     * @apiParam {Boolean} isShow 是否显示
     * @apiParam {Boolean} keepalive 开启keepalive
     * @apiParam {String} icon 对应svg图标文件名称
     * @apiParam {String} perms 权限
     * @apiParam {String} viewPath vue文件路径
     */
    async add() {
        const dto = await this.ctx.validate(menu_1.CreateMenuDto);
        if (dto.type === 2 && dto.parentId === -1) {
            // 无法直接创建权限，必须有ParentId
            this.res({ code: 10005 });
            return;
        }
        if (dto.type === 1 && dto.parentId !== -1) {
            const parent = await this.service.admin.sys.menu.getMenuItemInfo(dto.parentId);
            if (!parent) {
                throw new Error('父节点菜单不存在！');
            }
            if (parent && parent.type === 1) {
                // 当前新增为菜单但父节点也为菜单时为非法操作
                this.res({
                    code: 10006,
                });
                return;
            }
        }
        const insertData = Object.assign({}, dto);
        if (dto.parentId === -1) {
            insertData.parentId = null;
        }
        const saveData = await this.service.admin.sys.menu.save(insertData);
        if (dto.type === 2) {
            // 如果是权限发生更改，则刷新所有在线用户的权限
            await this.service.admin.sys.menu.refreshOnlineUserPerms();
        }
        this.res({
            data: saveData,
        });
    }
    /**
     * @api {post} /admin/sys/menu/update 更新菜单
     * @apiGroup 系统菜单
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} type 菜单类别
     * @apiParam {Number} parentId 父级菜单，无则为-1
     * @apiParam {String} name 菜单名称
     * @apiParam {Number} orderNum 排序
     * @apiParam {String} router 路由地址
     * @apiParam {Boolean} isShow 是否显示
     * @apiParam {Boolean} keepalive 开启keepalive
     * @apiParam {String} icon 对应svg图标文件名称
     * @apiParam {String} perms 权限
     * @apiParam {String} viewPath vue文件路径
     * @apiParam {Number} menuId 菜单编号
     */
    async update() {
        const dto = await this.ctx.validate(menu_1.UpdateMenuDto);
        if (dto.type === 2 && dto.parentId === -1) {
            // 无法直接创建权限，必须有ParentId
            this.res({ code: 10005 });
            return;
        }
        const originMenu = await this.service.admin.sys.menu.getMenuItemInfo(dto.menuId);
        if (originMenu && (originMenu.type !== dto.type)) {
            // 节点类型发生变化则直接返回
            this.res({
                code: 10007,
            });
            return;
        }
        if (dto.type === 1 && dto.parentId !== -1) {
            const parent = await this.service.admin.sys.menu.getMenuItemInfo(dto.parentId);
            if (!parent) {
                throw new Error('父节点菜单不存在！');
            }
            if (parent && parent.type === 1) {
                // 当前新增为菜单但父节点也为菜单时为非法操作
                this.res({
                    code: 10006,
                });
                return;
            }
        }
        const updateData = Object.assign({}, dto);
        if (dto.parentId === -1) {
            updateData.parentId = null;
        }
        // update id
        updateData.id = dto.menuId;
        const saveData = await this.service.admin.sys.menu.save(updateData);
        // 如果是权限发生更改，则刷新所有在线用户权限
        await this.service.admin.sys.menu.refreshOnlineUserPerms();
        this.res({
            data: saveData,
        });
    }
    /**
     * @api {post} /admin/sys/menu/delete 删除菜单
     * @apiGroup 系统菜单
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} menuId 菜单编号
     */
    async delete() {
        const dto = await this.ctx.validate(menu_1.DeleteMenuDto);
        // 如果有子目录，一并删除
        const childMenus = await this.service.admin.sys.menu.findChildMenus(dto.menuId);
        await this.service.admin.sys.menu.deleteMenuItem(_.flattenDeep([dto.menuId, childMenus]));
        await this.service.admin.sys.menu.refreshOnlineUserPerms();
        this.res();
    }
    /**
     * @api {get} /admin/sys/menu/info 获取菜单信息
     * @apiGroup 系统菜单
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} menuId 菜单编号
     */
    async info() {
        const dto = await this.ctx.validate(menu_1.InfoMenuDto, this.getQuery());
        const data = await this.service.admin.sys.menu.getMenuItemAndParentInfo(parseInt(dto.menuId));
        this.res({
            data,
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/menu/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysMenuController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/menu/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysMenuController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/menu/update', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysMenuController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/menu/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysMenuController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/menu/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysMenuController.prototype, "info", null);
exports.default = SysMenuController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSw0QkFBNEI7QUFDNUIsc0RBQXVHO0FBRXZHLE1BQXFCLGlCQUFrQixTQUFRLGNBQWM7SUFFM0Q7Ozs7O09BS0c7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksQ0FBQyxHQUFHLENBQ047WUFDRSxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDckUsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6Qyx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDUjtRQUNELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMs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
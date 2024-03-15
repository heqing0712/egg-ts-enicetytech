"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const comm_1 = require("../../../dto/comm");
const role_1 = require("../../../dto/admin/sys/role");
class SysRoleController extends base_1.default {
    /**
     * @api {get} /admin/sys/role/list 获取全部系统角色列表
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiSuccess {SysRole[]} data 角色列表
     */
    async list() {
        this.res({
            data: await this.service.admin.sys.role.list(),
        });
    }
    /**
     * @api {get} /admin/sys/role/page 获取系统角色列表
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiSuccess {SysRole[]} data.list 角色列表
     */
    async page() {
        const dto = await this.ctx.validate(comm_1.PageGetDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.sys.role.page(dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.sys.role.count(),
                },
            },
        });
    }
    /**
     * @api {post} /admin/sys/role/delete 删除角色
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number[]} roleIds 角色编号列表
     */
    async delete() {
        const dto = await this.ctx.validate(role_1.DeleteRoleDto);
        const count = await this.service.admin.sys.role.countUserIdByRole(dto.roleIds);
        if (count > 0) {
            this.res({
                code: 10008,
            });
            return;
        }
        await this.service.admin.sys.role.delete(dto.roleIds);
        await this.service.admin.sys.menu.refreshOnlineUserPerms();
        this.res();
    }
    /**
     * @api {post} /admin/sys/role/add 新增角色
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 角色名称
     * @apiParam {String} label 角色表示
     * @apiParam {String} remark 备注
     * @apiParam {Number[]} menus 关联菜单ID列表
     * @apiParam {Number[]} depts 关联部门ID列表
     */
    async add() {
        const dto = await this.ctx.validate(role_1.CreateRoleDto);
        this.res({
            data: await this.service.admin.sys.role.add(dto, this.ctx.token.uid),
        });
    }
    /**
     * @api {post} /admin/sys/role/update 更新角色
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 角色名称
     * @apiParam {String} label 角色表示
     * @apiParam {String} remark 备注
     * @apiParam {Number[]} menus 关联菜单ID列表
     * @apiParam {Number[]} depts 关联部门ID列表
     * @apiParam {Number} roleId 角色编号
     */
    async update() {
        const dto = await this.ctx.validate(role_1.UpdateRoleDto);
        await this.service.admin.sys.role.update(dto);
        await this.service.admin.sys.menu.refreshOnlineUserPerms();
        this.res();
    }
    /**
     * @api {get} /admin/sys/role/list 获取全部系统角色列表
     * @apiGroup 系统角色
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiSuccess {SysRole} data 角色信息
     */
    async info() {
        const dto = await this.ctx.validate(role_1.InfoRoleDto, this.getQuery());
        this.res({
            data: await this.service.admin.sys.role.info(parseInt(dto.roleId)),
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/update', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/role/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysRoleController.prototype, "info", null);
exports.default = SysRoleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSw0Q0FBK0M7QUFDL0Msc0RBQXVHO0FBRXZHLE1BQXFCLGlCQUFrQixTQUFRLGNBQWM7SUFFM0Q7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7U0FDL0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWEsaUJBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JFLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7b0JBQ2QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLO29CQUNmLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2lCQUNqRDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBRUgsS0FBSyxDQUFDLEdBQUc7UUFDUCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixvQkFBYSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDckUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixvQkFBYSxDQUFDLENBQUM7UUFDbEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFjLGtCQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGO0FBekdDO0lBREMsNEJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7Ozs7NkNBS25DO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQzs7Ozs2Q0FhbkM7QUFVRDtJQURDLDRCQUFVLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDOzs7OytDQWF0QztBQWNEO0lBREMsNEJBQVUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDOzs7OzRDQU1uQztBQWVEO0lBREMsNEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7Ozs7K0NBTXRDO0FBVUQ7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQzs7Ozs2Q0FNbkM7QUFqSEgsb0NBbUhDIn0=
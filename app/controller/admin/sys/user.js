"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const user_1 = require("../../../dto/admin/sys/user");
class SysUserController extends base_1.default {
    /**
     * @api {post} /admin/sys/user/add 新增系统用户
     * @apiGroup 系统用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} departmentId 部门编号
     * @apiParam {String} name 管理员名称
     * @apiParam {String} username 用户名
     * @apiParam {String} nickName 别名
     * @apiParam {Number[]} roles 关联角色编号列表，最多三个
     * @apiParam {String} remark 用户备注
     * @apiParam {String} email 邮箱
     * @apiParam {String} phone 手机
     * @apiParam {Number} status 状态
     */
    async add() {
        const dto = await this.ctx.validate(user_1.CreateUserDto);
        const result = await this.service.admin.sys.user.add(dto);
        if (result) {
            this.res();
        }
        else {
            this.res({ code: 10001 });
        }
    }
    /**
     * @api {post} /admin/sys/user/info 获取系统用户信息
     * @apiGroup 系统用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} id 用户编号
     * @apiSuccess {SysUser} data 用户列表
     */
    async info() {
        const dto = await this.ctx.validate(user_1.InfoUserDto, this.getQuery());
        const user = await this.service.admin.sys.user.info(parseInt(dto.userId));
        this.res({
            data: user,
        });
    }
    /**
     * @api {post} /admin/sys/user/delete 删除用户列表
     * @apiGroup 系统用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number[]} userIds 用户编号列表
     * @apiSuccess {SysUser} data 用户列表
     */
    async delete() {
        const dto = await this.ctx.validate(user_1.DeleteUserDto);
        await this.service.admin.sys.user.delete(dto.userIds);
        await this.service.admin.sys.user.multiForbidden(dto.userIds);
        this.res();
    }
    /**
     * @api {get} /admin/sys/user/page 获取系统用户列表
     * @apiGroup 系统用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} departmentId 部门编号
     * @apiSuccess {SysUser[]} data.list 用户列表
     */
    async page() {
        const query = this.getQuery();
        console.log(query);
        const dto = await this.ctx.validate(user_1.QueryUserDto, query);
        dto.id = this.ctx.token.uid;
        dto.page -= 1;
        this.res({
            data: {
                list: await this.service.admin.sys.user.page(dto),
                pagination: {
                    total: await this.service.admin.sys.user.count(this.ctx.token.uid, dto.departmentId),
                    page: dto.page + 1,
                    size: dto.limit,
                },
            },
        });
    }
    /**
     * @api {post} /admin/sys/user/update 更新系统用户信息
     * @apiGroup 系统用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} departmentId 部门编号
     * @apiParam {String} name 管理员名称
     * @apiParam {String} username 用户名
     * @apiParam {String} nickName 别名
     * @apiParam {Number[]} roles 关联角色编号列表，最多三个
     * @apiParam {String} remark 用户备注
     * @apiParam {String} email 邮箱
     * @apiParam {String} phone 手机
     * @apiParam {Number} status 状态
     * @apiParam {Number} id 用户编号
     */
    async update() {
        const dto = await this.ctx.validate(user_1.UpdateUserDto);
        await this.service.admin.sys.user.update(dto);
        //await this.service.admin.sys.menu.refreshPerms(dto.id);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/user/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysUserController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/user/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysUserController.prototype, "info", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/user/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysUserController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/user/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysUserController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/user/update', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysUserController.prototype, "update", null);
exports.default = SysUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSxzREFBcUg7QUFFckgsTUFBcUIsaUJBQWtCLFNBQVEsY0FBYztJQUUzRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1o7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBYyxrQkFBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdB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
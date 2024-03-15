"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const dept_1 = require("../../../dto/admin/sys/dept");
/**
 * 系统部门控制器
 */
class SysDeptController extends base_1.default {
    /**
     * @api {get} /admin/sys/dept/list 获取部门列表
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     */
    async list() {
        this.res({
            data: await this.service.admin.sys.dept.getDepts(this.ctx.token.uid),
        });
    }
    /**
     * @api {post} /admin/sys/dept/add 增加部门
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} parentDepartmentId 父级部门编号，没有则为-1
     * @apiParam {String} departmentName 部门名称
     */
    async add() {
        const dto = await this.ctx.validate(dept_1.CreateDeptDto);
        await this.service.admin.sys.dept.add(dto.departmentName, dto.parentDepartmentId);
        this.res();
    }
    /**
     * @api {post} /admin/sys/dept/delete 删除部门
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} departmentId 部门编号
     */
    async delete() {
        const dto = await this.ctx.validate(dept_1.DeleteDeptDto);
        // 查询是否有关联用户，如果含有则无法删除
        const count = await this.service.admin.sys.dept.countUserByDeptId(dto.departmentId);
        if (count > 0) {
            this.res({
                code: 10009,
            });
            return;
        }
        // 查询是否有关联的角色，角色与部门存在数据相互绑定
        const count2 = await this.service.admin.sys.dept.countRoleByDeptId(dto.departmentId);
        if (count2) {
            this.res({
                code: 10010,
            });
            return;
        }
        await this.service.admin.sys.dept.delete(dto.departmentId);
        this.res();
    }
    /**
     * @api {get} /admin/sys/dept/info 获取部门信息
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} departmentId 部门编号
     * @apiSuccess {SysDepartment} data 部门信息实体
     */
    async info() {
        const q = await this.ctx.validate(dept_1.InfoDeptDto, this.getQuery());
        this.res({
            data: await this.service.admin.sys.dept.info(parseInt(q.departmentId)),
        });
    }
    /**
     * @api {post} /admin/sys/dept/update 获取部门信息
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 部门编号
     * @apiParam {Number} parentId 父级部门编号，没有则为-1
     * @apiParam {String} name 部门名称
     * @apiParam {Number} orderNum 排序
     */
    async update() {
        const dto = await this.ctx.validate(dept_1.UpdateDeptDto);
        await this.service.admin.sys.dept.update(dto);
        this.res();
    }
    /**
     * @api {post} /admin/sys/dept/transfer 人员部门转移
     * @apiGroup 系统部门
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number[]} userIds 管理员编号列表
     * @apiParam {Number} departmentId 需要转移去的部门编号
     */
    async transfer() {
        const dto = await this.ctx.validate(dept_1.TransferDeptDto);
        await this.service.admin.sys.dept.transfer(dto.userIds, dto.departmentId);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "info", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/update', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/dept/transfer', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysDeptController.prototype, "transfer", null);
exports.default = SysDeptController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSxzREFBd0g7QUFFeEg7O0dBRUc7QUFDSCxNQUFxQixpQkFBa0IsU0FBUSxjQUFjO0lBRTNEOzs7OztPQUtHO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsR0FBRyxDQUNOO1lBQ0UsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ3JFLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBRUgsS0FBSyxDQUFDLEdBQUc7UUFDUCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixvQkFBYSxDQUFDLENBQUM7UUFDbEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxzQkFBc0I7UUFDdEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRixJQUFJLEtBQUssR0FBRyxD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
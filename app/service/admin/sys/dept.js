"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
const typeorm_1 = require("typeorm");
/**
 * 系统部门Service
 */
class SysDeptService extends base_1.default {
    /**
     * 获取所有部门
     */
    async list() {
        return await this.getRepo().admin.sys.Department.find();
    }
    /**
     * 根据ID查找部门信息
     */
    async info(id) {
        const department = await this.getRepo().admin.sys.Department.findOne({ id });
        let parentDepartment = null;
        if (department.parentId) {
            parentDepartment = await this.getRepo().admin.sys.Department.findOne({ id: department.parentId });
        }
        return { department, parentDepartment };
    }
    /**
     * 更新部门信息
     */
    async update(param) {
        await this.getRepo().admin.sys.Department.update(param.id, { parentId: param.parentId === -1 ? undefined : param.parentId });
    }
    /**
     * 转移部门
     */
    async transfer(userIds, deptId) {
        await this.getRepo().admin.sys.User.update({ id: typeorm_1.In(userIds) }, { departmentId: deptId });
    }
    /**
     * 新增部门
     */
    async add(deptName, parentDeptId) {
        await this.getRepo().admin.sys.Department.insert({ name: deptName, parentId: parentDeptId === -1 ? undefined : parentDeptId });
    }
    /**
     * 根据ID删除部门
     */
    async delete(departmentId) {
        await this.getRepo().admin.sys.Department.delete(departmentId);
    }
    /**
     * 根据部门查询关联的用户ID
     */
    async countUserByDeptId(id) {
        return await this.getRepo().admin.sys.User.count({ departmentId: id });
    }
    /**
     * 根据部门查询关联的角色
     */
    async countRoleByDeptId(id) {
        return await this.getRepo().admin.sys.RoleDepartment.count({ departmentId: id });
    }
    /**
     * 根据当前角色id获取部门列表
     */
    async getDepts(uid) {
        const roleIds = await this.service.admin.sys.role.getRoleIdByUser(uid);
        let depts = [];
        if (_.includes(roleIds, this.config.rootRoleId)) {
            // root find all
            depts = await this.getRepo().admin.sys.Department.find();
        }
        else {
            // [ 1, 2, 3 ] role find
            depts = await this.getRepo().admin.sys.Department.createQueryBuilder('dept')
                .innerJoinAndSelect('sys_role_department', 'role_dept', 'dept.id = role_dept.department_id')
                .andWhere('role_dept.role_id IN (:...roldIds)', { roldIds: roleIds })
                .orderBy('dept.order_num', 'ASC')
                .getMany();
        }
        return depts;
    }
}
exports.default = SysDeptService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLHFDQUE2QjtBQUc3Qjs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSxjQUFXO0lBRXJEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBVTtRQUNuQixNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLElBQUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDO1FBQ2pDLElBQUksVUFBVyxDQUFDLFFBQVEsRUFBRTtZQUN4QixnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDcEc7UUFDRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFvQjtRQUMvQixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENB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
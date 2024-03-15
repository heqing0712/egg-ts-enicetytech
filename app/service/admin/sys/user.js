"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const base_1 = require("../../base");
const typeorm_1 = require("typeorm");
/**
 * 系统-用户
 */
class SysUserService extends base_1.default {
    /**
     * 查询用户个人信息
     */
    async person(uid) {
        const user = await this.getRepo().admin.sys.User.findOne({ id: uid });
        if (!_.isEmpty(user)) {
            delete user.departmentId;
            delete user.status;
            // delete user.remark;
            delete user.password;
        }
        return user;
    }
    /**
     * 更新个人信息
     */
    async personUpdate(uid, param) {
        const { name, nickName, email, phone, originPassword, newPassword, remark, headImg } = param;
        let savePassword;
        if (originPassword && newPassword) {
            const user = await this.getRepo().admin.sys.User.findOne({ id: uid });
            const decodePassword = this.getHelper().aesDecrypt(user.password, this.config.aesSecret.admin);
            const decodeOriginPassword = this.getHelper().aesDecrypt(originPassword, this.config.aesSecret.front);
            const decodeNewPassword = this.getHelper().aesDecrypt(newPassword, this.config.aesSecret.front);
            if (decodePassword === decodeOriginPassword) {
                // 旧密码不一致
                savePassword = this.getHelper().aesEncrypt(decodeNewPassword, this.config.aesSecret.admin);
            }
            else {
                return false;
            }
        }
        const obj = { name, nickName, email, phone, remark, headImg };
        if (savePassword) {
            await this.service.admin.sys.user.upgradePasswordV(uid);
            obj.password = savePassword;
        }
        await this.getRepo().admin.sys.User.update(uid, obj);
        return true;
    }
    /**
     * 增加系统用户，如果返回false则表示已存在该用户
     * @param param Object 对应SysUser实体类
     */
    async add(param) {
        // const insertData: any = { ...CreateUserDto };
        const exists = await this.getRepo().admin.sys.User.findOne({ username: param.username });
        if (!_.isEmpty(exists)) {
            return false;
        }
        // 所有用户初始密码为123456
        await this.ctx.ormManager.transaction(async (manager) => {
            const password = this.getHelper().aesEncrypt('123456', this.config.aesSecret.admin);
            const u = manager.create(this.getEntity().admin.sys.User, {
                departmentId: param.departmentId,
                username: param.username,
                password,
                name: param.name,
                nickName: param.nickName,
                email: param.email,
                phone: param.phone,
                remark: param.remark,
                status: param.status,
            });
            await manager.save(u);
            //const result = await manager.save(u);
            // const { roles } = param;
            // const insertRoles = roles.map(e => {
            //   return {
            //     roleId: e,
            //     userId: result.id,
            //   };
            // });
            // // 分配角色
            // await manager.insert(this.getEntity().admin.sys.UserRole, insertRoles);
        });
        return true;
    }
    /**
     * 更新用户信息
     */
    async update(param) {
        await this.ctx.ormManager.transaction(async (manager) => {
            await manager.update(this.getEntity().admin.sys.User, param.id, {
                departmentId: param.departmentId,
                username: param.username,
                name: param.name,
                nickName: param.nickName,
                email: param.email,
                phone: param.phone,
                remark: param.remark,
                status: param.status,
            });
            // 先删除原来的角色关系
            await manager.delete(this.getEntity().admin.sys.UserRole, { userId: param.id });
            const insertRoles = param.roles.map(e => {
                return {
                    roleId: e,
                    userId: param.id,
                };
            });
            // 重新分配角色
            await manager.insert(this.getEntity().admin.sys.UserRole, insertRoles);
            if (param.status === 0) {
                // 禁用状态
                await this.forbidden(param.id);
            }
        });
    }
    /**
     * 查找用户信息
     * @param id 用户id
     */
    async info(id) {
        const user = await this.getRepo().admin.sys.User.findOne(id);
        if (_.isEmpty(user)) {
            throw new Error('unfind this user info');
        }
        const departmentRow = await this.getRepo().admin.sys.Department.findOne({ id: user.departmentId });
        if (_.isEmpty(departmentRow)) {
            throw new Error('unfind this user info');
        }
        const roleRows = await this.getRepo().admin.sys.UserRole.find({ userId: user.id });
        const roles = roleRows.map(e => {
            return e.roleId;
        });
        delete user.password;
        return Object.assign(Object.assign({}, user), { roles, departmentName: departmentRow.name });
    }
    /**
     * 查找列表里的信息
     */
    async infoList(ids) {
        const users = await this.getRepo().admin.sys.User.findByIds(ids);
        return users;
    }
    /**
     * 根据ID列表删除用户
     */
    async delete(userIds) {
        await this.getRepo().admin.sys.User.delete(userIds);
        await this.getRepo().admin.sys.UserRole.delete({ userId: typeorm_1.In(userIds) });
    }
    /**
     * 根据部门ID列举用户条数：除去超级管理员
     */
    async count(uid, deptId) {
        if (deptId === -1) {
            return await this.getRepo().admin.sys.User.count({ id: typeorm_1.Not(typeorm_1.In([this.config.rootRoleId, uid])) });
        }
        return await this.getRepo().admin.sys.User.count({ id: typeorm_1.Not(typeorm_1.In([this.config.rootRoleId, uid])), departmentId: deptId });
    }
    /**
     * 根据部门ID进行分页查询用户列表
     * deptId = -1 时查询全部
     */
    async page(query) {
        //const {id,limit,createTime,email,username,name,page, departmentId} = query
        const { id, limit, username, nickName, name, email, page, departmentId, status, startTime, endTime } = query;
        const result = await this.getRepo().admin.sys.User.createQueryBuilder('user')
            // .innerJoinAndSelect('sys_department', 'dept', 'dept.id = user.departmentId')
            .where('user.id NOT IN (:...ids)', { ids: [this.config.rootRoleId, id] })
            .andWhere(username ? `user.username like '%${username}%'` : '1 = 1')
            .andWhere(nickName ? `user.nickName like '%${nickName}%'` : '1 = 1')
            .andWhere(name ? `user.name like '%${name}%'` : '1 = 1')
            .andWhere(status !== undefined ? `user.status = ${status}` : '1 = 1')
            .andWhere(email ? `user.email like '%${email}%'` : '1 = 1')
            .andWhere(startTime ? `user.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `user.createTime <= '${endTime}'` : '1 = 1')
            .andWhere(departmentId === -1 ? '1 = 1' : `user.departmentId = '${departmentId}'`)
            .offset(page * limit)
            .limit(limit)
            .getRawMany();
        const dealResult = result.map(e => {
            return {
                createTime: e.user_createTime,
                departmentId: e.user_department_id,
                email: e.user_email,
                headImg: e.user_head_img,
                id: e.user_id,
                name: e.user_name,
                nickName: e.user_nick_name,
                phone: e.user_phone,
                remark: e.user_remark,
                status: e.user_status,
                updateTime: e.user_updateTime,
                username: e.user_username,
                departmentName: e.dept_name,
            };
        });
        return dealResult;
    }
    /**
     * 禁用用户
     */
    async forbidden(uid) {
        await this.getAdminRedis().del(`admin:passwordVersion:${uid}`);
        await this.getAdminRedis().del(`admin:token:${uid}`);
        await this.getAdminRedis().del(`admin:perms:${uid}`);
    }
    /**
     * 禁用多个用户
     */
    async multiForbidden(uids) {
        if (uids) {
            const pvs = [];
            const ts = [];
            const ps = [];
            uids.forEach(e => {
                pvs.push(`admin:passwordVersion:${e}`);
                ts.push(`admin:token:${e}`);
                ps.push(`admin:perms:${e}`);
            });
            await this.getAdminRedis().del(pvs);
            await this.getAdminRedis().del(ts);
            await this.getAdminRedis().del(ps);
        }
    }
    /**
     * 升级用户版本密码
     */
    async upgradePasswordV(id) {
        // admin:passwordVersion:${param.id}
        const v = await this.getAdminRedis().get(`admin:passwordVersion:${id}`);
        if (!_.isEmpty(v)) {
            await this.getAdminRedis().set(`admin:passwordVersion:${id}`, parseInt(v) + 1);
        }
    }
}
exports.default = SysUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBNEI7QUFDNUIscUNBQXFDO0FBQ3JDLHFDQUFrQztBQUlsQzs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSxjQUFXO0lBRXJEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFXO1FBQ3RCLE1BQU0sSUFBSSxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbkIsc0JBQXNCO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFXLEVBQUUsS0FBMEI7UUFDeEQsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDN0YsSUFBSSxZQUFnQyxDQUFDO1FBQ3JDLElBQUksY0FBYyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEcsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hHLElBQUksY0FBYyxLQUFLLG9CQUFvQixFQUFFO2dCQUMzQyxTQUFTO2dCQUNULFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVGO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE1BQU0sR0FBRyxHQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNuRSxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEQsR0FBRyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7U0FDN0I7UUFDRCxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBb0I7UUFDNUIsZ0RBQWdEO1FBQ2hELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0Qsa0JBQWtCO1FBQ2xCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRTtZQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDeEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO2dCQUNoQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLFFBQVE7Z0JBQ1IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDbEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTthQUNyQixDQUFDLENBQUM7WUFDRixNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsdUNBQXVDO1lBQ3ZDLDJCQUEyQjtZQUMzQix1Q0FBdUM7WUFDdkMsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQix5QkFBeUI7WUFDekIsT0FBTztZQUNQLE1BQU07WUFDTixVQUFVO1lBQ1YsMEVBQTBFO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQW9CO1FBQy9CLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBRTtZQUNwRCxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQzlELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtnQkFDaEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO2dCQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2FBQ3JCLENBQUMsQ0FBQztZQUNILGFBQWE7WUFDYixNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPO29CQUNMLE1BQU0sRUFBRSxDQUFDO29CQUNULE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtpQkFDakIsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsU0FBUztZQUNULE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdEIsT0FBTztnQkFDUCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFVO1FBQ25CLE1BQU0sSUFBSSxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDMUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEYsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUssQ0FBQyxRQUFRLENBQUM7UUFDdEIsdUNBQVksSUFBSSxLQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsYUFBYyxDQUFDLElBQUksSUFBRztJQUNqRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQWE7UUFDMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFpQjtRQUM1QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLFlBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUNyQyxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFHLENBQUMsWUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRztRQUNELE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQUcsQ0FBQyxZQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBa0I7UUFDM0IsNEVBQTRFO1FBQzVFLE1BQU0sRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEdBQUcsS0FBSyxDQUFBO1FBRWpHLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztZQUMzRSwrRUFBK0U7YUFDOUUsS0FBSyxDQUFDLDBCQUEwQixFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFFLEVBQUUsQ0FBQzthQUMxRSxRQUFRLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBRSx3QkFBd0IsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNyRSxRQUFRLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBRSx3QkFBd0IsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNyRSxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSxvQkFBb0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN6RCxRQUFRLENBQUUsTUFBTSxLQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUUsaUJBQWlCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDcEUsUUFBUSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUscUJBQXFCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDNUQsUUFBUSxDQUFFLFNBQVMsQ0FBQSxDQUFDLENBQUMsdUJBQXVCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbkUsUUFBUSxDQUFFLE9BQU8sQ0FBQSxDQUFDLENBQUMsdUJBQXVCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDL0QsUUFBUSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsWUFBWSxHQUFHLENBQUM7YUFDakYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLFVBQVUsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTztnQkFDTCxVQUFVLEVBQUUsQ0FBQyxDQUFDLGVBQWU7Z0JBQzdCLFlBQVksRUFBRSxDQUFDLENBQUMsa0JBQWtCO2dCQUNsQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDLENBQUMsYUFBYTtnQkFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPO2dCQUNiLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUztnQkFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxjQUFjO2dCQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVU7Z0JBQ25CLE1BQU0sRUFBRSxDQUFDLENBQUMsV0FBVztnQkFDckIsTUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXO2dCQUNyQixVQUFVLEVBQUUsQ0FBQyxDQUFDLGVBQWU7Z0JBQzdCLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYTtnQkFDekIsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTO2FBQzVCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBVztRQUN6QixNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBYztRQUNqQyxJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztZQUN6QixNQUFNLEVBQUUsR0FBYSxFQUFFLENBQUM7WUFDeEIsTUFBTSxFQUFFLEdBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBVTtRQUMvQixvQ0FBb0M7UUFDcEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztDQUVGO0FBbFBELGlDQWtQQyJ9
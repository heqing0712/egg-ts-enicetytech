"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
/**
 * 请求追踪服务
 */
class SysReqLogService extends base_1.default {
    /**
     * 记录日志
     */
    async save(url, params, status, consumeTime, method, userId) {
        const ip = this.getHelper().getReqIP();
        await this.getRepo().admin.sys.ReqLog.insert({
            action: url,
            params: JSON.stringify(params),
            userId: userId === null ? undefined : userId,
            ip,
            method: method ? method.toUpperCase() : undefined,
            status,
            consumeTime,
        });
    }
    /**
     * 计算日志总数
     */
    async count() {
        return await this.getRepo().admin.sys.ReqLog.count();
    }
    /**
     * 分页加载日志信息
     */
    async page(page, count) {
        const result = await this.getRepo().admin.sys.ReqLog.find({
            order: {
                id: 'DESC',
            },
            take: count,
            skip: page * count,
        });
        return result;
    }
    /**
     * 分页查询
     */
    async search(page, count, q) {
        const allResult = await this.getRepo().admin.sys.ReqLog.createQueryBuilder('req_log')
            .where(`req_log.userId LIKE '%${q}%'`)
            .orWhere(`req_log.ip LIKE '%${q}%'`)
            .orWhere(`req_log.action LIKE '%${q}%'`)
            .orWhere(`req_log.params LIKE '%${q}%'`)
            .getMany();
        const result = await this.getRepo().admin.sys.ReqLog.createQueryBuilder('req_log')
            .where(`req_log.userId LIKE '%${q}%'`)
            .orWhere(`req_log.ip LIKE '%${q}%'`)
            .orWhere(`req_log.action LIKE '%${q}%'`)
            .orWhere(`req_log.params LIKE '%${q}%'`)
            .skip(page * count)
            .take(count)
            .getMany();
        return {
            count: allResult.length,
            logs: result,
        };
    }
    /**
     * 清空表中的所有数据
     */
    async clear() {
        await this.getRepo().admin.sys.ReqLog.clear();
    }
}
exports.default = SysReqLogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxX2xvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcV9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFFckM7O0dBRUc7QUFDSCxNQUFxQixnQkFBaUIsU0FBUSxjQUFXO0lBRXZEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxXQUFtQixFQUFFLE1BQTBCLEVBQUUsTUFBcUI7UUFDNUgsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUM5QixNQUFNLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzVDLEVBQUU7WUFDRixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDakQsTUFBTTtZQUNOLFdBQVc7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBSztRQUNULE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDeEQsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxNQUFNO2FBQ1g7WUFDRCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSztTQUNuQixDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsQ0FBUztRQUNqRCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDbEYsS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQzthQUNyQyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDO2FBQ25DLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7YUFDdkMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQzthQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNiLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQzthQUMvRSxLQUFLLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDO2FBQ3JDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7YUFDbkMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQzthQUN2QyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDWCxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU87WUFDTCxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0NBRUY7QUF0RUQsbUNBc0VDIn0=
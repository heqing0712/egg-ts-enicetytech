"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
/**
 * 任务调度服务
 */
class SysTaskService extends base_1.default {
    /**
     * 记录任务日志
     */
    async record(tid, status) {
        const result = await this.getRepo().admin.sys.TaskLog.save({
            taskId: tid,
            status,
        });
        return result.id;
    }
    async updateTaskStatus(id, status, detail) {
        this.getRepo().admin.sys.TaskLog.update(id, {
            status,
            detail,
        });
    }
    /**
     * 计算日志总数
     */
    async count() {
        return await this.getRepo().admin.sys.TaskLog.count();
    }
    /**
     * 分页加载日志信息
     */
    async page(page, count) {
        // const result = await this.getRepo().admin.sys.TaskLog.find({
        //   order: {
        //     id: 'DESC',
        //   },
        //   take: count,
        //   skip: page * count,
        // });
        // return result;
        const result = await this.getRepo().admin.sys.TaskLog.createQueryBuilder('task_log')
            .leftJoinAndSelect('sys_task', 'task', 'task_log.task_id = task.id')
            .orderBy('task_log.id', 'DESC')
            .offset(page * count)
            .limit(count)
            .getRawMany();
        return result.map(e => {
            return {
                id: e.task_log_id,
                taskId: e.task_id,
                name: e.task_name,
                createTime: e.task_log_createTime,
                finishTime: e.task_log_updateTime,
                detail: e.task_log_detail,
                status: e.task_log_status,
            };
        });
    }
    /**
     * 清空表中的所有数据
     */
    async clear() {
        await this.getRepo().admin.sys.TaskLog.clear();
    }
}
exports.default = SysTaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza19sb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrX2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUVyQzs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSxjQUFXO0lBRXJEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDekQsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFlO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzFDLE1BQU07WUFDTixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEtBQUs7UUFDVCxPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDcEMsK0RBQStEO1FBQy9ELGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLGlCQUFpQjtRQUNqQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7YUFDakYsaUJBQWlCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSw0QkFBNEIsQ0FBQzthQUNuRSxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQzthQUM5QixNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osVUFBVSxFQUFFLENBQUM7UUFDaEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXO2dCQUNqQixNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUztnQkFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxtQkFBbUI7Z0JBQ2pDLFVBQVUsRUFBRSxDQUFDLENBQUMsbUJBQW1CO2dCQUNqQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLENBQUMsZUFBZTthQUMxQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FFRjtBQWpFRCxpQ0FpRUMifQ==
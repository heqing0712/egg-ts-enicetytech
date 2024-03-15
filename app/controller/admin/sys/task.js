"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const base_1 = require("../../base");
const comm_1 = require("../../../dto/comm");
const task_1 = require("../../../dto/admin/sys/task");
/**
 * 请求追踪控制器
 */
class SysTaskController extends base_1.default {
    /**
     * @api {get} /admin/sys/task/page 获取任务列表
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiSuccess {SysTask[]} data.list 任务列表
     */
    async page() {
        const dto = await this.ctx.validate(comm_1.PageGetDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.sys.task.page(dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.sys.task.count(),
                },
            },
        });
    }
    /**
     * @api {post} /admin/sys/task/add 新增任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 任务名称
     * @apiParam {String} service 调用服务路径
     * @apiParam {Number} type 任务类型
     * @apiParam {Number} status 任务状态
     * @apiParam {String} startTime 启动时间
     * @apiParam {String} endTime 启动时间
     * @apiParam {Number} limit 最大运行次数，小于等于0则不限次数
     * @apiParam {String} cron cron表达式
     * @apiParam {Number} every 间隔时间
     * @apiParam {String} data 运行参数，JSON格式的字符串
     * @apiParam {String} remark 任务备注
     */
    async add() {
        const dto = await this.ctx.validate(task_1.CreateTaskDto);
        await this.service.admin.sys.task.addOrUpdate(dto);
        this.res();
    }
    /**
     * @api {post} /admin/sys/task/update 更新任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 任务名称
     * @apiParam {String} service 调用服务路径
     * @apiParam {Number} type 任务类型
     * @apiParam {Number} status 任务状态
     * @apiParam {String} startTime 启动时间
     * @apiParam {String} endTime 启动时间
     * @apiParam {Number} limit 最大运行次数，小于等于0则不限次数
     * @apiParam {String} cron cron表达式
     * @apiParam {Number} every 间隔时间
     * @apiParam {String} data 运行参数，JSON格式的字符串
     * @apiParam {String} remark 任务备注
     * @apiParam {Number} id 任务编号
     */
    async update() {
        const dto = await this.ctx.validate(task_1.UpdateTaskDto);
        await this.service.admin.sys.task.addOrUpdate(dto);
        this.res();
    }
    /**
     * @api {get} /admin/sys/task/info 获取任务信息
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 任务编号
     * @apiSuccess {SysTask} data 任务列表
     */
    async info() {
        const dto = await this.ctx.validate(task_1.CheckIdTaskDto);
        this.res({
            data: await this.service.admin.sys.task.info(dto.id),
        });
    }
    /**
     * @api {post} /admin/sys/task/once 手动执行一次任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 任务编号
     */
    async once() {
        const dto = await this.ctx.validate(task_1.CheckIdTaskDto);
        const task = await this.service.admin.sys.task.info(dto.id);
        await this.service.admin.sys.task.once(task);
        this.res();
    }
    /**
     * @api {post} /admin/sys/task/stop 停止任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 任务编号
     */
    async stop() {
        const dto = await this.ctx.validate(task_1.CheckIdTaskDto);
        const task = await this.service.admin.sys.task.info(dto.id);
        await this.service.admin.sys.task.stop(task);
        this.res();
    }
    /**
     * @api {post} /admin/sys/task/start 启动任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 任务编号
     */
    async start() {
        const dto = await this.ctx.validate(task_1.CheckIdTaskDto);
        const task = await this.service.admin.sys.task.info(dto.id);
        await this.service.admin.sys.task.start(task);
        this.res();
    }
    /**
     * @api {post} /admin/sys/task/delete 删除任务
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 任务编号
     */
    async delete() {
        const dto = await this.ctx.validate(task_1.CheckIdTaskDto);
        const task = await this.service.admin.sys.task.info(dto.id);
        await this.service.admin.sys.task.delete(task);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/update', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/info', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "info", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/once', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "once", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/stop', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "stop", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/start', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "start", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskController.prototype, "delete", null);
exports.default = SysTaskController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQWdFO0FBQ2hFLHFDQUF3QztBQUN4Qyw0Q0FBK0M7QUFDL0Msc0RBQTJGO0FBRTNGOztHQUVHO0FBQ0gsTUFBcUIsaUJBQWtCLFNBQVEsY0FBYztJQUUzRDs7Ozs7OztPQU9HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFhLGlCQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNyRSxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDZixLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtpQkFDakQ7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWlCLHFCQUFjLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNyRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixxQkFBYyxDQUFDLENBQUM7UUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixxQkFBYyxDQUFDLENBQUM7UUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLEtBQUs7UUFDVCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixxQkFBYyxDQUFDLENBQUM7UUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQixxQkFBYyxDQUFDLENBQUM7UUFDcEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0NBRUY7QUEzSUM7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQzs7Ozs2Q0FhbkM7QUFvQkQ7SUFEQyw0QkFBVSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7Ozs7NENBS25DO0FBcUJEO0lBREMsNEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUM7Ozs7K0NBS3RDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQzs7Ozs2Q0FNcEM7QUFVRDtJQURDLDRCQUFVLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDOzs7OzZDQU1wQztBQVVEO0lBREMsNEJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7Ozs7NkNBTXBDO0FBVUQ7SUFEQyw0QkFBVSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozs4Q0FNckM7QUFVRDtJQURDLDRCQUFVLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDOzs7OytDQU10QztBQXBKSCxvQ0FzSkMifQ==
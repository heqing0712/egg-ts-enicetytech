"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const base_1 = require("../../base");
const comm_1 = require("../../../dto/comm");
/**
 * 任务日志控制器
 */
class SysTaskLogController extends base_1.default {
    /**
     * @api {get} /admin/sys/task-log/page 获取任务日志列表
     * @apiGroup 任务调度
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiSuccess {SysTaskLog[]} data.list 任务日志列表
     */
    async page() {
        const dto = await this.ctx.validate(comm_1.PageGetDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.sys.taskLog.page(dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.sys.taskLog.count(),
                },
            },
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/task-log/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysTaskLogController.prototype, "page", null);
exports.default = SysTaskLogController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza19sb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrX2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBZ0U7QUFDaEUscUNBQXdDO0FBQ3hDLDRDQUErQztBQUUvQzs7R0FFRztBQUNILE1BQXFCLG9CQUFxQixTQUFRLGNBQWM7SUFFOUQ7Ozs7Ozs7T0FPRztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBYSxpQkFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDeEUsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2YsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7aUJBQ3BEO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7QUFkQztJQURDLDRCQUFVLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDOzs7O2dEQWF2QztBQXZCSCx1Q0F5QkMifQ==
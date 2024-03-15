"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const log_1 = require("../../../dto/admin/sys/log");
const base_1 = require("../../base");
const comm_1 = require("../../../dto/comm");
/**
 * 请求追踪控制器
 */
class SysReqLogController extends base_1.default {
    /**
     * @api {get} /admin/sys/req-log/page 获取请求追踪列表
     * @apiGroup 请求追踪
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiSuccess {SysReqLog[]} data.list 请求追踪列表
     */
    async page() {
        const dto = await this.ctx.validate(comm_1.PageGetDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.sys.reqLog.page(dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.sys.reqLog.count(),
                },
            },
        });
    }
    /**
     * @api {get} /admin/sys/req-log/search 请求追踪搜索
     * @apiGroup 请求追踪
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} q 条件
     */
    async search() {
        const dto = await this.ctx.validate(log_1.SearchLogDto, this.getQuery());
        this.res({
            data: await this.service.admin.sys.reqLog.search(dto.page - 1, dto.limit, dto.q),
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/req-log/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysReqLogController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/req-log/search', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysReqLogController.prototype, "search", null);
exports.default = SysReqLogController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxX2xvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcV9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQWdFO0FBQ2hFLG9EQUEwRDtBQUMxRCxxQ0FBd0M7QUFDeEMsNENBQStDO0FBRS9DOztHQUVHO0FBQ0gsTUFBcUIsbUJBQW9CLFNBQVEsY0FBYztJQUU3RDs7Ozs7OztPQU9HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFhLGlCQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN2RSxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDZixLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtpQkFDbkQ7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWUsa0JBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2pGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjtBQTdCQztJQURDLDRCQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDOzs7OytDQWF0QztBQVVEO0lBREMsNEJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7Ozs7aURBTXhDO0FBdENILHNDQXdDQyJ9
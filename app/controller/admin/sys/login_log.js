"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const base_1 = require("../../base");
const comm_1 = require("../../../dto/comm");
/**
 * 登录日志控制器
 */
class SysLoginLogController extends base_1.default {
    /**
     * @api {get} /admin/sys/login-log/page 获取登录日志列表
     * @apiGroup 登录日志
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiSuccess {SysLoginLog[]} data.list 登录日志列表
     */
    async page() {
        const dto = await this.ctx.validate(comm_1.PageGetDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.sys.loginLog.page(dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.sys.loginLog.count(),
                },
            },
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/login-log/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysLoginLogController.prototype, "page", null);
exports.default = SysLoginLogController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5fbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFnRTtBQUNoRSxxQ0FBd0M7QUFDeEMsNENBQStDO0FBRS9DOztHQUVHO0FBQ0gsTUFBcUIscUJBQXNCLFNBQVEsY0FBYztJQUUvRDs7Ozs7OztPQU9HO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFhLGlCQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN6RSxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDZixLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtpQkFDckQ7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRjtBQWRDO0lBREMsNEJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7Ozs7aURBYXhDO0FBdkJILHdDQXlCQyJ9
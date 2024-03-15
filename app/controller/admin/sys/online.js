"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const online_1 = require("../../../dto/admin/sys/online");
const base_1 = require("../../base");
/**
 * 在线用户控制器
 */
class SysOnlineController extends base_1.default {
    /**
     * @api {get} /admin/sys/online/list 获取在线用户列表
     * @apiGroup 在线用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiSuccess {Number} data.id 用户ID
     * @apiSuccess {String} data.ip 用户登陆IP
     * @apiSuccess {String} data.username 用户名
     * @apiSuccess {Boolean} data.isCurrent 是否为当前用户
     * @apiSuccess {String} data.time 登陆时间
     * @apiSuccess {Number} data.status 状态
     * @apiSuccess {String} data.os 登陆系统
     * @apiSuccess {String} data.browser 登陆浏览器
     * @apiSuccess {Boolean} data.disable 是否可用
     */
    async page() {
        this.res({
            data: await this.service.admin.sys.online.list(),
        });
    }
    /**
     * @api {get} /admin/sys/online/list 下线当前用户
     * @apiGroup 在线用户
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 当前用户ID
     */
    async kick() {
        const dto = await this.ctx.validate(online_1.KickDto);
        if (dto.id === this.ctx.token.uid) {
            this.res({
                code: 10012,
            });
            return;
        }
        if (dto.id === this.config.rootRoleId) {
            this.res({
                code: 10013,
            });
            return;
        }
        await this.service.admin.sys.user.forbidden(dto.id);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/online/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysOnlineController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/sys/online/kick', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], SysOnlineController.prototype, "kick", null);
exports.default = SysOnlineController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib25saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFnRTtBQUNoRSwwREFBd0Q7QUFDeEQscUNBQXdDO0FBRXhDOztHQUVHO0FBQ0gsTUFBcUIsbUJBQW9CLFNBQVEsY0FBYztJQUU3RDs7Ozs7Ozs7Ozs7Ozs7T0FjRztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVUsZ0JBQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxJQUFJLEVBQUUsS0FBSzthQUNaLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNQLElBQUksRUFBRSxLQUFLO2FBQ1osQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNSO1FBQ0QsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUVGO0FBaENDO0lBREMsNEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7Ozs7K0NBS3JDO0FBVUQ7SUFEQyw0QkFBVSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQzs7OzsrQ0FpQnRDO0FBaERILHNDQWtEQyJ9
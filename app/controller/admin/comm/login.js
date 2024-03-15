"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const verify_1 = require("../../../dto/admin/verify");
/**
 * 通用功能控制器
 */
class CommController extends base_1.default {
    /**
     * @api {get} /admin/captcha/img 获取图片验证码
     * @apiGroup 登陆验证类
     * @apiParam {Number} [width=100] 图片宽度
     * @apiParam {Number} [height=50] 图片高度
     * @apiUse BaseRes
     * @apiUse Auth
     * @apiSuccess {String} data.img base64格式的验证码图片字符串
     * @apiSuccess {String} data.id 验证码对应ID
     */
    async captchaByImg() {
        const result = await this.service.admin.comm.verify.getImgCaptcha(this.getQuery());
        this.res({
            data: result,
        });
    }
    /**
     * @api {post} /admin/auth/login 管理员登陆
     * @apiGroup 登陆验证类
     * @apiParam {String} username 用户名，AES加密
     * @apiParam {String} password 密码，AES加密
     * @apiParam {String} captchaId 验证码ID
     * @apiParam {String} verifyCode 填写的验证码
     * @apiUse BaseRes
     * @apiSuccess {String} data.token 用户Token
     */
    async login() {
        const dto = await this.ctx.validate(verify_1.LoginInfoDto);
        // const { username, password, captchaId, verifyCode } = info;
        const success = await this.service.admin.comm.verify.checkImgCaptcha(dto.captchaId, dto.verifyCode);
        if (!success) {
            this.res({
                code: 10002,
            });
            return;
        }
        const sign = await this.service.admin.comm.verify.getLoginSign(dto.username, dto.password);
        if (!sign) {
            this.res({
                code: 10003,
            });
            return;
        }
        this.res({
            data: {
                token: sign,
            },
        });
    }
    /**
     * @api {post} /admin/auth/logout 管理员登出
     * @apiGroup 登陆验证类
     * @apiUse Auth
     * @apiUse BaseRes
     */
    async logout() {
        await this.service.admin.comm.verify.clearLoginStatus(this.ctx.token.uid);
        this.res();
    }
    /**
     * @api {get} /admin/permmenu 获取权限及菜单
     * @apiGroup 登陆验证类
     * @apiUse BaseRes
     * @apiUse Auth
     * @apiSuccess {Array} data.menus 菜单
     * @apiSuccess {Array} data.perms 权限描述
     */
    async permmenu() {
        this.res({
            data: await this.service.admin.comm.verify.getPermMenu(this.ctx.token.uid),
        });
    }
    /**
     * @api {get} /admin/person 获取当前登录用户信息
     * @apiGroup 登陆验证类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiSuccess {Object} data 管理员信息实体类
     */
    async person() {
        this.res({
            data: await this.service.admin.sys.user.person(this.ctx.token.uid),
        });
    }
    /**
     * @api {post} /admin/person 更新管理员信息
     * @apiGroup 登陆验证类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 名称
     * @apiParam {String} nickName 别名
     * @apiParam {String} email 邮箱
     * @apiParam {String} phone 手机
     * @apiParam {String} originPassword 更改前密码
     * @apiParam {String} newPassword 新密码
     * @apiParam {String} remark 备注
     * @apiParam {String} headImg 头像
     */
    async personUpdate() {
        const dto = await this.ctx.validate(verify_1.UpdatePersonInfoDto);
        const result = await this.service.admin.sys.user.personUpdate(this.ctx.token.uid, dto);
        if (!result) {
            this.res({
                code: 10011,
            });
        }
        else {
            this.res();
        }
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/captcha/img', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "captchaByImg", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/login', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "login", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/logout', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "logout", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/permmenu', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "permmenu", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/person', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "person", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/person', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CommController.prototype, "personUpdate", null);
exports.default = CommController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsd0VBQWdFO0FBQ2hFLHNEQUE4RTtBQUU5RTs7R0FFRztBQUNILE1BQXFCLGNBQWUsU0FBUSxjQUFjO0lBRXhEOzs7Ozs7Ozs7T0FTRztJQUVILEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUVILEtBQUssQ0FBQyxLQUFLO1FBQ1QsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZSxxQkFBWSxDQUFDLENBQUM7UUFDaEUsOERBQThEO1FBQzlELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxJ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
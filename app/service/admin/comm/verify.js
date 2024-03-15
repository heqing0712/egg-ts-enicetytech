"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const svgCaptcha = require("svg-captcha");
const _ = require("lodash");
/**
 * 通用功能Servce
 */
class VerifyService extends base_1.default {
    /**
     * 生成图片验证码
     */
    async getImgCaptcha(params) {
        var _a, _b;
        const svg = svgCaptcha.create({
            size: 4,
            color: true,
            noise: 4,
            width: (_a = params.width) !== null && _a !== void 0 ? _a : 100,
            height: (_b = params.height) !== null && _b !== void 0 ? _b : 50,
        });
        const result = {
            img: `data:image/svg+xml;base64,${new Buffer(svg.data).toString('base64')}`,
            id: this.getHelper().generateUUID(),
            code: svg.text
        };
        // 10分钟过期时间
        await this.getAdminRedis().set(`admin:captcha:img:${result.id}`, svg.text, 'EX', 60 * 10);
        return result;
    }
    /**
     * 校验验证码
     */
    async checkImgCaptcha(id, code) {
        const result = await this.getAdminRedis().get(`admin:captcha:img:${id}`);
        if (_.isEmpty(result)) {
            return false;
        }
        if (code.toLowerCase() !== result.toLowerCase()) {
            return false;
        }
        // 校验成功后移除验证码
        await this.getAdminRedis().del(`admin:captcha:img:${id}`);
        return true;
    }
    /**
     * 获取登录JWT
     * 返回null则账号密码有误，不存在该用户
     */
    async getLoginSign(username, password) {
        const decodeUserName = this.getHelper().aesDecrypt(username, this.config.aesSecret.front);
        const decodePassword = this.getHelper().aesDecrypt(password, this.config.aesSecret.front);
        const user = await this.getRepo().admin.sys.User.findOne({ username: decodeUserName, status: 1 });
        if (_.isEmpty(user)) {
            return null;
        }
        if (this.getHelper().aesDecrypt(user.password, this.config.aesSecret.admin) !== decodePassword) {
            return null;
        }
        const perms = await this.service.admin.sys.menu.getPerms(user.id);
        const jwtSign = this.getHelper().jwtSign({
            uid: parseInt(user.id.toString()),
            pv: 1,
        }, {
            expiresIn: '24h',
        });
        await this.getAdminRedis().set(`admin:passwordVersion:${user.id}`, 1);
        await this.getAdminRedis().set(`admin:token:${user.id}`, jwtSign);
        await this.getAdminRedis().set(`admin:perms:${user.id}`, JSON.stringify(perms));
        // 保存登录日志
        await this.service.admin.sys.loginLog.save(user.id);
        return jwtSign;
    }
    /**
     * 清除登录状态信息
     */
    async clearLoginStatus(uid) {
        await this.service.admin.sys.user.forbidden(uid);
    }
    /**
     * 获取权限菜单
     */
    async getPermMenu(uid) {
        const menus = await this.service.admin.sys.menu.getMenus(uid);
        const perms = await this.service.admin.sys.menu.getPerms(uid);
        return { menus, perms };
    }
    async getRedisPasswordVersionById(id) {
        return this.getAdminRedis().get(`admin:passwordVersion:${id}`);
    }
    async getRedisTokenById(id) {
        return this.getAdminRedis().get(`admin:token:${id}`);
    }
    async getRedisPermsById(id) {
        return this.getAdminRedis().get(`admin:perms:${id}`);
    }
}
exports.default = VerifyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVyaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDBDQUEwQztBQUMxQyw0QkFBNEI7QUFFNUI7O0dBRUc7QUFDSCxNQUFxQixhQUFjLFNBQVEsY0FBVztJQUVwRDs7T0FFRztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTTs7UUFDeEIsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLFFBQUUsTUFBTSxDQUFDLEtBQUssbUNBQUksR0FBRztZQUMxQixNQUFNLFFBQUUsTUFBTSxDQUFDLE1BQU0sbUNBQUksRUFBRTtTQUM1QixDQUFDLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRztZQUNiLEdBQUcsRUFBRSw2QkFBNkIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7U0FDZCxDQUFDO1FBQ0YsV0FBVztRQUNYLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQVUsRUFBRSxJQUFZO1FBQzVDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FB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
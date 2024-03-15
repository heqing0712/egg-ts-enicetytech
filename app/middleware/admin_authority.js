"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
// 无需token的地址
const noTokenUrl = [
    '/api/admin/captcha/img',
    '/api/admin/login',
    '/api/admin/editor/ueditor'
];
const noPermUrl = [
    '/api/admin/permmenu',
    '/api/admin/person',
    '/api/admin/logout',
];
/**
 * Admin权限验证中间件，只检测/admin开头请求
 * Token验证通过会把当前解析的Token解析把对象挂载到ctx.token上,token对象例如{ uid, pv }
 */
function AdminAuthority() {
    return async (ctx, next) => {
        const { url } = ctx;
        let statusCode = 200;
        let errorCode = 0;
        const checkPerm = false;
        const token = ctx.get('Authorization');
        if (_.startsWith(url, '/api/admin')) {
            if (noTokenUrl.includes(url.split('?')[0])) {
                await next();
                return;
            }
            try {
                ctx.token = ctx.helper.jwtVerify(token);
            }
            catch (e) {
                statusCode = 401;
                errorCode = 11001;
            }
            if (ctx.token) {
                if (noPermUrl.includes(url.split('?')[0])) {
                    await next();
                    return;
                }
                const pv = await ctx.service.admin.comm.verify.getRedisPasswordVersionById(ctx.token.uid);
                if (pv !== `${ctx.token.pv}`) {
                    // 判断密码版本，防止登录时更改密码还在允许使用
                    errorCode = 11002;
                    statusCode = 401;
                }
                else {
                    const redisToken = await ctx.service.admin.comm.verify.getRedisTokenById(ctx.token.uid);
                    // 查询token是否一致
                    if (token !== redisToken) {
                        errorCode = 11002;
                        statusCode = 401;
                    }
                    else if (checkPerm) {
                        // 遍历权限是否包含该url，不包含则无访问权限
                        let perms = await ctx.service.admin.comm.verify.getRedisPermsById(ctx.token.uid);
                        if (_.isEmpty(perms)) {
                            errorCode = 11001;
                            statusCode = 403;
                        }
                        else {
                            // 将sys:admin:user等转换成sys/admin/user
                            perms = JSON.parse(perms).map(e => {
                                return e.replace(/:/g, '/');
                            });
                            if (!perms.includes(url.split('?')[0].replace('/admin/', ''))) {
                                errorCode = 11003;
                                statusCode = 403;
                            }
                        }
                    }
                }
            }
            if (statusCode > 200) {
                ctx.status = 200;
                ctx.body = {
                    code: errorCode,
                    message: ctx.helper.getErrorMessageByCode(`${errorCode}`),
                };
                return;
            }
        }
        // has perms, pass
        await next();
    };
}
exports.default = AdminAuthority;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5fYXV0aG9yaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW5fYXV0aG9yaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNEJBQTRCO0FBRTVCLGFBQWE7QUFDYixNQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUc7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDcEIsQ0FBQztBQUdGOzs7R0FHRztBQUNILFNBQXdCLGNBQWM7SUFDcEMsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQXdCLEVBQUUsRUFBRTtRQUN0RCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBRXZCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNuQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLElBQUksRUFBRSxDQUFDO2dCQUNiLE9BQU87YUFDUjtZQUNELElBQUk7Z0JBQ0YsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDbkI7WUFFRCxJ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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = exports.Route = exports.initRouter = void 0;
/**
 * 记录各个routerUrl的路由配置，使用initRouter统一设置
 */
const __router__ = {};
/**
 * 推入路由配置
 */
function _setRouter(url, option) {
    __router__[url] = __router__[url] || [];
    __router__[url].push(option);
}
/**
 * 注册路由，路由信息是通过装饰器收集的
 * router.head - HEAD
 * router.options - OPTIONS
 * router.get - GET
 * router.put - PUT
 * router.post - POST
 * router.patch - PATCH
 * router.delete - DELETE
 * router.del - 由于 delete 是一个保留字，所以提供了一个 delete 方法的别名。
 * router.redirect - 可以对 URL 进行重定向处理，比如我们最经常使用的可以把用户访问的根目录路由到某个主页。
 * @param app Application
 */
function initRouter(app) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { router } = app;
    Object.keys(__router__).forEach(url => {
        __router__[url].forEach((opt) => {
            router[opt.httpMethod](opt.url, ...opt.beforeMiddlewares, async (ctx) => {
                const ist = new opt.constructorFn(ctx);
                if (opt.validator) {
                    // 如果存在validator，则先进行参数校验
                    if (opt.httpMethod === 'get') {
                        const query = opt.validator.params ? await ctx.validate(opt.validator.params, ctx.request.query) : null;
                        await ist[opt.handleName].call(ist, { query });
                    }
                    else {
                        const query = opt.validator.params ? await ctx.validate(opt.validator.params, ctx.request.query) : null;
                        const body = opt.validator.body ? await ctx.validate(opt.validator.body, ctx.request.body) : null;
                        await ist[opt.handleName].call(ist, { body, query });
                    }
                }
                else {
                    await ist[opt.handleName].call(ist);
                }
                // await ist[opt.handleName].call(ist);
            });
        });
    });
}
exports.initRouter = initRouter;
/**
 * 收集路由信息，使用@Route装饰器
 */
function Route(url, method, validator, beforeMiddlewares = []) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (target, funcName, _descriptor) {
        _setRouter(url, {
            httpMethod: method,
            beforeMiddlewares,
            handleName: funcName,
            constructorFn: target.constructor,
            className: target.constructor.name,
            validator,
            url,
        });
    };
}
exports.Route = Route;
const PREFIX_ADMIN = '/api/admin';
/**
 * 自动添加/admin前缀的Url路由装饰器
 * 例如 url 为 /sys/user/add, 使用该装饰器可直接变为/admin/sys/user/add
 */
function AdminRoute(url, method, validator, beforeMiddlewares = []) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return function (target, funcName, _descriptor) {
        _setRouter(url, {
            httpMethod: method,
            beforeMiddlewares,
            handleName: funcName,
            constructorFn: target.constructor,
            className: target.constructor.name,
            validator,
            url: `${PREFIX_ADMIN}${url}`,
        });
    };
}
exports.AdminRoute = AdminRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3JlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyX3JlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFDO0FBeUIzQjs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFDLEdBQVcsRUFBRSxNQUFvQjtJQUNuRCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxTQUFnQixVQUFVLENBQUMsR0FBZ0I7SUFDekMsNkRBQTZEO0lBQzdELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEdBQVksRUFBRSxFQUFFO2dCQUMvRSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRTtvQkFDakIseUJBQXlCO29CQUN6QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO3dCQUM1QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxH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
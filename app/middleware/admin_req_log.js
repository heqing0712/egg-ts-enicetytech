"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 日志中间件，记录请求
 */
function AdminReqLog() {
    return async (ctx, next) => {
        const startTime = Date.now();
        await next();
        const reportTime = Date.now() - startTime;
        const { url } = ctx;
        // 该接口不做记录/admin/sys/log/page
        if (url.startsWith('/api/admin') && !url.startsWith('/api/admin/sys/req-log/page')) {
            ctx.service.admin.sys.reqLog.save(url.split('?')[0], ctx.req.method === 'GET' ? ctx.request.query : ctx.request.body, ctx.status, reportTime, ctx.req.method, ctx.token ? ctx.token.uid : null);
        }
    };
}
exports.default = AdminReqLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5fcmVxX2xvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluX3JlcV9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7R0FFRztBQUNILFNBQXdCLFdBQVc7SUFDakMsT0FBTyxLQUFLLEVBQUUsR0FBWSxFQUFFLElBQXdCLEVBQUUsRUFBRTtRQUN0RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNiLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDMUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNwQiw2QkFBNkI7UUFDN0IsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO1lBQ2xGLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5STtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFaRCw4QkFZQyJ9
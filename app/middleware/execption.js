"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 统一异常处理
 */
function Exception() {
    return async (ctx, next) => {
        try {
            await next();
        }
        catch (err) {
            const { errors } = err;
            ctx.logger.error('[Exception]', err.message, errors);
            ctx.set('Content-Type', 'application/json');
            // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const status = err.status || 500;
            const message = status === 500 && ctx.app.config.env === 'prod' ? '服务器好像出了点问题...稍后再试试' : err.message;
            ctx.status = status;
            ctx.body = JSON.stringify({
                errorCode: err.errorCode || 500,
                message,
            });
        }
    };
}
exports.default = Exception;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhlY3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0dBRUc7QUFDSCxTQUF3QixTQUFTO0lBQy9CLE9BQU8sS0FBSyxFQUFFLEdBQVksRUFBRSxJQUF3QixFQUFFLEVBQUU7UUFDdEQsSUFBSTtZQUNGLE1BQU0sSUFBSSxFQUFFLENBQUM7U0FDZDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVDLHdDQUF3QztZQUN4QyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNqQyxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3JHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDeEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRztnQkFDL0IsT0FBTzthQUNSLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWxCRCw0QkFrQkMifQ==
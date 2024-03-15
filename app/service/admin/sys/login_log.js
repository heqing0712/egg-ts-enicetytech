"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const ua_parser_js_1 = require("ua-parser-js");
/**
 * 登录日志服务
 */
class SysLoginLogService extends base_1.default {
    /**
     * 记录登录日志
     */
    async save(id) {
        await this.getRepo().admin.sys.LoginLog.save({
            ip: this.getHelper().getReqIP(),
            userId: id,
            ua: this.ctx.get('user-agent'),
        });
    }
    /**
     * 计算日志总数
     */
    async count() {
        return await this.getRepo().admin.sys.LoginLog.count();
    }
    /**
     * 分页加载日志信息
     */
    async page(page, count) {
        // const result = await this.getRepo().admin.sys.LoginLog.find({
        //   order: {
        //     id: 'DESC',
        //   },
        //   take: count,
        //   skip: page * count,
        // });
        const result = await this.getRepo().admin.sys.LoginLog.createQueryBuilder('login_log')
            .innerJoinAndSelect('sys_user', 'user', 'login_log.user_id = user.id')
            .orderBy('login_log.createTime', 'DESC')
            .offset(page * count)
            .limit(count)
            .getRawMany();
        const parser = new ua_parser_js_1.UAParser();
        return result.map(e => {
            const u = parser.setUA(e.login_log_ua).getResult();
            return {
                id: e.login_log_id,
                ip: e.login_log_ip,
                os: `${u.os.name} ${u.os.version}`,
                browser: `${u.browser.name} ${u.browser.version}`,
                time: e.login_log_createTime,
                username: e.user_username,
            };
        });
    }
    /**
     * 清空表中的所有数据
     */
    async clear() {
        await this.getRepo().admin.sys.LoginLog.clear();
    }
}
exports.default = SysLoginLogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5fbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLCtDQUF3QztBQUV4Qzs7R0FFRztBQUNILE1BQXFCLGtCQUFtQixTQUFRLGNBQVc7SUFFekQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzNDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQy9CLE1BQU0sRUFBRSxFQUFFO1lBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBSztRQUNULE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNwQyxnRUFBZ0U7UUFDaEUsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixNQUFNO1FBQ04sTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2FBQ25GLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsNkJBQTZCLENBQUM7YUFDckUsT0FBTyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzthQUN2QyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osVUFBVSxFQUFFLENBQUM7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBUSxFQUFFLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25ELE9BQU87Z0JBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZO2dCQUNsQixFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVk7Z0JBQ2xCLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDakQsSUFBSSxFQUFFLENBQUMsQ0FBQyxvQkFBb0I7Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYTthQUMxQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsS0FBSztRQUNULE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FFRjtBQTFERCxxQ0EwREMifQ==
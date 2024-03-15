"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const ua_parser_js_1 = require("ua-parser-js");
/**
 * 在线用户Service
 */
class SysOnlineService extends base_1.default {
    async list() {
        const onlineUserIds = await this.getAdminRedis().keys('admin:token:*');
        const formatNumberIds = onlineUserIds.map(e => {
            const uid = e.split('admin:token:')[1];
            return parseInt(uid);
        });
        return await this.findLastLoginInfo(formatNumberIds);
    }
    /**
     * 根据用户id列表查找最近登录信息和用户信息
     */
    async findLastLoginInfo(ids) {
        const result = await this.ctx.ormManager.query(`
    SELECT n.*, u.username
      FROM sys_login_log n
      INNER JOIN (
        SELECT user_id, MAX(createTime) AS createTime
        FROM sys_login_log GROUP BY user_id
      ) AS max USING (user_id, createTime)
      INNER JOIN sys_user u ON n.user_id = u.id
      WHERE n.user_id IN (?)
    `, [ids]);
        if (result) {
            const parser = new ua_parser_js_1.UAParser();
            return result.map(e => {
                const u = parser.setUA(e.ua).getResult();
                return {
                    id: e.user_id,
                    ip: e.ip,
                    username: e.username,
                    isCurrent: this.ctx.token.uid === e.user_id,
                    time: e.createTime,
                    status: 1,
                    os: `${u.os.name} ${u.os.version}`,
                    browser: `${u.browser.name} ${u.browser.version}`,
                    disable: this.ctx.token.uid === e.user_id || e.user_id === this.config.rootRoleId,
                };
            });
        }
        return [];
    }
}
exports.default = SysOnlineService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25saW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib25saW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLCtDQUF3QztBQUV4Qzs7R0FFRztBQUNILE1BQXFCLGdCQUFpQixTQUFRLGNBQVc7SUFFdkQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLGFBQWEsR0FBYSxNQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakYsTUFBTSxlQUFlLEdBQWEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0RCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBYTtRQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7O0tBUzlDLEVBQUUsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDO1FBQ1osSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFRLEVBQUUsQ0FBQztZQUM5QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN6QyxPQUFPO29CQUNMLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTztvQkFDYixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO29CQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPO29CQUMzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVU7b0JBQ2xCLE1BQU0sRUFBRSxDQUFDO29CQUNULEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNsQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDakQsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2lCQUNsRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUVGO0FBN0NELG1DQTZDQyJ9
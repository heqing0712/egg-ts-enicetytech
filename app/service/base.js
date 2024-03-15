"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class BaseService extends egg_1.Service {
    /**
     * 所有实体会加载在ctx.entities中, 所有仓库会加载到ctx.repo;
     * 多数据库时加载在对应的ctx.entities[connectName]与ctx.repo[connectionName]上;
     * 详见typings/typeorm.d.ts文件
     */
    getRepo() {
        return this.ctx.repo;
    }
    getEntity() {
        return this.ctx.entity;
    }
    /**
     * 获取Helper
     */
    getHelper() {
        return this.ctx.helper;
    }
    /**
     * admin redis
     */
    getAdminRedis() {
        return (this.app.redis.get('admin'));
    }
}
exports.default = BaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBeUM7QUFHekMsTUFBcUIsV0FBWSxTQUFRLGFBQU87SUFFOUM7Ozs7T0FJRztJQUNILE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhO1FBQ1gsT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBMEIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBRUY7QUE3QkQsOEJBNkJDIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopMessageService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        return await this.getRepo().admin.shop.Message.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        return await this.getRepo().admin.shop.Message.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        return await this.getRepo().admin.shop.Message.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, name, page, startTime, endTime, goodsName } = query;
        const result = await this.getRepo().admin.shop.Message.createQueryBuilder('message')
            .where(goodsName ? `message.goodsName like '%${goodsName}%'` : '1 = 1')
            .andWhere(name ? `message.name like '%${name}%'` : '1 = 1')
            .andWhere(startTime ? `message.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `message.createTime <= '${endTime}'` : '1 = 1')
            .orderBy({
            'message.id': 'DESC'
        })
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
}
exports.default = ShopMessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFHckMsZ0NBQWdDO0FBRWhDOztHQUVHO0FBQ0gsTUFBcUIsa0JBQW1CLFNBQVEsY0FBVztJQUV6RDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBdUI7UUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztLQUVDO0lBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFhO1FBQ3hCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFHRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBdUI7UUFDbEMsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQXNCO1FBQy9CLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUVsRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7YUFDakYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdEUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUJBQXVCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDMUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQTBCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbEUsT0FBTyxDQUFDO1lBQ1AsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FBQzthQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBSUY7QUE5Q0QscUNBOENDIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopHomeService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Home.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Home.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Home.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, id, uuid, lang, status } = query;
        const result = await this.getRepo().admin.shop.Home.createQueryBuilder('home')
            .where(title ? `home.title like '%${title}%'` : '1 = 1')
            .andWhere(id ? `home.id = ${id}` : '1 = 1')
            .andWhere(uuid ? `home.uuid = ${uuid}` : '1 = 1')
            .andWhere(lang ? `home.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `home.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `home.createTime <= '${endTime}'` : '1 = 1')
            .andWhere(status > -1 ? `page.status = ${status}` : '1 = 1')
            .orderBy('home.sort', 'ASC')
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
   * 分页查询
   */
    async list(query) {
        const { lang } = query;
        const result = await this.getRepo().admin.shop.Home.createQueryBuilder('home')
            .where('home.status = 1')
            .andWhere(lang ? `home.lang = '${lang}'` : '1 = 1')
            .orderBy('home.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(id) {
        const model = await this.getRepo().admin.shop.Home.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error('内容id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopHomeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBRTVCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLGVBQWdCLFNBQVEsY0FBVztJQUV0RDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBbUI7UUFDM0IsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFQzs7S0FFQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUM5QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQzNCLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUV0RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDM0UsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUscUJBQXFCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDekQsUUFBUSxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzVDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNsRCxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSxnQkFBZ0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNwRCxRQUFRLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQyx1QkFBdUIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNuRSxRQUFRLENBQUUsT0FBTyxDQUFBLENBQUMsQ0FBQyx1QkFBdUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMvRCxRQUFRLENBQUUsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxpQkFBaUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN6RCxPQUFPLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQzthQUMxQixNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osZUFBZSxFQUFFLENBQUM7UUFDckIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUdDOztLQUVDO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFrQjtRQUMzQixNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzthQUMzRSxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDeEIsUUFBUSxDQUFFLElBQUksQ0FBQSxDQUFDLENBQUUsZ0JBQWdCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbkQsT0FBTyxDQUFDLFdBQVcsRUFBQyxLQUFLLENBQUM7YUFDMUIsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBS0M7OztLQUdDO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFVO1FBQ25CLE1BQU0sS0FBSyxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUNELHlCQUFZLEtBQUssRUFBRztJQUN0QixDQUFDO0NBR0Y7QUEzRUQsa0NBMkVDIn0=
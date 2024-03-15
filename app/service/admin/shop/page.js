"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopPageService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Page.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Page.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Page.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, id, uuid, lang } = query;
        const result = await this.getRepo().admin.shop.Page.createQueryBuilder('page')
            .where(title ? `page.title like '%${title}%'` : '1 = 1')
            .andWhere(id ? `page.id = ${id}` : '1 = 1')
            .andWhere(uuid ? `page.uuid = ${uuid}` : '1 = 1')
            .andWhere(lang ? `page.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `page.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `page.createTime <= '${endTime}'` : '1 = 1')
            .orderBy('page.sort', 'ASC')
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
        const result = await this.getRepo().admin.shop.Page.createQueryBuilder('page')
            .where('page.status = 1')
            .andWhere(lang ? `page.lang = '${lang}'` : '1 = 1')
            .orderBy('page.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(query) {
        const _query = query.id ? { id: query.id } : { identifier: query.identifier };
        const model = await this.getRepo().admin.shop.Page.findOne(_query);
        if (_.isEmpty(model)) {
            throw new Error('内容id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopPageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBRTVCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLGVBQWdCLFNBQVEsY0FBVztJQUV0RDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBbUI7UUFDM0IsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFQzs7S0FFQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUM5QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQzNCLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFBO1FBRWhFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzthQUMzRSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBRSxxQkFBcUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN6RCxRQUFRLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDNUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUUsZUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ2xELFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLGdCQUFnQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3BELFFBQVEsQ0FBRSxTQUFTLENBQUEsQ0FBQyxDQUFDLHVCQUF1QixTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ25FLFFBQVEsQ0FBRSxPQUFPLENBQUEsQ0FBQyxDQUFDLHVCQUF1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQy9ELE9BQU8sQ0FBQyxXQUFXLEVBQUMsS0FBSyxDQUFDO2FBQzFCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR0M7O0tBRUM7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQzNCLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN4QixRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSxnQkFBZ0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNuRCxPQUFPLENBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQzthQUMxQixPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFHQzs7O0tBR0M7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWlCO1FBQzFCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsQ0FBQSxDQUFDLENBQUEsRUFBQyxVQUFVLEVBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxDQUFBO1FBQ3JFLE1BQU0sS0FBSyxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUNELHlCQUFZLEtBQUssRUFBRztJQUN0QixDQUFDO0NBTUY7QUE1RUQsa0NBNEVDIn0=
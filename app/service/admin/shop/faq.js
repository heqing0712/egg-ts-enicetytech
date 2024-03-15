"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopFaqService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Faq.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Faq.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Faq.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, id, uuid, lang, status } = query;
        const result = await this.getRepo().admin.shop.Faq.createQueryBuilder('faq')
            .where(title ? `faq.title like '%${title}%'` : '1 = 1')
            .andWhere(id ? `faq.id = ${id}` : '1 = 1')
            .andWhere(uuid ? `faq.uuid = ${uuid}` : '1 = 1')
            .andWhere(lang ? `faq.lang = '${lang}'` : '1 = 1')
            .andWhere(status > -1 ? `faq.status = ${status}` : '1 = 1')
            .andWhere(startTime ? `faq.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `faq.createTime <= '${endTime}'` : '1 = 1')
            .orderBy({
            'faq.sort': 'ASC',
            'faq.id': 'DESC'
        })
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
        const result = await this.getRepo().admin.shop.Faq.createQueryBuilder('faq')
            .where('faq.status = 1')
            .andWhere(lang ? `faq.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'faq.sort': 'ASC',
            'faq.id': 'DESC'
        })
            .getMany();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(id) {
        const model = await this.getRepo().admin.shop.Faq.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error('内容id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopFaqService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUU1QixnQ0FBZ0M7QUFFaEM7O0dBRUc7QUFDSCxNQUFxQixjQUFlLFNBQVEsY0FBVztJQUVyRDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBa0I7UUFDMUIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFQzs7S0FFQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFrQjtRQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWlCO1FBQzFCLE1BQU0sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUN0RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7YUFDekUsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsb0JBQW9CLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDeEQsUUFBUSxDQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzNDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNqRCxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSxlQUFlLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbkQsUUFBUSxDQUFFLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsZ0JBQWdCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDeEQsUUFBUSxDQUFFLFNBQVMsQ0FBQSxDQUFDLENBQUMsc0JBQXNCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbEUsUUFBUSxDQUFFLE9BQU8sQ0FBQSxDQUFDLENBQUMsc0JBQXNCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDOUQsT0FBTyxDQUFDO1lBQ1AsVUFBVSxFQUFDLEtBQUs7WUFDaEIsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQzthQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR0M7O0tBRUM7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWlCO1FBQzFCLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2FBQ3pFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2QixRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSxlQUFlLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDbEQsT0FBTyxDQUFDO1lBQ1AsVUFBVSxFQUFDLEtBQUs7WUFDaEIsUUFBUSxFQUFFLE1BQU07U0FDakIsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUtDOzs7S0FHQztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBVTtRQUNuQixNQUFNLEtBQUssR0FBUSxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFDRCx5QkFBWSxLQUFLLEVBQUc7SUFDdEIsQ0FBQztDQUdGO0FBaEZELGlDQWdGQyJ9
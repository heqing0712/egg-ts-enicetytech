"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopContentService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Content.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Content.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Content.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, id, uuid, lang, status } = query;
        const result = await this.getRepo().admin.shop.Content.createQueryBuilder('content')
            .where(title ? `content.title like '%${title}%'` : '1 = 1')
            .andWhere(id ? `content.id = ${id}` : '1 = 1')
            .andWhere(uuid ? `content.uuid = ${uuid}` : '1 = 1')
            .andWhere(lang ? `content.lang = '${lang}'` : '1 = 1')
            .andWhere(status > -1 ? `content.status = ${status}` : '1 = 1')
            .andWhere(startTime ? `content.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `content.createTime <= '${endTime}'` : '1 = 1')
            .orderBy('content.sort', 'ASC')
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
        const result = await this.getRepo().admin.shop.Content.createQueryBuilder('content')
            .where('content.status = 1')
            .andWhere(lang ? `content.lang = '${lang}'` : '1 = 1')
            .orderBy('content.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(query) {
        const _query = query.id ? { id: query.id } : { identifier: query.identifier };
        const model = await this.getRepo().admin.shop.Content.findOne(_query);
        if (_.isEmpty(model)) {
            throw new Error('参数有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopContentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBRTVCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLGtCQUFtQixTQUFRLGNBQVc7SUFFekQ7O09BRUc7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQXNCO1FBQzlCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUM7O0tBRUM7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQVk7UUFDdkIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBc0I7UUFDakMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFxQjtRQUM5QixNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFFdEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO2FBQ2pG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
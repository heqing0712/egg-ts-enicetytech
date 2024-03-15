"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 焦点图service
 */
class ShopBannerService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Banner.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Banner.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Banner.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, id, status, lang } = query;
        const result = await this.getRepo().admin.shop.Banner.createQueryBuilder('banner')
            .where(title ? `banner.title like '%${title}%'` : '1 = 1')
            .andWhere(id ? `bnner.id = ${id}` : '1 = 1')
            .andWhere(status > -1 ? `banner.status = ${status}` : '1 = 1')
            .andWhere(startTime ? `banner.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `banner.createTime <= '${endTime}'` : '1 = 1')
            .andWhere(lang ? `banner.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'banner.sort': 'ASC',
            'banner.id': 'DESC'
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
        const result = await this.getRepo().admin.shop.Banner.createQueryBuilder('banner')
            .where('banner.status = 1')
            .andWhere(lang ? `banner.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'banner.sort': 'ASC',
            'banner.id': 'DESC'
        })
            .getMany();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(id) {
        const model = await this.getRepo().admin.shop.Banner.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error('焦点图id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopBannerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDRCQUE0QjtBQUU1QixnQ0FBZ0M7QUFFaEM7O0dBRUc7QUFDSCxNQUFxQixpQkFBa0IsU0FBUSxjQUFXO0lBRXhEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFxQjtRQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVDOztLQUVDO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQXFCO1FBQ2hDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBb0I7UUFDN0IsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2FBQy9FLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFFLHVCQUF1QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzNELFFBQVEsQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUM3QyxRQUFRLENBQUUsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxtQkFBbUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMzRCxRQUFRLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQyx5QkFBeUIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNyRSxRQUFRLENBQUUsT0FBTyxDQUFBLENBQUMsQ0FBQyx5QkFBeUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNqRSxRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSxrQkFBa0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNyRCxPQUFPLENBQUM7WUFDUCxhQUFhLEVBQUMsS0FBSztZQUNuQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO2FBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLGVBQWUsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFJRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBb0I7UUFDN0IsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUNwQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDL0UsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2FBQzFCLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLGtCQUFrQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3RELE9BQU8sQ0FBQztZQUNQLGFBQWEsRUFBQyxLQUFLO1lBQ25CLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFQzs7O0tBR0M7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxLQUFLLEdBQVEsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7Q0FFRjtBQTVFRCxvQ0E0RUMifQ==
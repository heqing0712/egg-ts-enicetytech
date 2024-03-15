"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
const Settings_1 = require("../../../dto/admin/shop/Settings");
// import { In } from 'typeorm';
/**
 * 内容service
 */
class ShopSettingsService extends base_1.default {
    /**
     * 创建
     */
    async add(model) {
        await this.getRepo().admin.shop.Settings.insert(model);
    }
    /**
   * 删除
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Settings.delete(ids);
    }
    /**
     * 修改
     */
    async update(model) {
        await this.getRepo().admin.shop.Settings.update(model.id, model);
    }
    /**
     * 分页查询
     */
    async page(query) {
        const { limit, name, page, startTime, endTime, id, lang } = query;
        const result = await this.getRepo().admin.shop.Settings.createQueryBuilder('Settings')
            .where(name ? `Settings.name like '%${name}%'` : '1 = 1')
            .andWhere(id ? `Settings.id = ${id}` : '1 = 1')
            .andWhere(lang ? `Settings.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `Settings.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `Settings.createTime <= '${endTime}'` : '1 = 1')
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
   * 信息
   * @param id
   */
    async info(query) {
        const { lang } = query;
        const filter = {};
        if (lang) {
            filter.lang = lang;
        }
        let model = await this.getRepo().admin.shop.Settings.findOne(filter);
        if (_.isEmpty(model)) {
            //throw new Error('查询配置有误');
            const d = new Settings_1.CreateSettingsDto();
            d.lang = lang;
            model = await this.add(d);
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopSettingsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw0QkFBNEI7QUFDNUIsK0RBQTJIO0FBQzNILGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLG1CQUFvQixTQUFRLGNBQVc7SUFFMUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQXVCO1FBQy9CLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUM7O0tBRUM7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQVk7UUFDdkIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFHRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBdUI7UUFDbEMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFzQjtRQUMvQixNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEdBQUcsS0FBSyxDQUFBO1FBRXpELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzthQUNuRixLQUFLLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSx3QkFBd0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMxRCxRQUFRLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNoRCxRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSxvQkFBb0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2RCxRQUFRLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQywyQkFBMkIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN2RSxRQUFRLENBQUUsT0FBTyxDQUFBLENBQUMsQ0FBQywyQkFBMkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNuRSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osZUFBZSxFQUFFLENBQUM7UUFDckIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVDOzs7S0FHQztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBc0I7UUFDL0IsTUFBTSxFQUFFLElBQUksRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUNyQixNQUFNLE1BQU0sR0FBTSxFQUFFLENBQUE7UUFFcEIsSUFBRyxJQUFJLEVBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtTQUNuQjtRQUNELElBQUksS0FBSyxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsNEJBQTRCO1lBQzVCLE1BQU0sQ0FBQyxHQUFxQixJQUFJLDRCQUFpQixFQUFFLENBQUE7WUFDbkQsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7WUFDYixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzFCO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7Q0FFRjtBQS9ERCxzQ0ErREMifQ==
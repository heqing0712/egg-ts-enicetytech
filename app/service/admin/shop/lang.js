"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 系统部门Service
 */
class ShopLangService extends base_1.default {
    /**
     * 语言
     */
    async add(model) {
        await this.getRepo().admin.shop.Lang.save(model);
    }
    /**
   * 删除语言
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Lang.delete(ids);
    }
    /**
     * 修改语言
     */
    async update(model) {
        await this.getRepo().admin.shop.Lang.update(model.id, model);
    }
    /**
     * 语言分页
     */
    async page(query) {
        const { limit, name, title, page, startTime, endTime } = query;
        const result = await this.getRepo().admin.shop.Lang.createQueryBuilder('langs')
            .where(name ? `langs.name like '%${name}%'` : '1 = 1')
            .andWhere(title ? `langs.title like '%${title}%'` : '1 = 1')
            .andWhere(startTime ? `langs.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `langs.createTime <= '${endTime}'` : '1 = 1')
            .addOrderBy('langs.sort', 'ASC')
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
     * 所有语言
     */
    async list() {
        const result = await this.getRepo().admin.shop.Lang.createQueryBuilder('lang')
            .andWhere('status = 1')
            .orderBy('lang.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
     * 通过url查收语言
     * @param url
     */
    async getModelByUrl(url) {
        const model = await this.getRepo().admin.shop.Lang.findOne({ url });
        if (_.isEmpty(model)) {
            // throw new Error('语言参数有误');
            return null;
        }
        return Object.assign({}, model);
    }
    /**
     * 查找语言信息
     * @param id 商品id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.Lang.findOne(id);
        if (_.isEmpty(model)) {
            return null;
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopLangService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBRTVCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLGVBQWdCLFNBQVEsY0FBVztJQUV0RDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBbUI7UUFDM0IsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFQzs7S0FFQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFtQjtRQUM5QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWtCO1FBQzNCLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUN2RCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7YUFDNUUsS0FBSyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUUscUJBQXFCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDdkQsUUFBUSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUUsc0JBQXNCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDN0QsUUFBUSxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDckUsUUFBUSxDQUFFLE9BQU8sQ0FBQSxDQUFDLENBQUMsd0JBQXdCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDaEUsVUFBVSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7YUFDL0IsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLGVBQWUsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzNFLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDdEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7YUFDM0IsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFVO1FBQzVCLE1BQU0sS0FBSyxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLDZCQUE2QjtZQUM3QixPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7SUFJRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxLQUFLLEdBQVEsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7Q0FHRjtBQWhGRCxrQ0FnRkMifQ==
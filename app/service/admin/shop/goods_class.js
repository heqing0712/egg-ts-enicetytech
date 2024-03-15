"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 系统部门Service
 */
class ShopGoodsClassService extends base_1.default {
    /**
     * 分类
     */
    async add(model) {
        await this.getRepo().admin.shop.GoodsClass.save(model);
    }
    /**
   * 删除分类
   */
    async delete(ids) {
        await this.getRepo().admin.shop.GoodsClass.delete(ids);
        await this.service.admin.shop.goods.deleteByGoodsClassIds(ids);
    }
    /**
     * 修改分类
     */
    async update(model) {
        await this.getRepo().admin.shop.GoodsClass.update(model.id, model);
    }
    /**
     * 商品分类分页
     */
    async page(query) {
        //const {id,limit,createTime,email,username,name,page, departmentId} = query
        const { limit, name, page, startTime, endTime, lang } = query;
        const result = await this.getRepo().admin.shop.GoodsClass.createQueryBuilder('goods_class')
            .where(name ? `goods_class.name like '%${name}%'` : '1 = 1')
            .andWhere(lang ? `goods_class.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `goods_class.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `goods_class.createTime <= '${endTime}'` : '1 = 1')
            .addOrderBy('goods_class.sort', 'ASC')
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
     * 所有商品分类
     */
    async list(query) {
        const { lang } = query;
        const result = await this.getRepo().admin.shop.GoodsClass.createQueryBuilder('goods_class')
            .andWhere(lang ? `goods_class.lang = '${lang}'` : '1 = 1')
            .orderBy('goods_class.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
     * 通过url查收商品分类
     * @param url
     */
    async getModelByUrl(url, lang) {
        const model = await this.getRepo().admin.shop.GoodsClass.findOne({ url, lang });
        if (_.isEmpty(model)) {
            // throw new Error('商品分类参数有误');
            return null;
        }
        return Object.assign({}, model);
    }
    /**
     * 查找商品分类信息
     * @param id 商品id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.GoodsClass.findOne(id);
        if (_.isEmpty(model)) {
            return null;
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopGoodsClassService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kc19jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw0QkFBNEI7QUFFNUIsZ0NBQWdDO0FBRWhDOztHQUVHO0FBQ0gsTUFBcUIscUJBQXNCLFNBQVEsY0FBVztJQUU1RDs7T0FFRztJQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBeUI7UUFDakMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFQzs7S0FFQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFLRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBeUI7UUFDcEMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUdEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUF3QjtRQUNqQyw0RUFBNEU7UUFDNUUsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEdBQUcsS0FBSyxDQUFBO1FBRXRELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQzthQUN4RixLQUFLLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSwyQkFBMkIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUM3RCxRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSx1QkFBdUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMxRCxRQUFRLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQyw4QkFBOEIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUMxRSxRQUFRLENBQUUsT0FBTyxDQUFBLENBQUMsQ0FBQyw4QkFBOEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN0RSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO2FBQ3JDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQXdCO1FBQ2pDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO2FBQ3hGLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLHVCQUF1QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzNELE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7YUFDbEMsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFVLEVBQUMsSUFBVztRQUN4QyxNQUFNLEtBQUssR0FBUSxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsK0JBQStCO1lBQy9CLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCx5QkFBWSxLQUFLLEVBQUc7SUFDdEIsQ0FBQztJQUlEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBVTtRQUNuQixNQUFNLEtBQUssR0FBUSxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCx5QkFBWSxLQUFLLEVBQUc7SUFDdEIsQ0FBQztDQUdGO0FBdkZELHdDQXVGQyJ9
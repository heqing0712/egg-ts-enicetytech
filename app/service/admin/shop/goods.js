"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
const goods_1 = require("../../../dto/admin/shop/goods");
const class_transformer_1 = require("class-transformer");
// import { In } from 'typeorm';
/**
 * 商品service
 */
class ShopGoodsService extends base_1.default {
    /**
     * 修改商品
     */
    async add(model) {
        await this.getRepo().admin.shop.Goods.insert(model);
    }
    /**
   * 删除商品
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Goods.delete(ids);
    }
    // 删除分类下的所有商品
    async deleteByGoodsClassIds(goodsClassIds) {
        const goodsList = await this.listByGoodsClassIds(goodsClassIds);
        const goodsIds = goodsList.map((d) => { return d.id; });
        if (goodsIds.length) {
            await this.delete(goodsIds);
        }
    }
    /**
     * 修改分类
     */
    async update(model) {
        await this.getRepo().admin.shop.Goods.update(model.id, model);
    }
    /**
     * 商品分类分页
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, lang, status } = query;
        const result = await this.getRepo().admin.shop.Goods.createQueryBuilder('goods')
            .where(title ? `goods.title like '%${title}%'` : '1 = 1')
            .andWhere(lang ? `goods.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `goods.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `goods.createTime <= '${endTime}'` : '1 = 1')
            .andWhere(status > -1 ? `goods.status = ${status}` : '1 = 1')
            .orderBy({
            'goods.hot': 'DESC',
            'goods.sort': 'ASC',
            'goods.id': 'DESC'
        })
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
     * 所有
     */
    async list(query) {
        const { lang, categoryId, title, hot } = query;
        let result = await this.getRepo().admin.shop.Goods.createQueryBuilder('goods')
            .where('goods.status = 1')
            .andWhere(categoryId ? `goods.categoryId = ${categoryId}` : '1 = 1')
            .andWhere(title ? `goods.title like '%${title}%'` : '1 = 1')
            .andWhere(hot !== undefined ? `goods.hot = ${hot}` : '1 = 1')
            .andWhere(lang ? `goods.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'goods.sort': 'ASC',
            'goods.id': 'DESC'
        })
            .getMany();
        const resultX = result.map(d => {
            return class_transformer_1.plainToClass(goods_1.smallGoodsDto, d, { strategy: 'excludeAll' });
        });
        return resultX;
    }
    /**
     * 所有
     */
    async listx(query) {
        const { lang, categoryId, title, hot } = query;
        let result = await this.getRepo().admin.shop.Goods.createQueryBuilder('goods')
            .where('goods.status = 1')
            .andWhere(categoryId ? `goods.categoryId = ${categoryId}` : '1 = 1')
            .andWhere(title ? `goods.title like '%${title}%'` : '1 = 1')
            .andWhere(hot !== undefined ? `goods.hot = ${hot}` : '1 = 1')
            .andWhere(lang ? `goods.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'goods.sort': 'ASC',
            'goods.id': 'DESC'
        })
            .getMany();
        return result;
    }
    /**
   * 所有
   */
    async listByGoodsClassIds(goodsClassIds) {
        const result = await this.getRepo().admin.shop.Goods.createQueryBuilder('goods')
            .andWhere(`goods.categoryId in (${goodsClassIds.join(',')})`)
            .getMany();
        return result;
    }
    /**
     * 通过分类url返回分类商品列表
     * @param url
     */
    async listByGoodsClassUrl(url, lang) {
        const goodsClassModel = await this.service.admin.shop.goodsClass.getModelByUrl(url, lang);
        let result = [];
        if (!_.isEmpty(goodsClassModel)) {
            result = await this.list(class_transformer_1.plainToClass(goods_1.QueryGoodsDto, { categoryId: goodsClassModel.id }));
        }
        return {
            goodsList: result,
            goodsClass: goodsClassModel
        };
    }
    /**
     * 查找商品信息
     * @param id 商品id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.Goods.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error('商品id有误');
        }
        return Object.assign({}, model);
    }
    /**
   * 查找商品信息
   * @param url 商品url
   */
    async infoByUrl(url, lang) {
        const model = await this.getRepo().admin.shop.Goods.findOne({ url, lang });
        if (_.isEmpty(model)) {
            throw new Error('商品id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopGoodsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyw0QkFBNEI7QUFDNUIseURBQTZHO0FBRTdHLHlEQUFrRDtBQUVsRCxnQ0FBZ0M7QUFFaEM7O0dBRUc7QUFDSCxNQUFxQixnQkFBaUIsU0FBUSxjQUFXO0lBRXZEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFvQjtRQUM1QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVDOztLQUVDO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBR0QsYUFBYTtJQUNiLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxhQUFzQjtRQUNoRCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMvRCxNQUFNLFFBQVEsR0FBYSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxFQUFDLEVBQUUsR0FBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtRQUN2RSxJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUM7WUFDakIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzVCO0lBQ0osQ0FBQztJQUlBOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFvQjtRQUMvQixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUss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
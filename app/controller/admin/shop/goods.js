"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const goods_1 = require("../../../dto/admin/shop/goods");
class ShopGoodsController extends base_1.default {
    /**
   * @api {post} /admin/shop/goods/add 新增商品分类
   * @apiGroup 商品分类
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async uploadimg() {
        //await Upload(this.ctx)
        const file = this.ctx.request.files[0];
        const data = await this.service.admin.comm.file.uploadFile(file);
        this.res({
            data
        });
    }
    /**
     * @api {post} /admin/shop/goods/add 新增商品分类
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(goods_1.CreateGoodsDto);
        await this.service.admin.shop.goods.add(dto);
        this.res();
    }
    /**
   * @api {post} /admin/shop/goods/update 修改商品分类
   * @apiGroup 修改商品分类
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async update() {
        const dto = await this.ctx.validate(goods_1.UpdateGoodsDto);
        await this.service.admin.shop.goods.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/goods/delete 删除商品
     * @apiGroup 删除商品
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} ids 商品id数组
     */
    async delete() {
        const dto = await this.ctx.validate(goods_1.DeleteGoodsDto);
        await this.service.admin.shop.goods.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/web/goods/page 获取商品分类列表
   * @apiGroup 商品分类列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiSuccess {Goods[]} data.list 用户列表
   */
    async page() {
        const dto = await this.ctx.validate(goods_1.QueryGoodsDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.goods.page(dto);
        this.res({
            data: {
                list: result[0],
                pagination: {
                    total: result[1],
                    page: dto.page + 1,
                    size: dto.limit
                }
            }
        });
    }
    /**
 * @api {get} /admin/shop/goods/info 获取商品信息
 * @apiGroup 商品信息
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 * @apiSuccess {Goods} data 商品对象
 */
    async info() {
        const dto = await this.ctx.validate(goods_1.InfoGoodsDto, this.getQuery());
        const result = await this.service.admin.shop.goods.info(dto.id);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/uploadimg', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "uploadimg", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsController.prototype, "info", null);
exports.default = ShopGoodsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsd0VBQWdFO0FBQ2hFLHlEQUE0SDtBQUc1SCxNQUFxQixtQkFBb0IsU0FBUSxjQUFjO0lBRTNEOzs7Ozs7S0FNQztJQUVILEtBQUssQ0FBQyxTQUFTO1FBQ2Isd0JBQXdCO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJO1NBQ0wsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBaUIsc0JBQWMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdDOzs7Ozs7S0FNQztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBaUIsc0JBQWMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBaUIsc0JBQWMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFJQzs7Ozs7OztLQU9DO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixxQkFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdHOzs7Ozs7O0dBT0Q7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWUsb0JBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUVqRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFuR0M7SUFEQyw0QkFBVSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQzs7OztvREFRM0M7QUFXRDtJQURDLDRCQUFVLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OzhDQUtyQztBQVdEO0lBREMsNEJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7Ozs7aURBS3ZDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQzs7OztpREFLMUM7QUFhRDtJQURDLDRCQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDOzs7OytDQWVyQztBQVlEO0lBREMsNEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7Ozs7K0NBUXJDO0FBNUdILHNDQTZHQyJ9
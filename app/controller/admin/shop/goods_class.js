"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const goods_class_1 = require("../../../dto/admin/shop/goods_class");
class ShopGoodsClassController extends base_1.default {
    /**
     * @api {post} /admin/shop/goods-class/add 新增商品分类
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} pid 分类父id
     * @apiParam {String} name 分类名称
     * @apiParam {Number} sort 分类排序
     */
    async add() {
        const dto = await this.ctx.validate(goods_class_1.CreateGoodsClassDto);
        await this.service.admin.shop.goodsClass.add(dto);
        this.res();
    }
    /**
   * @api {post} /admin/shop/goods-class/update 修改商品分类
   * @apiGroup 商品分类
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} id 分类id
   * @apiParam {Number} pid 分类父id
   * @apiParam {String} name 分类名称
   * @apiParam {Number} sort 分类排序
   */
    async update() {
        const dto = await this.ctx.validate(goods_class_1.UpdateGoodsClassDto);
        await this.service.admin.shop.goodsClass.update(dto);
        this.res();
    }
    /**
   * @api {get} /admin/shop/goods-class/page 获取商品分类列表
   * @apiGroup 商品分类列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} pid 分类父id
   * @apiSuccess {GoodsClass[]} data.list 用户列表
   */
    async page() {
        const dto = await this.ctx.validate(goods_class_1.QueryGoodsClassDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.goodsClass.page(dto);
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
 * @api {get} /admin/shop/goods-class/list 获取商品分类列表
 * @apiGroup 商品分类列表
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 * @apiParam {Number} pid 分类父id
 * @apiSuccess {GoodsClass[]} data.list 用户列表
 */
    async list() {
        const dto = await this.ctx.validate(goods_class_1.QueryGoodsClassDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.goodsClass.list(dto);
        this.res({
            data: result
        });
    }
    /**
     * @api {delete} /admin/shop/goods-class/delete 删除分类
     * @apiGroup 删除分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 分类id
     */
    async delete() {
        const dto = await this.ctx.validate(goods_class_1.DeleteGoodsClassDto);
        await this.service.admin.shop.goodsClass.delete(dto.ids);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods-class/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsClassController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods-class/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsClassController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods-class/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsClassController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods-class/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsClassController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/goods-class/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopGoodsClassController.prototype, "delete", null);
exports.default = ShopGoodsClassController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kc19jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsd0VBQWdFO0FBQ2hFLHFFQUF3STtBQUV4SSxNQUFxQix3QkFBeUIsU0FBUSxjQUFjO0lBR2xFOzs7Ozs7Ozs7T0FTRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBc0IsaUNBQW1CLENBQUMsQ0FBQztRQUM5RSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHQzs7Ozs7Ozs7OztLQVVDO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFzQixpQ0FBbUIsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdDOzs7Ozs7OztLQVFDO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFxQixnQ0FBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RixHQUFHLENBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQTtRQUNaLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBQztnQkFDSCxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZCxVQUFVLEVBQUM7b0JBQ1QsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRzs7Ozs7Ozs7R0FRRDtJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBcUIsZ0NBQWtCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0YsR0FBRyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUE7UUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUcsTUFBTTtTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFJRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQXNCLGlDQUFtQixDQUFDLENBQUM7UUFDOUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBdkZDO0lBREMsNEJBQVUsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUM7Ozs7bURBSzNDO0FBZUQ7SUFEQyw0QkFBVSxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQzs7OztzREFLN0M7QUFhRDtJQURDLDRCQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDOzs7O29EQWUzQztBQWFEO0lBREMsNEJBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7Ozs7b0RBUTNDO0FBWUQ7SUFEQyw0QkFBVSxDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBQzs7OztzREFLaEQ7QUFwR0gsMkNBcUdDIn0=
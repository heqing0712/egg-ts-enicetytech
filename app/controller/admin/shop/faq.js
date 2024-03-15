"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const faq_1 = require("../../../dto/admin/shop/faq");
class ShopFaqController extends base_1.default {
    /**
     * @api {post} /admin/shop/faq/add 新增内容
     * @apiGroup 内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(faq_1.CreateFaqDto);
        await this.service.admin.shop.faq.add(dto);
        this.res();
    }
    /**
     * @api {post} /admin/shop/faq/update 修改内容
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async update() {
        const dto = await this.ctx.validate(faq_1.UpdateFaqDto);
        await this.service.admin.shop.faq.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/faq/delete 删除内容
     * @apiGroup 删除内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 内容id
     */
    async delete() {
        const dto = await this.ctx.validate(faq_1.DeleteFaqDto);
        await this.service.admin.shop.faq.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/shop/faq/page 内容分页
   * @apiGroup 内容分页
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async page() {
        const dto = await this.ctx.validate(faq_1.QueryFaqDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.faq.page(dto);
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
    * @api {get} /admin/shop/faq/info 获取内容信息
    * @apiGroup 商品信息
    * @apiUse Auth
    * @apiUse BaseRes
    * @apiUse Page
    * @apiSuccess {Goods} data 对象
    */
    async info() {
        const dto = await this.ctx.validate(faq_1.InfoFaqDto, this.getQuery());
        const result = await this.service.admin.shop.faq.info(dto.id);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/faq/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopFaqController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/faq/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopFaqController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/faq/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopFaqController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/faq/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopFaqController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/faq/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopFaqController.prototype, "info", null);
exports.default = ShopFaqController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUN4Qyx3RUFBZ0U7QUFDaEUscURBQWdIO0FBRWhILE1BQXFCLGlCQUFrQixTQUFRLGNBQWM7SUFFM0Q7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLEdBQUc7UUFDUCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFlLGtCQUFZLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWUsa0JBQVksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUlEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZSxrQkFBWSxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdDOzs7Ozs7S0FNQztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBYyxpQkFBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVBOzs7Ozs7O01BT0U7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWEsZ0JBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUY7QUEvRUM7SUFEQyw0QkFBVSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7Ozs7NENBS25DO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQzs7OzsrQ0FLckM7QUFZRDtJQURDLDRCQUFVLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDOzs7OytDQUt4QztBQVdEO0lBREMsNEJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7Ozs7NkNBZW5DO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQzs7Ozs2Q0FPbkM7QUF2Rkgsb0NBeUZDIn0=
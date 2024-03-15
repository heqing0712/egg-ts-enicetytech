"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const banner_1 = require("../../../dto/admin/shop/banner");
class ShopBannerController extends base_1.default {
    /**
     * @api {post} /admin/shop/banner/add 新增
     * @apiGroup 焦点图
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(banner_1.CreateBannerDto);
        await this.service.admin.shop.banner.add(dto);
        this.res();
    }
    /**
 * @api {post} /admin/shop/banner/update 修改
 * @apiGroup 商品分类
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 */
    async update() {
        const dto = await this.ctx.validate(banner_1.UpdateBannerDto);
        await this.service.admin.shop.banner.update(dto);
        this.res();
    }
    /**
   * @api {get} /admin/shop/banner/page 焦点图分页
   * @apiGroup 内容分页
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async page() {
        const dto = await this.ctx.validate(banner_1.QueryBannerDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.banner.page(dto);
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
     * @api {delete} /admin/shop/banner/delete 删除
     * @apiGroup 删除内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 内容id
     */
    async delete() {
        const dto = await this.ctx.validate(banner_1.DeleteBannerDto);
        await this.service.admin.shop.banner.delete(dto.ids);
        this.res();
    }
    /**
    * @api {get} /admin/shop/banner/info 获取焦点图信息
    * @apiGroup 焦点图信息
    * @apiUse Auth
    * @apiUse BaseRes
    * @apiUse Page
    * @apiSuccess {Goods} data 对象
    */
    async info() {
        const dto = await this.ctx.validate(banner_1.InfoBannerDto, this.getQuery());
        const result = await this.service.admin.shop.banner.info(dto.id);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/banner/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopBannerController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/banner/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopBannerController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/banner/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopBannerController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/banner/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopBannerController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/banner/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopBannerController.prototype, "info", null);
exports.default = ShopBannerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUN4Qyx3RUFBZ0U7QUFDaEUsMkRBQWtJO0FBRWxJLE1BQXFCLG9CQUFxQixTQUFRLGNBQWM7SUFFOUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLEdBQUc7UUFDUCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFrQix3QkFBZSxDQUFDLENBQUM7UUFDdEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBR0c7Ozs7OztHQU1EO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFrQix3QkFBZSxDQUFDLENBQUM7UUFDdEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUM7Ozs7OztLQU1DO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFpQix1QkFBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBa0Isd0JBQWUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFQTs7Ozs7OztNQU9FO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixzQkFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRjtBQTdFQztJQURDLDRCQUFVLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDOzs7OytDQUt0QztBQVdEO0lBREMsNEJBQVUsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7Ozs7a0RBS3hDO0FBVUQ7SUFEQyw0QkFBVSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQzs7OztnREFldEM7QUFVRDtJQURDLDRCQUFVLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDOzs7O2tEQUszQztBQVdEO0lBREMsNEJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7Ozs7Z0RBUXRDO0FBckZILHVDQXVGQyJ9
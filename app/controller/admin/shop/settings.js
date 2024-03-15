"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const Settings_1 = require("../../../dto/admin/shop/Settings");
class ShopSettingsController extends base_1.default {
    /**
     * @api {post} /admin/shop/Settings/add 新增配置
     * @apiGroup 配置
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(Settings_1.CreateSettingsDto);
        await this.service.admin.shop.settings.add(dto);
        this.res();
    }
    /**
     * @api {post} /admin/shop/settings/update 修改配置
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async update() {
        const dto = await this.ctx.validate(Settings_1.UpdateSettingsDto);
        await this.service.admin.shop.settings.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/Settings/delete 删除配置
     * @apiGroup 删除配置
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 配置id
     */
    async delete() {
        const dto = await this.ctx.validate(Settings_1.DeleteSettingsDto);
        await this.service.admin.shop.settings.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/shop/settings/page 配置分页
   * @apiGroup 配置分页
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async page() {
        const dto = await this.ctx.validate(Settings_1.QuerySettingsDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.settings.page(dto);
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
* @api {get} /admin/shop/settings/info 获取配置信息
* @apiGroup 商品信息
* @apiUse Auth
* @apiUse BaseRes
* @apiUse Page
* @apiSuccess {Settings} data 对象
*/
    async info() {
        const dto = await this.ctx.validate(Settings_1.InfoSettingsDto, this.getQuery());
        const result = await this.service.admin.shop.settings.info(dto);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/settings/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopSettingsController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/settings/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopSettingsController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/settings/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopSettingsController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/settings/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopSettingsController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/settings/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopSettingsController.prototype, "info", null);
exports.default = ShopSettingsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMsd0VBQWdFO0FBQ2hFLCtEQUE4STtBQUU5SSxNQUFxQixzQkFBdUIsU0FBUSxjQUFjO0lBRWhFOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBb0IsNEJBQWlCLENBQUMsQ0FBQztRQUMxRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQW9CLDRCQUFpQixDQUFDLENBQUM7UUFDMUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFvQiw0QkFBaUIsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFLQzs7Ozs7O0tBTUM7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQW1CLDJCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVLOzs7Ozs7O0VBT0g7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWtCLDBCQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUY7QUE5RUM7SUFEQyw0QkFBVSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQzs7OztpREFLeEM7QUFVRDtJQURDLDRCQUFVLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDOzs7O29EQUsxQztBQVVEO0lBREMsNEJBQVUsQ0FBQyx1QkFBdUIsRUFBRSxRQUFRLENBQUM7Ozs7b0RBSzdDO0FBYUQ7SUFEQyw0QkFBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQzs7OztrREFleEM7QUFXRDtJQURDLDRCQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDOzs7O2tEQU94QztBQXRGSCx5Q0F3RkMifQ==
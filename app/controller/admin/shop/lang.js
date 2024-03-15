"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const lang_1 = require("../../../dto/admin/shop/lang");
class ShopLangController extends base_1.default {
    /**
     * @api {post} /admin/shop/lang/add 新增语言
     * @apiGroup 语言
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {String} name 语言名称
     * @apiParam {Number} sort 语言排序
     */
    async add() {
        const dto = await this.ctx.validate(lang_1.CreateLangDto);
        await this.service.admin.shop.lang.add(dto);
        this.res();
    }
    /**
   * @api {post} /admin/shop/lang/update 修改语言
   * @apiGroup 语言
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async update() {
        const dto = await this.ctx.validate(lang_1.UpdateLangDto);
        await this.service.admin.shop.lang.update(dto);
        this.res();
    }
    /**
   * @api {get} /admin/shop/lang/page 获取语言列表
   * @apiGroup 语言列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiSuccess {Lang[]} data.list 用户列表
   */
    async page() {
        const dto = await this.ctx.validate(lang_1.QueryLangDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.lang.page(dto);
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
   * @api {get} /admin/shop/lang/list 获取所有语言
   * @apiGroup 语言列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} pid 语言父id
   * @apiSuccess {Lang[]} data.list 用户列表
   */
    async list() {
        const result = await this.service.admin.shop.lang.list();
        this.res({
            data: result
        });
    }
    /**
     * @api {delete} /admin/shop/lang/delete 删除语言
     * @apiGroup 删除语言
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 语言id
     */
    async delete() {
        const dto = await this.ctx.validate(lang_1.DeleteLangDto);
        await this.service.admin.shop.lang.delete(dto.ids);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/lang/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopLangController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/lang/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopLangController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/lang/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopLangController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/lang/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopLangController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/lang/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopLangController.prototype, "delete", null);
exports.default = ShopLangController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSx1REFBeUc7QUFFekcsTUFBcUIsa0JBQW1CLFNBQVEsY0FBYztJQUc1RDs7Ozs7Ozs7T0FRRztJQUVILEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdDOzs7Ozs7S0FNQztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZ0Isb0JBQWEsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUdDOzs7Ozs7O0tBT0M7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWUsbUJBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRixHQUFHLENBQUMsSUFBSSxJQUFHLENBQUMsQ0FBQTtRQUNaLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBQztnQkFDSCxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZCxVQUFVLEVBQUM7b0JBQ1QsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHQzs7Ozs7Ozs7S0FRQztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUE5RUM7SUFEQyw0QkFBVSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQzs7Ozs2Q0FLcEM7QUFXRDtJQURDLDRCQUFVLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDOzs7O2dEQUt0QztBQVlEO0lBREMsNEJBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7Ozs7OENBZXBDO0FBYUQ7SUFEQyw0QkFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQzs7Ozs4Q0FNcEM7QUFVRDtJQURDLDRCQUFVLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDOzs7O2dEQUt6QztBQTFGSCxxQ0EyRkMifQ==
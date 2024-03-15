"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const content_1 = require("../../../dto/admin/shop/content");
class ShopContentController extends base_1.default {
    /**
     * @api {post} /admin/shop/content/add 新增内容
     * @apiGroup 内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(content_1.CreateContentDto);
        await this.service.admin.shop.content.add(dto);
        this.res();
    }
    /**
 * @api {post} /admin/shop/content/update 修改内容
 * @apiGroup 商品分类
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 */
    async update() {
        const dto = await this.ctx.validate(content_1.UpdateContentDto);
        await this.service.admin.shop.content.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/content/delete 删除内容
     * @apiGroup 删除内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 内容id
     */
    async delete() {
        const dto = await this.ctx.validate(content_1.DeleteContentDto);
        await this.service.admin.shop.content.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/shop/content/page 内容分页
   * @apiGroup 内容分页
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async page() {
        const dto = await this.ctx.validate(content_1.QueryContentDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.content.page(dto);
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
* @api {get} /admin/shop/content/info 获取内容信息
* @apiGroup 商品信息
* @apiUse Auth
* @apiUse BaseRes
* @apiUse Page
* @apiSuccess {Goods} data 对象
*/
    async info() {
        const dto = await this.ctx.validate(content_1.InfoContentDto, this.getQuery());
        const result = await this.service.admin.shop.content.info(dto);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/content/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopContentController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/content/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopContentController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/content/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopContentController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/content/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopContentController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/content/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopContentController.prototype, "info", null);
exports.default = ShopContentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSw2REFBd0k7QUFFeEksTUFBcUIscUJBQXNCLFNBQVEsY0FBYztJQUUvRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQW1CLDBCQUFnQixDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBR0c7Ozs7OztHQU1EO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFtQiwwQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUlEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBbUIsMEJBQWdCLENBQUMsQ0FBQztRQUN4RSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBR0M7Ozs7OztLQU1DO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFrQix5QkFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVLOzs7Ozs7O0VBT0g7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWlCLHdCQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFckYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUY7QUFoRkM7SUFEQyw0QkFBVSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQzs7OztnREFLdkM7QUFXRDtJQURDLDRCQUFVLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDOzs7O21EQUt6QztBQVlEO0lBREMsNEJBQVUsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUM7Ozs7bURBSzVDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQzs7OztpREFldkM7QUFXRDtJQURDLDRCQUFVLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDOzs7O2lEQVF2QztBQXhGSCx3Q0EwRkMifQ==
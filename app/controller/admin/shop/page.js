"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const page_1 = require("../../../dto/admin/shop/page");
class ShopPageController extends base_1.default {
    /**
     * @api {post} /admin/shop/page/add 新增内容
     * @apiGroup 内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(page_1.CreatePageDto);
        await this.service.admin.shop.page.add(dto);
        this.res();
    }
    /**
 * @api {post} /admin/shop/page/update 修改内容
 * @apiGroup 商品分类
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 */
    async update() {
        const dto = await this.ctx.validate(page_1.UpdatePageDto);
        await this.service.admin.shop.page.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/page/delete 删除内容
     * @apiGroup 删除内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 内容id
     */
    async delete() {
        const dto = await this.ctx.validate(page_1.DeletePageDto);
        await this.service.admin.shop.page.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/shop/page/page 内容分页
   * @apiGroup 内容分页
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async page() {
        const dto = await this.ctx.validate(page_1.QueryPageDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.page.page(dto);
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
* @api {get} /admin/shop/page/info 获取内容信息
* @apiGroup 商品信息
* @apiUse Auth
* @apiUse BaseRes
* @apiUse Page
* @apiSuccess {Goods} data 对象
*/
    async info() {
        const dto = await this.ctx.validate(page_1.InfoPageDto, this.getQuery());
        const result = await this.service.admin.shop.page.info(dto);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/page/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopPageController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/page/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopPageController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/page/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopPageController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/page/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopPageController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/page/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopPageController.prototype, "info", null);
exports.default = ShopPageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSx1REFBc0g7QUFFdEgsTUFBcUIsa0JBQW1CLFNBQVEsY0FBYztJQUU1RDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHRzs7Ozs7O0dBTUQ7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFJRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBR0M7Ozs7OztLQU1DO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFlLG1CQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakYsR0FBRyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUE7UUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNELElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUM7Z0JBQ0gsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsVUFBVSxFQUFDO29CQUNULEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUM7b0JBQ2YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUs7Ozs7Ozs7RUFPSDtJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBYyxrQkFBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9FLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGO0FBaEZDO0lBREMsNEJBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7Ozs7NkNBS3BDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQzs7OztnREFLdEM7QUFZRDtJQURDLDRCQUFVLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDOzs7O2dEQUt6QztBQVdEO0lBREMsNEJBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7Ozs7OENBZXBDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQzs7Ozs4Q0FRcEM7QUF4RkgscUNBMEZDIn0=
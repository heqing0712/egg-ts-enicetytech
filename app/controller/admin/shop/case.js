"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const case_1 = require("../../../dto/admin/shop/case");
class ShopCaseController extends base_1.default {
    /**
   * @api {post} /admin/shop/case/add 新增商品分类
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
     * @api {post} /admin/shop/case/add 新增商品分类
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(case_1.CreateCaseDto);
        await this.service.admin.shop.case.add(dto);
        this.res();
    }
    /**
   * @api {post} /admin/shop/case/update 修改商品分类
   * @apiGroup 修改商品分类
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
    async update() {
        const dto = await this.ctx.validate(case_1.UpdateCaseDto);
        await this.service.admin.shop.case.update(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/case/delete 删除商品
     * @apiGroup 删除商品
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} ids 商品id数组
     */
    async delete() {
        const dto = await this.ctx.validate(case_1.DeleteCaseDto);
        await this.service.admin.shop.case.delete(dto.ids);
        this.res();
    }
    /**
   * @api {get} /admin/web/case/page 获取商品分类列表
   * @apiGroup 商品分类列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiSuccess {Case[]} data.list 用户列表
   */
    async page() {
        const dto = await this.ctx.validate(case_1.QueryCaseDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.case.page(dto);
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
 * @api {get} /admin/shop/case/info 获取商品信息
 * @apiGroup 商品信息
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 * @apiSuccess {Case} data 商品对象
 */
    async info() {
        const dto = await this.ctx.validate(case_1.InfoCaseDto, this.getQuery());
        const result = await this.service.admin.shop.case.info(dto.id);
        this.res({
            data: result
        });
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/uploadimg', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "uploadimg", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case/info', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseController.prototype, "info", null);
exports.default = ShopCaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSx1REFBc0g7QUFHdEgsTUFBcUIsa0JBQW1CLFNBQVEsY0FBYztJQUUxRDs7Ozs7O0tBTUM7SUFFSCxLQUFLLENBQUMsU0FBUztRQUNiLHdCQUF3QjtRQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSTtTQUNMLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHQzs7Ozs7O0tBTUM7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWdCLG9CQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBSUM7Ozs7Ozs7S0FPQztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBZSxtQkFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLEdBQUcsQ0FBQyxJQUFJLElBQUcsQ0FBQyxDQUFBO1FBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFVBQVUsRUFBQztvQkFDVCxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdHOzs7Ozs7O0dBT0Q7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWMsa0JBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUvRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUFuR0M7SUFEQyw0QkFBVSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzs7OzttREFRMUM7QUFXRDtJQURDLDRCQUFVLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDOzs7OzZDQUtwQztBQVdEO0lBREMsNEJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7Ozs7Z0RBS3RDO0FBV0Q7SUFEQyw0QkFBVSxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQzs7OztnREFLekM7QUFhRDtJQURDLDRCQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDOzs7OzhDQWVwQztBQVlEO0lBREMsNEJBQVUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7Ozs7OENBUXBDO0FBNUdILHFDQTZHQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const case_class_1 = require("../../../dto/admin/shop/case_class");
class ShopCaseClassController extends base_1.default {
    /**
     * @api {post} /admin/shop/case-class/add 新增商品分类
     * @apiGroup 商品分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     * @apiParam {Number} pid 分类父id
     * @apiParam {String} name 分类名称
     * @apiParam {Number} sort 分类排序
     */
    async add() {
        const dto = await this.ctx.validate(case_class_1.CreateCaseClassDto);
        await this.service.admin.shop.caseClass.add(dto);
        this.res();
    }
    /**
   * @api {post} /admin/shop/case-class/update 修改商品分类
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
        const dto = await this.ctx.validate(case_class_1.UpdateCaseClassDto);
        await this.service.admin.shop.caseClass.update(dto);
        this.res();
    }
    /**
   * @api {get} /admin/shop/case-class/page 获取商品分类列表
   * @apiGroup 商品分类列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} pid 分类父id
   * @apiSuccess {CaseClass[]} data.list 用户列表
   */
    async page() {
        const dto = await this.ctx.validate(case_class_1.QueryCaseClassDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.caseClass.page(dto);
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
   * @api {get} /admin/shop/case-class/list 获取所有商品分类
   * @apiGroup 商品分类列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} pid 分类父id
   * @apiSuccess {CaseClass[]} data.list 用户列表
   */
    async list() {
        const dto = await this.ctx.validate(case_class_1.QueryCaseClassDto, this.getQuery());
        const result = await this.service.admin.shop.caseClass.list(dto);
        this.res({
            data: result
        });
    }
    /**
     * @api {delete} /admin/shop/case-class/delete 删除分类
     * @apiGroup 删除分类
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 分类id
     */
    async delete() {
        const dto = await this.ctx.validate(case_class_1.DeleteCaseClassDto);
        await this.service.admin.shop.caseClass.delete(dto.ids);
        this.res();
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case-class/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseClassController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case-class/update', 'put'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseClassController.prototype, "update", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case-class/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseClassController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case-class/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseClassController.prototype, "list", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/case-class/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopCaseClassController.prototype, "delete", null);
exports.default = ShopCaseClassController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2VfY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSxtRUFBbUk7QUFFbkksTUFBcUIsdUJBQXdCLFNBQVEsY0FBYztJQUdqRTs7Ozs7Ozs7O09BU0c7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQXFCLCtCQUFrQixDQUFDLENBQUM7UUFDNUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBR0M7Ozs7Ozs7Ozs7S0FVQztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBcUIsK0JBQWtCLENBQUMsQ0FBQztRQUM1RSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHQzs7Ozs7Ozs7S0FRQztJQUVILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBb0IsOEJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0YsR0FBRyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUE7UUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUM7Z0JBQ0gsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsVUFBVSxFQUFDO29CQUNULEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUM7b0JBQ2YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBR0M7Ozs7Ozs7O0tBUUM7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQW9CLDhCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBcUIsK0JBQWtCLENBQUMsQ0FBQztRQUM1RSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUFwRkM7SUFEQyw0QkFBVSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQzs7OztrREFLMUM7QUFlRDtJQURDLDRCQUFVLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDOzs7O3FEQUs1QztBQWFEO0lBREMsNEJBQVUsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUM7Ozs7bURBZTFDO0FBYUQ7SUFEQyw0QkFBVSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQzs7OzttREFPMUM7QUFVRDtJQURDLDRCQUFVLENBQUMseUJBQXlCLEVBQUUsUUFBUSxDQUFDOzs7O3FEQUsvQztBQWpHSCwwQ0FrR0MifQ==
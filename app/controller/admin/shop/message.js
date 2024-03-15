"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
const Message_1 = require("../../../dto/admin/shop/Message");
class ShopMessageController extends base_1.default {
    /**
     * @api {post} /admin/shop/Message/add 新增内容
     * @apiGroup 内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiUse Page
     */
    async add() {
        const dto = await this.ctx.validate(Message_1.CreateMessageDto);
        await this.service.admin.shop.message.add(dto);
        this.res();
    }
    /**
     * @api {delete} /admin/shop/Message/delete 删除内容
     * @apiGroup 删除内容
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} id 内容id
     */
    async delete() {
        const dto = await this.ctx.validate(Message_1.DeleteMessageDto);
        await this.service.admin.shop.message.delete(dto.ids);
        this.res();
    }
    /**
 * @api {get} /shop/message/page 内容分页
 * @apiGroup 内容分页
 * @apiUse Auth
 * @apiUse BaseRes
 * @apiUse Page
 */
    async page() {
        const dto = await this.ctx.validate(Message_1.QueryMessageDto, this.getQuery());
        dto.page -= 1;
        const result = await this.service.admin.shop.message.page(dto);
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
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/Message/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopMessageController.prototype, "add", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/message/delete', 'delete'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopMessageController.prototype, "delete", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/shop/message/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ShopMessageController.prototype, "page", null);
exports.default = ShopMessageController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUNoRSw2REFBc0c7QUFFdEcsTUFBcUIscUJBQXNCLFNBQVEsY0FBYztJQUUvRDs7Ozs7O09BTUc7SUFFSCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQW1CLDBCQUFnQixDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBS0Q7Ozs7OztPQU1HO0lBRUgsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFtQiwwQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFHRzs7Ozs7O0dBTUQ7SUFFSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQWtCLHlCQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkYsR0FBRyxDQUFDLElBQUksSUFBRyxDQUFDLENBQUE7UUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUM7Z0JBQ0gsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsVUFBVSxFQUFDO29CQUNULEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksRUFBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUM7b0JBQ2YsSUFBSSxFQUFDLEdBQUcsQ0FBQyxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUY7QUFoREM7SUFEQyw0QkFBVSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQzs7OztnREFLdkM7QUFhRDtJQURDLDRCQUFVLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDOzs7O21EQUs1QztBQVdEO0lBREMsNEJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7Ozs7aURBZXZDO0FBeERILHdDQTBEQyJ9
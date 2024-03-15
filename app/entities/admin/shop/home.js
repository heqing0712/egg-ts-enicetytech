"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopHome = class ShopHome extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopHome.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopHome.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopHome.prototype, "identifier", void 0);
ShopHome = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_home' })
], ShopHome);
exports.default = ShopHome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUE0QztBQUk1QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxxQkFBYztDQWFuRCxDQUFBO0FBVEM7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDUztBQVZDLFFBQVE7SUFENUIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztHQUNULFFBQVEsQ0FhNUI7a0JBYm9CLFFBQVEifQ==
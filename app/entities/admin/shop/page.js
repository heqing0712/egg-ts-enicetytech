"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopPage = class ShopPage extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopPage.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopPage.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopPage.prototype, "scontent", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopPage.prototype, "identifier", void 0);
ShopPage = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_page' })
], ShopPage);
exports.default = ShopPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUE0QztBQUk1QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxxQkFBYztDQWVuRCxDQUFBO0FBWEM7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzswQ0FDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7OzRDQUNTO0FBYkMsUUFBUTtJQUQ1QixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0dBQ1QsUUFBUSxDQWU1QjtrQkFmb0IsUUFBUSJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopContent = class ShopContent extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopContent.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopContent.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopContent.prototype, "identifier", void 0);
ShopContent = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_content' })
], ShopContent);
exports.default = ShopContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUE0QztBQUk1QyxJQUFxQixXQUFXLEdBQWhDLE1BQXFCLFdBQVksU0FBUSxxQkFBYztDQWF0RCxDQUFBO0FBVEM7SUFEQyxnQkFBTSxFQUFFOzswQ0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7NENBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzsrQ0FDUztBQVZDLFdBQVc7SUFEL0IsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQztHQUNaLFdBQVcsQ0FhL0I7a0JBYm9CLFdBQVcifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopCaseClass = class ShopCaseClass extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pid', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], ShopCaseClass.prototype, "pid", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCaseClass.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCaseClass.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCaseClass.prototype, "imgs", void 0);
ShopCaseClass = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_case_class' })
], ShopCaseClass);
exports.default = ShopCaseClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2VfY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUE0QztBQUk1QyxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxxQkFBYztDQWV4RCxDQUFBO0FBWkM7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUM1QjtBQUdaO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7OzBDQUNHO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDSTtBQVpNLGFBQWE7SUFEakMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0dBQ2YsYUFBYSxDQWVqQztrQkFmb0IsYUFBYSJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopCase = class ShopCase extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShopCase.prototype, "categoryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ShopCase.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: "original_price" }),
    tslib_1.__metadata("design:type", Number)
], ShopCase.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ShopCase.prototype, "weight", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "imgs", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "features", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "spec", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "number", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "faq", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "keyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "remark", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopCase.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShopCase.prototype, "hits", void 0);
ShopCase = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_case' })
], ShopCase);
exports.default = ShopCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXlDO0FBQ3pDLHFDQUE2QztBQUk3QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxxQkFBYztDQXFEbkQsQ0FBQTtBQWpEQztJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsQ0FBQzs7NENBQ2Q7QUFHbkI7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7NkNBQ1c7QUFHcEI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7O3VDQUNLO0FBR2Q7SUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLENBQUM7OytDQUNWO0FBR3RCO0lBREMsZ0JBQU0sRUFBRTs7d0NBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7O3NDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzswQ0FDUTtBQUdqQjtJQURDLGdCQUFNLEVBQUU7O3NDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzt3Q0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ0c7QUFHWjtJQURDLGdCQUFNLEVBQUU7O3lDQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7d0NBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7O3FDQUNHO0FBR1o7SUFEQyxnQkFBTSxDQUFDLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O3NDQUN6QjtBQWpETSxRQUFRO0lBRDVCLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7R0FDVCxRQUFRLENBcUQ1QjtrQkFyRG9CLFFBQVEifQ==
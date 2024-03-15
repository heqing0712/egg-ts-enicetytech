"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopMessage = class ShopMessage extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "mobile", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "address", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "goodsName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ShopMessage.prototype, "qty", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "unit", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopMessage.prototype, "specification", void 0);
ShopMessage = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_message' })
], ShopMessage);
exports.default = ShopMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXVDO0FBQ3ZDLHFDQUE0QztBQUk1QyxJQUFxQixXQUFXLEdBQWhDLE1BQXFCLFdBQVksU0FBUSxxQkFBYztDQTRCdEQsQ0FBQTtBQXpCQztJQURDLGdCQUFNLEVBQUU7O3lDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzswQ0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ007QUFHZjtJQURDLGdCQUFNLEVBQUU7OzRDQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7OENBQ1M7QUFJbEI7SUFEQyxnQkFBTSxFQUFFOzt3Q0FDRztBQUdaO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O2tEQUNhO0FBekJILFdBQVc7SUFEL0IsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQztHQUNaLFdBQVcsQ0E0Qi9CO2tCQTVCb0IsV0FBVyJ9
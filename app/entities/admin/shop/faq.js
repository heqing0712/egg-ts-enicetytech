"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopFaq = class ShopFaq extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopFaq.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopFaq.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopFaq.prototype, "identifier", void 0);
ShopFaq = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_faq' })
], ShopFaq);
exports.default = ShopFaq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUN4QyxxQ0FBNEM7QUFJNUMsSUFBcUIsT0FBTyxHQUE1QixNQUFxQixPQUFRLFNBQVEscUJBQWM7Q0FhbEQsQ0FBQTtBQVRDO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3dDQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ1M7QUFWQyxPQUFPO0lBRDNCLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7R0FDUixPQUFPLENBYTNCO2tCQWJvQixPQUFPIn0=
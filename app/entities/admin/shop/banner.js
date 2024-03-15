"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopBanner = class ShopBanner extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopBanner.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopBanner.prototype, "imgs", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopBanner.prototype, "url", void 0);
ShopBanner = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_banner' })
], ShopBanner);
exports.default = ShopBanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUN4QyxxQ0FBNEM7QUFJNUMsSUFBcUIsVUFBVSxHQUEvQixNQUFxQixVQUFXLFNBQVEscUJBQWM7Q0FjckQsQ0FBQTtBQVZDO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3dDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzt1Q0FDRztBQVZPLFVBQVU7SUFEOUIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQztHQUNYLFVBQVUsQ0FjOUI7a0JBZG9CLFVBQVUifQ==
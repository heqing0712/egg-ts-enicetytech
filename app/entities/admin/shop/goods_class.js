"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopGoodsClass = class ShopGoodsClass extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pid', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], ShopGoodsClass.prototype, "pid", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoodsClass.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoodsClass.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoodsClass.prototype, "imgs", void 0);
ShopGoodsClass = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_goods_class' })
], ShopGoodsClass);
exports.default = ShopGoodsClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kc19jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFDeEMscUNBQTRDO0FBSTVDLElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBZSxTQUFRLHFCQUFjO0NBZXpELENBQUE7QUFaQztJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MkNBQzVCO0FBR1o7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0c7QUFHWjtJQURDLGdCQUFNLEVBQUU7OzRDQUNJO0FBWk0sY0FBYztJQURsQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUM7R0FDaEIsY0FBYyxDQWVsQztrQkFmb0IsY0FBYyJ9
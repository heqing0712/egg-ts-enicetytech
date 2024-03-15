"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopGoods = class ShopGoods extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "categoryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: "original_price" }),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "weight", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "imgs", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "features", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "spec", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "number", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "faq", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "keyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "remark", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopGoods.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "hits", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], ShopGoods.prototype, "hot", void 0);
ShopGoods = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_goods' })
], ShopGoods);
exports.default = ShopGoods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBeUM7QUFDekMscUNBQTZDO0FBSTdDLElBQXFCLFNBQVMsR0FBOUIsTUFBcUIsU0FBVSxTQUFRLHFCQUFjO0NBdURwRCxDQUFBO0FBbkRDO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDOzs2Q0FDZDtBQUduQjtJQURDLGdCQUFNLEVBQUU7O3dDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzs4Q0FDVztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OzBDQUNPO0FBR2hCO0lBREMsZ0JBQU0sRUFBRTs7d0NBQ0s7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQzs7Z0RBQ1Y7QUFHdEI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7OzJDQUNRO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ0k7QUFHYjtJQURDLGdCQUFNLEVBQUU7O3lDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOztzQ0FDRztBQUdaO0lBREMsZ0JBQU0sRUFBRTs7MENBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ0c7QUFHWjtJQURDLGdCQUFNLENBQUMsRUFBRyxJQUFJLEVBQUUsS0FBSyxFQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7dUNBQ3pCO0FBSWI7SUFEQyxnQkFBTSxDQUFDLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O3NDQUMxQjtBQXJETyxTQUFTO0lBRDdCLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7R0FDVixTQUFTLENBdUQ3QjtrQkF2RG9CLFNBQVMifQ==
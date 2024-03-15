"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopSettings = class ShopSettings extends base_1.ShopBaseEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "logo", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "keyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "about", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "contact", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "notice", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "video", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "mobile", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "tel", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "header", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopSettings.prototype, "footer", void 0);
ShopSettings = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_settings' })
], ShopSettings);
exports.default = ShopSettings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBeUM7QUFDekMscUNBQTZDO0FBSTdDLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLHFCQUFjO0NBOEN2RCxDQUFBO0FBM0NDO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7OzBDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzswQ0FDSTtBQUdiO0lBREMsZ0JBQU0sRUFBRTs7NkNBQ087QUFHaEI7SUFEQyxnQkFBTSxFQUFFOztpREFDVztBQUdwQjtJQURDLGdCQUFNLEVBQUU7OzJDQUNLO0FBR2Q7SUFEQyxnQkFBTSxFQUFFOzs2Q0FDTztBQUdoQjtJQURDLGdCQUFNLEVBQUU7OzRDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzsyQ0FDSztBQUdkO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7OzRDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDRztBQUdaO0lBREMsZ0JBQU0sRUFBRTs7eUNBQ0c7QUFHWjtJQURDLGdCQUFNLEVBQUU7OzRDQUNNO0FBR2Y7SUFEQyxnQkFBTSxFQUFFOzs0Q0FDTTtBQTdDSSxZQUFZO0lBRGhDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7R0FDYixZQUFZLENBOENoQztrQkE5Q29CLFlBQVkifQ==
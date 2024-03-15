"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let ShopLang = class ShopLang extends base_1.BasesEntity {
};
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopLang.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopLang.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopLang.prototype, "nameEn", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopLang.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopLang.prototype, "imgs", void 0);
ShopLang = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'shop_lang' })
], ShopLang);
exports.default = ShopLang;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXlDO0FBQ3pDLHFDQUF5QztBQUl6QyxJQUFxQixRQUFRLEdBQTdCLE1BQXFCLFFBQVMsU0FBUSxrQkFBVztDQWlCaEQsQ0FBQTtBQWRHO0lBREMsZ0JBQU0sRUFBRTs7dUNBQ0s7QUFHZDtJQURDLGdCQUFNLEVBQUU7O3NDQUNJO0FBR2I7SUFEQyxnQkFBTSxFQUFFOzt3Q0FDTTtBQUdmO0lBREMsZ0JBQU0sRUFBRTs7cUNBQ0c7QUFHWjtJQURDLGdCQUFNLEVBQUU7O3NDQUNJO0FBZkksUUFBUTtJQUQ1QixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0dBQ1QsUUFBUSxDQWlCNUI7a0JBakJvQixRQUFRIn0=
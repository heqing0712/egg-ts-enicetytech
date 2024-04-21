"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopBaseEntity = exports.BasesEntity = exports.BaseEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class BaseEntity {
}
tslib_1.__decorate([
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "createTime", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "updateTime", void 0);
exports.BaseEntity = BaseEntity;
class BasesEntity extends BaseEntity {
}
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], BasesEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated("uuid"),
    tslib_1.__metadata("design:type", String)
], BasesEntity.prototype, "uuid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "int", default: 1 }),
    tslib_1.__metadata("design:type", Number)
], BasesEntity.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: "int", nullable: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], BasesEntity.prototype, "sort", void 0);
exports.BasesEntity = BasesEntity;
class ShopBaseEntity extends BasesEntity {
}
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ShopBaseEntity.prototype, "lang", void 0);
exports.ShopBaseEntity = ShopBaseEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQU1pQjtBQUVqQixNQUFzQixVQUFVO0NBTS9CO0FBSkM7SUFEQywwQkFBZ0IsRUFBRTtzQ0FDUCxJQUFJOzhDQUFDO0FBR2pCO0lBREMsMEJBQWdCLEVBQUU7c0NBQ1AsSUFBSTs4Q0FBQztBQUxuQixnQ0FNQztBQUVELE1BQXNCLFdBQVksU0FBUSxVQUFVO0NBYW5EO0FBWEM7SUFEQyxnQ0FBc0IsRUFBRTs7dUNBQ2Q7QUFJWDtJQUZDLGdCQUFNLEVBQUU7SUFDUixtQkFBUyxDQUFDLE1BQU0sQ0FBQzs7eUNBQ0w7QUFHYjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7MkNBQ3JCO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7eUNBQ3ZDO0FBWmYsa0NBYUM7QUFFRCxNQUFzQixjQUFlLFNBQVEsV0FBVztDQUd2RDtBQURDO0lBREMsZ0JBQU0sRUFBRTs7NENBQ0k7QUFGZix3Q0FHQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysUser = class SysUser extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysUser.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'department_id' }),
    tslib_1.__metadata("design:type", Number)
], SysUser.prototype, "departmentId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'nick_name', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "nickName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'head_img', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "headImg", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "phone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysUser.prototype, "remark", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'tinyint', nullable: true, default: 1 }),
    tslib_1.__metadata("design:type", Number)
], SysUser.prototype, "status", void 0);
SysUser = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_user' })
], SysUser);
exports.default = SysUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxpQkFBVTtDQWtDOUMsQ0FBQTtBQWhDQztJQURDLGdDQUFzQixFQUFFOzttQ0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQzs7NkNBQ2I7QUFHckI7SUFEQyxnQkFBTSxFQUFFOztxQ0FDSTtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQ1I7QUFHakI7SUFEQyxnQkFBTSxFQUFFOzt5Q0FDUTtBQUdqQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQzdCO0FBR2pCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDN0I7QUFHaEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDYjtBQUdkO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ2I7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNaO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7dUNBQ3pDO0FBaENJLE9BQU87SUFEM0IsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQztHQUNSLE9BQU8sQ0FrQzNCO2tCQWxDb0IsT0FBTyJ9
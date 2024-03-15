"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysRole = class SysRole extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysRole.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysRole.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], SysRole.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 50, unique: true }),
    tslib_1.__metadata("design:type", String)
], SysRole.prototype, "label", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysRole.prototype, "remark", void 0);
SysRole = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_role' })
], SysRole);
exports.default = SysRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxpQkFBVTtDQWU5QyxDQUFBO0FBYkM7SUFEQyxnQ0FBc0IsRUFBRTs7bUNBQ2Q7QUFHWDtJQURDLGdCQUFNLEVBQUU7O3VDQUNNO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDWjtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDdkI7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUNaO0FBZEksT0FBTztJQUQzQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0dBQ1IsT0FBTyxDQWUzQjtrQkFmb0IsT0FBTyJ9
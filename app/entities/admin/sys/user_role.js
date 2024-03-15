"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysUserRole = class SysUserRole extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysUserRole.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], SysUserRole.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    tslib_1.__metadata("design:type", Number)
], SysUserRole.prototype, "roleId", void 0);
SysUserRole = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_user_role' })
], SysUserRole);
exports.default = SysUserRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9yb2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcl9yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpRTtBQUNqRSxxQ0FBd0M7QUFHeEMsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsaUJBQVU7Q0FTbEQsQ0FBQTtBQVBDO0lBREMsZ0NBQXNCLEVBQUU7O3VDQUNkO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzsyQ0FDYjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7MkNBQ2I7QUFSSSxXQUFXO0lBRC9CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7R0FDYixXQUFXLENBUy9CO2tCQVRvQixXQUFXIn0=
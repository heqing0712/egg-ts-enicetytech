"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysRoleDepartment = class SysRoleDepartment extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysRoleDepartment.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    tslib_1.__metadata("design:type", Number)
], SysRoleDepartment.prototype, "roleId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'department_id' }),
    tslib_1.__metadata("design:type", Number)
], SysRoleDepartment.prototype, "departmentId", void 0);
SysRoleDepartment = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_role_department' })
], SysRoleDepartment);
exports.default = SysRoleDepartment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZV9kZXBhcnRtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9sZV9kZXBhcnRtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpRTtBQUNqRSxxQ0FBd0M7QUFHeEMsSUFBcUIsaUJBQWlCLEdBQXRDLE1BQXFCLGlCQUFrQixTQUFRLGlCQUFVO0NBU3hELENBQUE7QUFQQztJQURDLGdDQUFzQixFQUFFOzs2Q0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7aURBQ2I7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7O3VEQUNiO0FBUkYsaUJBQWlCO0lBRHJDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztHQUNuQixpQkFBaUIsQ0FTckM7a0JBVG9CLGlCQUFpQiJ9
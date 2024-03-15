"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysRoleMenu = class SysRoleMenu extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysRoleMenu.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    tslib_1.__metadata("design:type", Number)
], SysRoleMenu.prototype, "roleId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'menu_id' }),
    tslib_1.__metadata("design:type", Number)
], SysRoleMenu.prototype, "menuId", void 0);
SysRoleMenu = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_role_menu' })
], SysRoleMenu);
exports.default = SysRoleMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZV9tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9sZV9tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpRTtBQUNqRSxxQ0FBd0M7QUFHeEMsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsaUJBQVU7Q0FTbEQsQ0FBQTtBQVBDO0lBREMsZ0NBQXNCLEVBQUU7O3VDQUNkO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzsyQ0FDYjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7MkNBQ2I7QUFSSSxXQUFXO0lBRC9CLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7R0FDYixXQUFXLENBUy9CO2tCQVRvQixXQUFXIn0=
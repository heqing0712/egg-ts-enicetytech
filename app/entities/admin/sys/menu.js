"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysMenu = class SysMenu extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysMenu.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'parent_id', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], SysMenu.prototype, "parentId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysMenu.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysMenu.prototype, "router", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysMenu.prototype, "perms", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'tinyint', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysMenu.prototype, "type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysMenu.prototype, "icon", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_num', type: 'int', default: 0, nullable: true }),
    tslib_1.__metadata("design:type", Number)
], SysMenu.prototype, "orderNum", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'view_path', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysMenu.prototype, "viewPath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'boolean', nullable: true, default: true }),
    tslib_1.__metadata("design:type", Boolean)
], SysMenu.prototype, "keepalive", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'boolean', nullable: true, default: true }),
    tslib_1.__metadata("design:type", Boolean)
], SysMenu.prototype, "isShow", void 0);
SysMenu = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_menu' })
], SysMenu);
exports.default = SysMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxpQkFBVTtDQWtDOUMsQ0FBQTtBQWhDQztJQURDLGdDQUFzQixFQUFFOzttQ0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDN0I7QUFHakI7SUFEQyxnQkFBTSxFQUFFOztxQ0FDSTtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ1o7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNiO0FBR2Q7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O3FDQUMzQjtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7cUNBQ2Q7QUFHYjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUN0RDtBQUdqQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQzdCO0FBR2pCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUN4QztBQUduQjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDM0M7QUFoQ0csT0FBTztJQUQzQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0dBQ1IsT0FBTyxDQWtDM0I7a0JBbENvQixPQUFPIn0=
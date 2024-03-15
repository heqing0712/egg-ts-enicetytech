"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysDepartment = class SysDepartment extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysDepartment.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'parend_id', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], SysDepartment.prototype, "parentId", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysDepartment.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_num', type: 'int', nullable: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysDepartment.prototype, "orderNum", void 0);
SysDepartment = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_department' })
], SysDepartment);
exports.default = SysDepartment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwYXJ0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGFydG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixhQUFhLEdBQWxDLE1BQXFCLGFBQWMsU0FBUSxpQkFBVTtDQWFwRCxDQUFBO0FBWEM7SUFEQyxnQ0FBc0IsRUFBRTs7eUNBQ2Q7QUFHWDtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQzdCO0FBR2pCO0lBREMsZ0JBQU0sRUFBRTs7MkNBQ0k7QUFHYjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7OytDQUN0RDtBQVhFLGFBQWE7SUFEakMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO0dBQ2QsYUFBYSxDQWFqQztrQkFib0IsYUFBYSJ9
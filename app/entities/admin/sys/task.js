"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysTask = class SysTask extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysTask.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, unique: true }),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "service", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'tinyint', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysTask.prototype, "type", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'tinyint', default: 1 }),
    tslib_1.__metadata("design:type", Number)
], SysTask.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'start_time', type: 'datetime', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], SysTask.prototype, "startTime", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'end_time', type: 'datetime', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], SysTask.prototype, "endTime", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', nullable: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysTask.prototype, "limit", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "cron", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], SysTask.prototype, "every", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "data", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'job_opts', type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "jobOpts", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysTask.prototype, "remark", void 0);
SysTask = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_task' })
], SysTask);
exports.default = SysTask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxpQkFBVTtDQXdDOUMsQ0FBQTtBQXRDQztJQURDLGdDQUFzQixFQUFFOzttQ0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O3FDQUN6QztBQUdiO0lBREMsZ0JBQU0sRUFBRTs7d0NBQ087QUFHaEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7O3FDQUMzQjtBQUdiO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzt1Q0FDekI7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO3NDQUN0RCxJQUFJOzBDQUFDO0FBR2hCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7c0NBQ3RELElBQUk7d0NBQUM7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOztzQ0FDdEM7QUFHZDtJQURDLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3FDQUNkO0FBR2I7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUMxQjtBQUdkO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDNUI7QUFHYjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDM0M7QUFHaEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDWjtBQXRDSSxPQUFPO0lBRDNCLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7R0FDUixPQUFPLENBd0MzQjtrQkF4Q29CLE9BQU8ifQ==
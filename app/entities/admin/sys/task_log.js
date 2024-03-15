"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysTaskLog = class SysTaskLog extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysTaskLog.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'task_id' }),
    tslib_1.__metadata("design:type", Number)
], SysTaskLog.prototype, "taskId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'tinyint', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysTaskLog.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysTaskLog.prototype, "detail", void 0);
SysTaskLog = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_task_log' })
], SysTaskLog);
exports.default = SysTaskLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza19sb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrX2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBaUU7QUFDakUscUNBQXdDO0FBR3hDLElBQXFCLFVBQVUsR0FBL0IsTUFBcUIsVUFBVyxTQUFRLGlCQUFVO0NBYWpELENBQUE7QUFYQztJQURDLGdDQUFzQixFQUFFOztzQ0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7MENBQ2I7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs7MENBQ3pCO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUMxQjtBQVhJLFVBQVU7SUFEOUIsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQztHQUNaLFVBQVUsQ0FhOUI7a0JBYm9CLFVBQVUifQ==
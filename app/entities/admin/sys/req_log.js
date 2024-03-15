"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysReqLog = class SysReqLog extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysReqLog.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysReqLog.prototype, "ip", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true, name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], SysReqLog.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysReqLog.prototype, "params", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysReqLog.prototype, "action", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 15, nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysReqLog.prototype, "method", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], SysReqLog.prototype, "status", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'int', nullable: true, name: 'consume_time', default: 0 }),
    tslib_1.__metadata("design:type", Number)
], SysReqLog.prototype, "consumeTime", void 0);
SysReqLog = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_req_log' })
], SysReqLog);
exports.default = SysReqLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxX2xvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcV9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHFDQUF3QztBQUd4QyxJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxpQkFBVTtDQXdCaEQsQ0FBQTtBQXRCQztJQURDLGdDQUFzQixFQUFFOztxQ0FDZDtBQUdYO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7cUNBQ2hCO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O3lDQUM3QjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDMUI7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUNBQ3pCO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUN4QjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDekI7QUFHZjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzhDQUN0RDtBQXZCRCxTQUFTO0lBRDdCLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7R0FDWCxTQUFTLENBd0I3QjtrQkF4Qm9CLFNBQVMifQ==
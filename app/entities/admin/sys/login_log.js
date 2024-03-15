"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../base");
let SysLoginLog = class SysLoginLog extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], SysLoginLog.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true, name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], SysLoginLog.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysLoginLog.prototype, "ip", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'datetime', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], SysLoginLog.prototype, "time", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 500, nullable: true }),
    tslib_1.__metadata("design:type", String)
], SysLoginLog.prototype, "ua", void 0);
SysLoginLog = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'sys_login_log' })
], SysLoginLog);
exports.default = SysLoginLog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5fbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpRTtBQUNqRSxxQ0FBd0M7QUFHeEMsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsaUJBQVU7Q0FlbEQsQ0FBQTtBQWJDO0lBREMsZ0NBQXNCLEVBQUU7O3VDQUNkO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7OzJDQUM3QjtBQUdmO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ2hCO0FBR1g7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7c0NBQ3ZDLElBQUk7eUNBQUM7QUFHWDtJQURDLGdCQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQzdCO0FBZFEsV0FBVztJQUQvQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDO0dBQ2IsV0FBVyxDQWUvQjtrQkFmb0IsV0FBVyJ9
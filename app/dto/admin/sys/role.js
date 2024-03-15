"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoRoleDto = exports.UpdateRoleDto = exports.CreateRoleDto = exports.DeleteRoleDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class DeleteRoleDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteRoleDto.prototype, "roleIds", void 0);
exports.DeleteRoleDto = DeleteRoleDto;
class CreateRoleDto {
}
tslib_1.__decorate([
    class_validator_1.Length(2),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Matches(/^[a-z0-9A-Z]+$/),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateRoleDto.prototype, "label", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateRoleDto.prototype, "remark", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ArrayMinSize(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], CreateRoleDto.prototype, "menus", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.ArrayMinSize(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], CreateRoleDto.prototype, "depts", void 0);
exports.CreateRoleDto = CreateRoleDto;
class UpdateRoleDto extends CreateRoleDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateRoleDto.prototype, "roleId", void 0);
exports.UpdateRoleDto = UpdateRoleDto;
class InfoRoleDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoRoleDto.prototype, "roleId", void 0);
exports.InfoRoleDto = InfoRoleDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQVN5QjtBQUN6Qix5REFBMkM7QUFFM0MsTUFBYSxhQUFhO0NBSXpCO0FBREM7SUFGQywrQkFBYSxFQUFFO0lBQ2YsMEJBQU0sRUFBRTs7OENBQ1M7QUFIcEIsc0NBSUM7QUFFRCxNQUFhLGFBQWE7Q0FzQnpCO0FBbkJDO0lBRkMsd0JBQU0sQ0FBQyxDQUFDLENBQUM7SUFDVCwwQkFBTSxFQUFFOzsyQ0FDSTtBQUliO0lBRkMseUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QiwwQkFBTSxFQUFFOzs0Q0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNNO0FBS2Y7SUFIQyw0QkFBVSxFQUFFO0lBQ1osOEJBQVksQ0FBQyxDQUFDLENBQUM7SUFDZiwwQkFBTSxFQUFFOzs0Q0FDTztBQUtoQjtJQUhDLDRCQUFVLEVBQUU7SUFDWiw4QkFBWSxDQUFDLENBQUMsQ0FBQztJQUNmLDBCQUFNLEVBQUU7OzRDQUNPO0FBckJsQixzQ0FzQkM7QUFFRCxNQUFhLGFBQWMsU0FBUSxhQUFhO0NBSS9DO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ007QUFIakIsc0NBSUM7QUFFRCxNQUFhLFdBQVc7Q0FJdkI7QUFEQztJQUZDLGdDQUFjLEVBQUU7SUFDaEIsMEJBQU0sRUFBRTs7MkNBQ007QUFIakIsa0NBSUMifQ==
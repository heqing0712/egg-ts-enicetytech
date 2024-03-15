"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDeptDto = exports.InfoDeptDto = exports.DeleteDeptDto = exports.UpdateDeptDto = exports.CreateDeptDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateDeptDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateDeptDto.prototype, "departmentName", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateDeptDto.prototype, "parentDepartmentId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateDeptDto.prototype, "orderNum", void 0);
exports.CreateDeptDto = CreateDeptDto;
class UpdateDeptDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateDeptDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdateDeptDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateDeptDto.prototype, "parentId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateDeptDto.prototype, "orderNum", void 0);
exports.UpdateDeptDto = UpdateDeptDto;
class DeleteDeptDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], DeleteDeptDto.prototype, "departmentId", void 0);
exports.DeleteDeptDto = DeleteDeptDto;
class InfoDeptDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoDeptDto.prototype, "departmentId", void 0);
exports.InfoDeptDto = InfoDeptDto;
class TransferDeptDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], TransferDeptDto.prototype, "userIds", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], TransferDeptDto.prototype, "departmentId", void 0);
exports.TransferDeptDto = TransferDeptDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQU95QjtBQUN6Qix5REFBMkM7QUFFM0MsTUFBYSxhQUFhO0NBZXpCO0FBWEM7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7cURBQ2M7QUFJdkI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7eURBQ2tCO0FBTTNCO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCxxQkFBRyxDQUFDLENBQUMsQ0FBQztJQUNOLDBCQUFNLEVBQUU7OytDQUNRO0FBZG5CLHNDQWVDO0FBRUQsTUFBYSxhQUFhO0NBa0J6QjtBQWZDO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3lDQUNFO0FBSVg7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7MkNBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDUTtBQU1qQjtJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1AscUJBQUcsQ0FBQyxDQUFDLENBQUM7SUFDTiwwQkFBTSxFQUFFOzsrQ0FDUTtBQWpCbkIsc0NBa0JDO0FBRUQsTUFBYSxhQUFhO0NBSXpCO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7bURBQ1k7QUFIdkIsc0NBSUM7QUFFRCxNQUFhLFdBQVc7Q0FJdkI7QUFEQztJQUZDLGdDQUFjLEVBQUU7SUFDaEIsMEJBQU0sRUFBRTs7aURBQ1k7QUFIdkIsa0NBSUM7QUFFRCxNQUFhLGVBQWU7Q0FRM0I7QUFMQztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOztnREFDUztBQUlsQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztxREFDWTtBQVB2QiwwQ0FRQyJ9
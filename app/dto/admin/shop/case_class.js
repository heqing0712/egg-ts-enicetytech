"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCaseClassDto = exports.QueryCaseClassDto = exports.UpdateCaseClassDto = exports.CreateCaseClassDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateCaseClassDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseClassDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseClassDto.prototype, "pid", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseClassDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseClassDto.prototype, "imgs", void 0);
exports.CreateCaseClassDto = CreateCaseClassDto;
class UpdateCaseClassDto extends CreateCaseClassDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateCaseClassDto.prototype, "id", void 0);
exports.UpdateCaseClassDto = UpdateCaseClassDto;
class QueryCaseClassDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryCaseClassDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryCaseClassDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryCaseClassDto.prototype, "pid", void 0);
exports.QueryCaseClassDto = QueryCaseClassDto;
class DeleteCaseClassDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteCaseClassDto.prototype, "ids", void 0);
exports.DeleteCaseClassDto = DeleteCaseClassDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2VfY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQU15QjtBQUN6Qix5REFBaUQ7QUFDakQscUNBQXVEO0FBR3ZELE1BQWEsa0JBQW9CLFNBQVEsb0JBQWE7Q0FrQnJEO0FBZEc7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7Z0RBQ0k7QUFLYjtJQUhDLHVCQUFLLEVBQUU7SUFDUCxxQkFBRyxDQUFDLENBQUMsQ0FBQztJQUNOLDBCQUFNLEVBQUU7OytDQUNHO0FBSVo7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ0c7QUFJWjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDSTtBQWpCakIsZ0RBa0JDO0FBR0QsTUFBYSxrQkFBbUIsU0FBUSxrQkFBa0I7Q0FLekQ7QUFGRztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDRTtBQUhmLGdEQUtDO0FBR0QsTUFBYSxpQkFBa0IsU0FBUSxpQkFBVTtDQWFoRDtBQVRHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OytDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ0k7QUFJYjtJQUZDLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7OzhDQUNHO0FBWmhCLDhDQWFDO0FBRUQsTUFBYSxrQkFBa0I7Q0FJNUI7QUFEQztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzsrQ0FDSztBQUhsQixnREFJRyJ9
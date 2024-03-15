"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoPageDto = exports.DeletePageDto = exports.QueryPageDto = exports.UpdatePageDto = exports.CreatePageDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreatePageDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "scontent", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreatePageDto.prototype, "identifier", void 0);
exports.CreatePageDto = CreatePageDto;
class UpdatePageDto extends CreatePageDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdatePageDto.prototype, "id", void 0);
exports.UpdatePageDto = UpdatePageDto;
class QueryPageDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryPageDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryPageDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryPageDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryPageDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryPageDto.prototype, "identifier", void 0);
exports.QueryPageDto = QueryPageDto;
class DeletePageDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeletePageDto.prototype, "ids", void 0);
exports.DeletePageDto = DeletePageDto;
class InfoPageDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoPageDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoPageDto.prototype, "identifier", void 0);
exports.InfoPageDto = InfoPageDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQU15QjtBQUN6Qix5REFBZ0Q7QUFDaEQscUNBQXNEO0FBR3RELE1BQWEsYUFBYyxTQUFRLG9CQUFhO0NBa0IvQztBQWRHO0lBRkMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ1E7QUFJakI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7aURBQ1M7QUFoQnRCLHNDQWtCQztBQUVELE1BQWEsYUFBYyxTQUFRLGFBQWE7Q0FJL0M7QUFERztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzt5Q0FDRTtBQUhmLHNDQUlDO0FBRUQsTUFBYSxZQUFhLFNBQVEsaUJBQVU7Q0F1QjNDO0FBbkJHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzBDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDSTtBQU1iO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzt3Q0FDRTtBQUlYO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2dEQUNTO0FBdEJ0QixvQ0F1QkM7QUFFRCxNQUFhLGFBQWE7Q0FJdkI7QUFEQztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzswQ0FDSztBQUhsQixzQ0FJRztBQUVELE1BQWEsV0FBVztDQWN2QjtBQU5DO0lBTEMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQix1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7dUNBQ0U7QUFLWDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDUztBQWJwQixrQ0FjQyJ9
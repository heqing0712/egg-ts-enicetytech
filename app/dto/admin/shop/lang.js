"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLangDto = exports.QueryLangDto = exports.UpdateLangDto = exports.CreateLangDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateLangDto extends comm_1.CreateBaseSystemDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateLangDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateLangDto.prototype, "nameEn", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateLangDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateLangDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateLangDto.prototype, "imgs", void 0);
exports.CreateLangDto = CreateLangDto;
class UpdateLangDto extends CreateLangDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateLangDto.prototype, "id", void 0);
exports.UpdateLangDto = UpdateLangDto;
class QueryLangDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryLangDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryLangDto.prototype, "name", void 0);
exports.QueryLangDto = QueryLangDto;
class DeleteLangDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteLangDto.prototype, "ids", void 0);
exports.DeleteLangDto = DeleteLangDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQUt5QjtBQUN6Qix5REFBMkM7QUFDM0MscUNBQTZEO0FBRzdELE1BQWEsYUFBZSxTQUFRLDBCQUFtQjtDQXNCdEQ7QUFsQkc7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7MkNBQ0k7QUFJYjtJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzs2Q0FDTTtBQUtmO0lBRkMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0c7QUFJWjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsyQ0FDSTtBQXJCakIsc0NBc0JDO0FBR0QsTUFBYSxhQUFjLFNBQVEsYUFBYTtDQUsvQztBQUZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3lDQUNFO0FBSGYsc0NBS0M7QUFHRCxNQUFhLFlBQWEsU0FBUSxpQkFBVTtDQVUzQztBQU5HO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0k7QUFSakIsb0NBVUM7QUFFRCxNQUFhLGFBQWE7Q0FJdkI7QUFEQztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzswQ0FDSztBQUhsQixzQ0FJRyJ9
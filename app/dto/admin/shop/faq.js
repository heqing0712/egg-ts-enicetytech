"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoFaqDto = exports.DeleteFaqDto = exports.QueryFaqDto = exports.UpdateFaqDto = exports.CreateFaqDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateFaqDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateFaqDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateFaqDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateFaqDto.prototype, "identifier", void 0);
exports.CreateFaqDto = CreateFaqDto;
class UpdateFaqDto extends CreateFaqDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateFaqDto.prototype, "id", void 0);
exports.UpdateFaqDto = UpdateFaqDto;
class QueryFaqDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryFaqDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryFaqDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryFaqDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryFaqDto.prototype, "id", void 0);
exports.QueryFaqDto = QueryFaqDto;
class DeleteFaqDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteFaqDto.prototype, "ids", void 0);
exports.DeleteFaqDto = DeleteFaqDto;
class InfoFaqDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoFaqDto.prototype, "id", void 0);
exports.InfoFaqDto = InfoFaqDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxxREFNeUI7QUFDekIseURBQWdEO0FBQ2hELHFDQUFzRDtBQUd0RCxNQUFhLFlBQWEsU0FBUSxvQkFBYTtDQWM5QztBQVZHO0lBRkMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzJDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7Z0RBQ1M7QUFadEIsb0NBY0M7QUFFRCxNQUFhLFlBQWEsU0FBUSxZQUFZO0NBSTdDO0FBREc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7d0NBQ0U7QUFIZixvQ0FJQztBQUVELE1BQWEsV0FBWSxTQUFRLGlCQUFVO0NBbUIxQztBQWZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3lDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzt5Q0FDSTtBQU1iO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzt1Q0FDRTtBQWxCZixrQ0FtQkM7QUFFRCxNQUFhLFlBQVk7Q0FJdEI7QUFEQztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzt5Q0FDSztBQUhsQixvQ0FJRztBQUVELE1BQWEsVUFBVTtDQUt0QjtBQURDO0lBSEMsdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O3NDQUNFO0FBSmIsZ0NBS0MifQ==
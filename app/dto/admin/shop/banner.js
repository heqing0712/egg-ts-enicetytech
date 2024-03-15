"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBannerDto = exports.DeleteBannerDto = exports.QueryBannerDto = exports.UpdateBannerDto = exports.CreateBannerDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateBannerDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateBannerDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateBannerDto.prototype, "imgs", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateBannerDto.prototype, "url", void 0);
exports.CreateBannerDto = CreateBannerDto;
class UpdateBannerDto extends CreateBannerDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateBannerDto.prototype, "id", void 0);
exports.UpdateBannerDto = UpdateBannerDto;
class QueryBannerDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryBannerDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryBannerDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryBannerDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryBannerDto.prototype, "lang", void 0);
exports.QueryBannerDto = QueryBannerDto;
class DeleteBannerDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteBannerDto.prototype, "ids", void 0);
exports.DeleteBannerDto = DeleteBannerDto;
class InfoBannerDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoBannerDto.prototype, "id", void 0);
exports.InfoBannerDto = InfoBannerDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxxREFLeUI7QUFDekIseURBQWdEO0FBQ2hELHFDQUFzRDtBQUd0RCxNQUFhLGVBQWdCLFNBQVEsb0JBQWE7Q0FnQmpEO0FBWkc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzRDQUNHO0FBWmhCLDBDQWdCQztBQUVELE1BQWEsZUFBZ0IsU0FBUSxlQUFlO0NBSW5EO0FBREc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0U7QUFIZiwwQ0FJQztBQUVELE1BQWEsY0FBZSxTQUFRLGlCQUFVO0NBbUI3QztBQWZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ0k7QUFNYjtJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7MENBQ0U7QUFJWDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs0Q0FDSTtBQWxCakIsd0NBbUJDO0FBRUQsTUFBYSxlQUFlO0NBSXpCO0FBREM7SUFGQywrQkFBYSxFQUFFO0lBQ2YsMEJBQU0sRUFBRTs7NENBQ0s7QUFIbEIsMENBSUc7QUFFRCxNQUFhLGFBQWE7Q0FLekI7QUFEQztJQUhDLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzt5Q0FDRTtBQUpiLHNDQUtDIn0=
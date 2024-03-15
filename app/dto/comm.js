"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageGetDto = exports.PagePostDto = exports.CreateBaseDto = exports.CreateBaseSystemDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateBaseSystemDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateBaseSystemDto.prototype, "sort", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateBaseSystemDto.prototype, "status", void 0);
exports.CreateBaseSystemDto = CreateBaseSystemDto;
class CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateBaseDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateBaseDto.prototype, "sort", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateBaseDto.prototype, "status", void 0);
exports.CreateBaseDto = CreateBaseDto;
class PagePostDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], PagePostDto.prototype, "limit", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(1),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], PagePostDto.prototype, "page", void 0);
exports.PagePostDto = PagePostDto;
/**
 * 由于query获取的参数只能为string，所以要区分开
 */
class PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Type(() => Number)
    //@Transform(v => parseInt(String(v)), { toClassOnly: true })
    ,
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], PageGetDto.prototype, "limit", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    class_validator_1.Min(1),
    class_transformer_1.Type(() => Number)
    //@Transform(v => parseInt(String(v)), { toClassOnly: true })
    ,
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], PageGetDto.prototype, "page", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], PageGetDto.prototype, "startTime", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], PageGetDto.prototype, "endTime", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], PageGetDto.prototype, "status", void 0);
exports.PageGetDto = PageGetDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQU15QjtBQUN6Qix5REFBaUQ7QUFFakQsTUFBYSxtQkFBbUI7Q0FlL0I7QUFSQztJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7aURBQ0k7QUFPYjtJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7bURBQ007QUFkakIsa0RBZUM7QUFFRCxNQUFhLGFBQWE7Q0FrQnpCO0FBZEM7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7MkNBQ0k7QUFNYjtJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7MkNBQ0k7QUFPYjtJQUpDLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7NkNBQ007QUFqQmpCLHNDQWtCQztBQUVELE1BQWEsV0FBVztDQVl2QjtBQVBDO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCxxQkFBRyxDQUFDLENBQUMsQ0FBQztJQUNOLDBCQUFNLEVBQUU7OzBDQUNLO0FBTWQ7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sMEJBQU0sRUFBRTs7eUNBQ0k7QUFYZixrQ0FZQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0NBK0J0QjtBQXhCQztJQU5DLDRCQUFVLEVBQUU7SUFDWix1QkFBSyxFQUFFO0lBQ1AscUJBQUcsQ0FBQyxDQUFDLENBQUM7SUFDTix3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNwQiw2REFBNkQ7O0lBQzNELDBCQUFNLEVBQUU7O3lDQUNLO0FBUWQ7SUFOQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsNkRBQTZEOztJQUM1RCwwQkFBTSxFQUFFOzt3Q0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNRO0FBSWpCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNNO0FBT2Y7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7OzBDQUNNO0FBOUJqQixnQ0ErQkMifQ==
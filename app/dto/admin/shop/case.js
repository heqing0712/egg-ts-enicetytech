"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smallCaseDto = exports.InfoCasexDto = exports.InfoCaseDto = exports.DeleteCaseDto = exports.QueryCaseDto = exports.UpdateCaseDto = exports.CreateCaseDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateCaseDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseDto.prototype, "price", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseDto.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseDto.prototype, "weight", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "number", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "imgs", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "features", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "spec", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "faq", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "keyword", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "remark", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateCaseDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateCaseDto.prototype, "hits", void 0);
exports.CreateCaseDto = CreateCaseDto;
class UpdateCaseDto extends CreateCaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateCaseDto.prototype, "id", void 0);
exports.UpdateCaseDto = UpdateCaseDto;
class QueryCaseDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryCaseDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryCaseDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryCaseDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryCaseDto.prototype, "caseClassUrl", void 0);
exports.QueryCaseDto = QueryCaseDto;
class DeleteCaseDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteCaseDto.prototype, "ids", void 0);
exports.DeleteCaseDto = DeleteCaseDto;
class InfoCaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoCaseDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoCaseDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoCaseDto.prototype, "lang", void 0);
exports.InfoCaseDto = InfoCaseDto;
class InfoCasexDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoCasexDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoCasexDto.prototype, "lang", void 0);
exports.InfoCasexDto = InfoCasexDto;
class smallCaseDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallCaseDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallCaseDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallCaseDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallCaseDto.prototype, "price", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallCaseDto.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallCaseDto.prototype, "weight", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallCaseDto.prototype, "number", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallCaseDto.prototype, "imgs", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallCaseDto.prototype, "url", void 0);
exports.smallCaseDto = smallCaseDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQU15QjtBQUN6Qix5REFBaUQ7QUFDakQscUNBQXVEO0FBR3ZELE1BQWEsYUFBYyxTQUFRLG9CQUFhO0NBbUUvQztBQTlERztJQUhDLHVCQUFLLEVBQUU7SUFDUCxxQkFBRyxDQUFDLENBQUMsQ0FBQztJQUNOLDBCQUFNLEVBQUU7O2lEQUNVO0FBSW5CO0lBRkMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7a0RBQ1c7QUFJcEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztvREFDYTtBQUl0QjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDUTtBQUlqQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsyQ0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzBDQUNHO0FBSVo7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ007QUFJZjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDRztBQUlaO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNJO0FBakVqQixzQ0FtRUM7QUFHRCxNQUFhLGFBQWMsU0FBUSxhQUFhO0NBSy9DO0FBRkc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7eUNBQ0U7QUFIZixzQ0FLQztBQUVELE1BQWEsWUFBYSxTQUFRLGlCQUFVO0NBa0IzQztBQWRHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0c7QUFJWjtJQUZDLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O2dEQUNVO0FBSW5CO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2tEQUNZO0FBaEJ6QixvQ0FrQkM7QUFFRCxNQUFhLGFBQWE7Q0FJekI7QUFERztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzswQ0FDSztBQUhsQixzQ0FJQztBQUVELE1BQWEsV0FBVztDQWFyQjtBQVRDO0lBSEMsdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O3VDQUNFO0FBSVg7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7d0NBQ0U7QUFJWDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzt5Q0FDRztBQVpoQixrQ0FhRztBQUVELE1BQWEsWUFBWTtDQVN4QjtBQUxDO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3lDQUNFO0FBSVg7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0c7QUFSZCxvQ0FTQztBQUdILE1BQWEsWUFBYSxTQUFRLG9CQUFhO0NBdUM5QztBQXBDRztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzt3Q0FDRTtBQUlYO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2dEQUNVO0FBS25CO0lBSEMsdUJBQUssRUFBRTtJQUNQLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzsyQ0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNLO0FBS2Q7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7bURBQ2E7QUFJdEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ007QUFJZjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs0Q0FDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzBDQUNJO0FBS2I7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7eUNBQ0c7QUF0Q2hCLG9DQXVDQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoHomeDto = exports.DeleteHomeDto = exports.QueryHomeDto = exports.UpdateHomeDto = exports.CreateHomeDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateHomeDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateHomeDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateHomeDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateHomeDto.prototype, "identifier", void 0);
exports.CreateHomeDto = CreateHomeDto;
class UpdateHomeDto extends CreateHomeDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateHomeDto.prototype, "id", void 0);
exports.UpdateHomeDto = UpdateHomeDto;
class QueryHomeDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryHomeDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryHomeDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryHomeDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryHomeDto.prototype, "id", void 0);
exports.QueryHomeDto = QueryHomeDto;
class DeleteHomeDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteHomeDto.prototype, "ids", void 0);
exports.DeleteHomeDto = DeleteHomeDto;
class InfoHomeDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoHomeDto.prototype, "id", void 0);
exports.InfoHomeDto = InfoHomeDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQU15QjtBQUN6Qix5REFBZ0Q7QUFDaEQscUNBQXNEO0FBR3RELE1BQWEsYUFBYyxTQUFRLG9CQUFhO0NBZS9DO0FBWEc7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7NENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDTztBQUloQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztpREFDUztBQVp0QixzQ0FlQztBQUVELE1BQWEsYUFBYyxTQUFRLGFBQWE7Q0FJL0M7QUFERztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzt5Q0FDRTtBQUhmLHNDQUlDO0FBRUQsTUFBYSxZQUFhLFNBQVEsaUJBQVU7Q0FtQjNDO0FBZkc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MENBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsyQ0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzBDQUNJO0FBTWI7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O3dDQUNFO0FBbEJmLG9DQW1CQztBQUVELE1BQWEsYUFBYTtDQUl2QjtBQURDO0lBRkMsK0JBQWEsRUFBRTtJQUNmLDBCQUFNLEVBQUU7OzBDQUNLO0FBSGxCLHNDQUlHO0FBRUQsTUFBYSxXQUFXO0NBS3ZCO0FBREM7SUFIQyx1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7dUNBQ0U7QUFKYixrQ0FLQyJ9
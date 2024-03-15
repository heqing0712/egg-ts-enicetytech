"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContentDto = exports.DeleteContentDto = exports.QueryContentDto = exports.UpdateContentDto = exports.CreateContentDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateContentDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateContentDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateContentDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateContentDto.prototype, "identifier", void 0);
exports.CreateContentDto = CreateContentDto;
class UpdateContentDto extends CreateContentDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateContentDto.prototype, "id", void 0);
exports.UpdateContentDto = UpdateContentDto;
class QueryContentDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryContentDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryContentDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryContentDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryContentDto.prototype, "id", void 0);
exports.QueryContentDto = QueryContentDto;
class DeleteContentDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteContentDto.prototype, "ids", void 0);
exports.DeleteContentDto = DeleteContentDto;
class InfoContentDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoContentDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoContentDto.prototype, "identifier", void 0);
exports.InfoContentDto = InfoContentDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQU15QjtBQUN6Qix5REFBZ0Q7QUFDaEQscUNBQXNEO0FBR3RELE1BQWEsZ0JBQWlCLFNBQVEsb0JBQWE7Q0FjbEQ7QUFWRztJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzsrQ0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNPO0FBSWhCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O29EQUNTO0FBWnRCLDRDQWNDO0FBRUQsTUFBYSxnQkFBaUIsU0FBUSxnQkFBZ0I7Q0FJckQ7QUFERztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs0Q0FDRTtBQUhmLDRDQUlDO0FBRUQsTUFBYSxlQUFnQixTQUFRLGlCQUFVO0NBbUI5QztBQWZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDSTtBQU1iO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzsyQ0FDRTtBQWxCZiwwQ0FtQkM7QUFFRCxNQUFhLGdCQUFnQjtDQUkxQjtBQURDO0lBRkMsK0JBQWEsRUFBRTtJQUNmLDBCQUFNLEVBQUU7OzZDQUNLO0FBSGxCLDRDQUlHO0FBRUQsTUFBYSxjQUFjO0NBYTFCO0FBTkM7SUFMQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDRTtBQUtYO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2tEQUNTO0FBWnBCLHdDQWFDIn0=
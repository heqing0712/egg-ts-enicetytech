"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoSettingsDto = exports.DeleteSettingsDto = exports.QuerySettingsDto = exports.UpdateSettingsDto = exports.CreateSettingsDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateSettingsDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "logo", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "keyword", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "about", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "notice", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "contact", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "video", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "mobile", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "tel", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "header", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateSettingsDto.prototype, "footer", void 0);
exports.CreateSettingsDto = CreateSettingsDto;
class UpdateSettingsDto extends CreateSettingsDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateSettingsDto.prototype, "id", void 0);
exports.UpdateSettingsDto = UpdateSettingsDto;
class QuerySettingsDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QuerySettingsDto.prototype, "uuid", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QuerySettingsDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QuerySettingsDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QuerySettingsDto.prototype, "lang", void 0);
exports.QuerySettingsDto = QuerySettingsDto;
class DeleteSettingsDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteSettingsDto.prototype, "ids", void 0);
exports.DeleteSettingsDto = DeleteSettingsDto;
class InfoSettingsDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoSettingsDto.prototype, "lang", void 0);
exports.InfoSettingsDto = InfoSettingsDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EscURBTXlCO0FBQ3pCLHlEQUFnRDtBQUNoRCxxQ0FBc0Q7QUFHdEQsTUFBYSxpQkFBa0IsU0FBUSxvQkFBYTtDQStEbkQ7QUEzREc7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7Z0RBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNHO0FBSVo7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztrREFDTztBQUloQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztzREFDVztBQUlwQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7a0RBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7Z0RBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ0c7QUFJWjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztpREFDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNNO0FBNURuQiw4Q0ErREM7QUFFRCxNQUFhLGlCQUFrQixTQUFRLGlCQUFpQjtDQUl2RDtBQURHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNFO0FBSGYsOENBSUM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLGlCQUFVO0NBcUIvQztBQWhCRztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDSTtBQU1iO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzs0Q0FDRTtBQUtYO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDRTtBQUlYO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNHO0FBcEJoQiw0Q0FxQkM7QUFJRCxNQUFhLGlCQUFpQjtDQUkzQjtBQURDO0lBRkMsK0JBQWEsRUFBRTtJQUNmLDBCQUFNLEVBQUU7OzhDQUNLO0FBSGxCLDhDQUlHO0FBRUQsTUFBYSxlQUFlO0NBSTNCO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ0k7QUFIZiwwQ0FJQyJ9
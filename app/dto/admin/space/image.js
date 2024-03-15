"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageDto = exports.DeleteImageDto = exports.QueryImageDto = exports.CreateTypeDto = exports.DeleteTypeDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class DeleteTypeDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], DeleteTypeDto.prototype, "typeId", void 0);
exports.DeleteTypeDto = DeleteTypeDto;
class CreateTypeDto {
}
tslib_1.__decorate([
    class_validator_1.Length(2),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTypeDto.prototype, "name", void 0);
exports.CreateTypeDto = CreateTypeDto;
class QueryImageDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryImageDto.prototype, "typeId", void 0);
exports.QueryImageDto = QueryImageDto;
class DeleteImageDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.ArrayMinSize(1),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteImageDto.prototype, "imageIds", void 0);
exports.DeleteImageDto = DeleteImageDto;
class UploadImageDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UploadImageDto.prototype, "typeId", void 0);
exports.UploadImageDto = UploadImageDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBTXlCO0FBQ3pCLHlEQUEyQztBQUMzQyxxQ0FBd0M7QUFFeEMsTUFBYSxhQUFhO0NBSXpCO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ007QUFIakIsc0NBSUM7QUFFRCxNQUFhLGFBQWE7Q0FJekI7QUFEQztJQUZDLHdCQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1QsMEJBQU0sRUFBRTs7MkNBQ0k7QUFIZixzQ0FJQztBQUVELE1BQWEsYUFBYyxTQUFRLGlCQUFVO0NBSTVDO0FBREM7SUFGQyxnQ0FBYyxFQUFFO0lBQ2hCLDBCQUFNLEVBQUU7OzZDQUNNO0FBSGpCLHNDQUlDO0FBRUQsTUFBYSxjQUFjO0NBSzFCO0FBREM7SUFIQywrQkFBYSxFQUFFO0lBQ2YsOEJBQVksQ0FBQyxDQUFDLENBQUM7SUFDZiwwQkFBTSxFQUFFOztnREFDVTtBQUpyQix3Q0FLQztBQUVELE1BQWEsY0FBYztDQUkxQjtBQURDO0lBRkMsZ0NBQWMsRUFBRTtJQUNoQiwwQkFBTSxFQUFFOzs4Q0FDTTtBQUhqQix3Q0FJQyJ9
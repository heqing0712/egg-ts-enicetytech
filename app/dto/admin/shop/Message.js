"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMessageDto = exports.QueryMessageDto = exports.UpdateMessageDto = exports.CreateMessageDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateMessageDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "mobile", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "address", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "goodsName", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMessageDto.prototype, "qty", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "unit", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMessageDto.prototype, "specification", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMessageDto.prototype, "status", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMessageDto.prototype, "sort", void 0);
exports.CreateMessageDto = CreateMessageDto;
class UpdateMessageDto extends CreateMessageDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateMessageDto.prototype, "id", void 0);
exports.UpdateMessageDto = UpdateMessageDto;
class QueryMessageDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryMessageDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryMessageDto.prototype, "mobile", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryMessageDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryMessageDto.prototype, "goodsName", void 0);
exports.QueryMessageDto = QueryMessageDto;
class DeleteMessageDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteMessageDto.prototype, "ids", void 0);
exports.DeleteMessageDto = DeleteMessageDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHFEQUt5QjtBQUN6Qix5REFBZ0Q7QUFDaEQscUNBQXNEO0FBR3RELE1BQWEsZ0JBQWlCLFNBQVEsb0JBQWE7Q0FnRGxEO0FBNUNHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNPO0FBSWhCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O21EQUNTO0FBTWxCO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzs2Q0FDRztBQUlaO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7dURBQ2E7QUFNdEI7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O2dEQUNNO0FBTWY7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7OzhDQUNJO0FBOUNqQiw0Q0FnREM7QUFFRCxNQUFhLGdCQUFpQixTQUFRLGdCQUFnQjtDQUlyRDtBQURHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzRDQUNFO0FBSGYsNENBSUM7QUFFRCxNQUFhLGVBQWdCLFNBQVEsaUJBQVU7Q0FpQjlDO0FBYkc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7a0RBQ1M7QUFoQnRCLDBDQWlCQztBQUVELE1BQWEsZ0JBQWdCO0NBSTFCO0FBREM7SUFGQywrQkFBYSxFQUFFO0lBQ2YsMEJBQU0sRUFBRTs7NkNBQ0s7QUFIbEIsNENBSUcifQ==
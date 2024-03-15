"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGoodsClassDto = exports.QueryGoodsClassDto = exports.UpdateGoodsClassDto = exports.CreateGoodsClassDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateGoodsClassDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsClassDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsClassDto.prototype, "pid", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsClassDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsClassDto.prototype, "imgs", void 0);
exports.CreateGoodsClassDto = CreateGoodsClassDto;
class UpdateGoodsClassDto extends CreateGoodsClassDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateGoodsClassDto.prototype, "id", void 0);
exports.UpdateGoodsClassDto = UpdateGoodsClassDto;
class QueryGoodsClassDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryGoodsClassDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryGoodsClassDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryGoodsClassDto.prototype, "pid", void 0);
exports.QueryGoodsClassDto = QueryGoodsClassDto;
class DeleteGoodsClassDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteGoodsClassDto.prototype, "ids", void 0);
exports.DeleteGoodsClassDto = DeleteGoodsClassDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kc19jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EscURBTXlCO0FBQ3pCLHlEQUFpRDtBQUNqRCxxQ0FBdUQ7QUFHdkQsTUFBYSxtQkFBcUIsU0FBUSxvQkFBYTtDQWtCdEQ7QUFkRztJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOztpREFDSTtBQUtiO0lBSEMsdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sMEJBQU0sRUFBRTs7Z0RBQ0c7QUFJWjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDRztBQUlaO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2lEQUNJO0FBakJqQixrREFrQkM7QUFHRCxNQUFhLG1CQUFvQixTQUFRLG1CQUFtQjtDQUszRDtBQUZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OytDQUNFO0FBSGYsa0RBS0M7QUFHRCxNQUFhLGtCQUFtQixTQUFRLGlCQUFVO0NBYWpEO0FBVEc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7Z0RBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztnREFDSTtBQUliO0lBRkMsd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7K0NBQ0c7QUFaaEIsZ0RBYUM7QUFFRCxNQUFhLG1CQUFtQjtDQUk3QjtBQURDO0lBRkMsK0JBQWEsRUFBRTtJQUNmLDBCQUFNLEVBQUU7O2dEQUNLO0FBSGxCLGtEQUlHIn0=
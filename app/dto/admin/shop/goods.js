"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smallGoodsDto = exports.InfoGoodsxDto = exports.InfoGoodsDto = exports.DeleteGoodsDto = exports.QueryGoodsDto = exports.UpdateGoodsDto = exports.CreateGoodsDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateGoodsDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "description", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "content", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "price", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "weight", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "number", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "imgs", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "features", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "spec", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "faq", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "keyword", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "remark", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateGoodsDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "hits", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateGoodsDto.prototype, "hot", void 0);
exports.CreateGoodsDto = CreateGoodsDto;
class UpdateGoodsDto extends CreateGoodsDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateGoodsDto.prototype, "id", void 0);
exports.UpdateGoodsDto = UpdateGoodsDto;
class QueryGoodsDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryGoodsDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryGoodsDto.prototype, "lang", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryGoodsDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryGoodsDto.prototype, "goodsClassUrl", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryGoodsDto.prototype, "hot", void 0);
exports.QueryGoodsDto = QueryGoodsDto;
class DeleteGoodsDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteGoodsDto.prototype, "ids", void 0);
exports.DeleteGoodsDto = DeleteGoodsDto;
class InfoGoodsDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], InfoGoodsDto.prototype, "id", void 0);
exports.InfoGoodsDto = InfoGoodsDto;
class InfoGoodsxDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoGoodsxDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoGoodsxDto.prototype, "lang", void 0);
exports.InfoGoodsxDto = InfoGoodsxDto;
class smallGoodsDto extends comm_1.CreateBaseDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallGoodsDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "price", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "originalPrice", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "weight", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallGoodsDto.prototype, "number", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallGoodsDto.prototype, "imgs", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], smallGoodsDto.prototype, "url", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], smallGoodsDto.prototype, "hot", void 0);
exports.smallGoodsDto = smallGoodsDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EscURBT3lCO0FBQ3pCLHlEQUFpRDtBQUNqRCxxQ0FBdUQ7QUFHdkQsTUFBYSxjQUFlLFNBQVEsb0JBQWE7Q0F3RWhEO0FBbkVHO0lBSEMsdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sMEJBQU0sRUFBRTs7a0RBQ1U7QUFJbkI7SUFGQywwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7NkNBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzttREFDVztBQUlwQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDTztBQUloQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3FEQUNhO0FBSXRCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzhDQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7OENBQ007QUFJZjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs0Q0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O2dEQUNRO0FBSWpCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzRDQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0c7QUFJWjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsrQ0FDTztBQUloQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNHO0FBSVo7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ0k7QUFLYjtJQUhDLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzsyQ0FDRztBQXRFaEIsd0NBd0VDO0FBR0QsTUFBYSxjQUFlLFNBQVEsY0FBYztDQUtqRDtBQUZHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzBDQUNFO0FBSGYsd0NBS0M7QUFFRCxNQUFhLGFBQWMsU0FBUSxpQkFBVTtDQXVCNUM7QUFuQkc7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzsyQ0FDSTtBQUliO0lBRkMsd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7aURBQ1U7QUFJbkI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7b0RBQ2E7QUFNdEI7SUFKQyw0QkFBVSxFQUFFO0lBQ1osdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7OzBDQUNHO0FBdEJoQixzQ0F1QkM7QUFFRCxNQUFhLGNBQWM7Q0FJMUI7QUFERztJQUZDLCtCQUFhLEVBQUU7SUFDZiwwQkFBTSxFQUFFOzsyQ0FDSztBQUhsQix3Q0FJQztBQUVELE1BQWEsWUFBWTtDQU14QjtBQUZHO0lBSEMsdUJBQUssRUFBRTtJQUNQLHdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2xCLDBCQUFNLEVBQUU7O3dDQUNFO0FBSmYsb0NBTUM7QUFDRCxNQUFhLGFBQWE7Q0FRekI7QUFMRztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDRztBQUlaO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNJO0FBUGpCLHNDQVFDO0FBRUQsTUFBYSxhQUFjLFNBQVEsb0JBQWE7Q0E2Qy9DO0FBMUNHO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3lDQUNFO0FBSVg7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7aURBQ1U7QUFLbkI7SUFIQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ0s7QUFLZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztvREFDYTtBQUl0QjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDTTtBQUlmO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzZDQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0k7QUFJYjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDRztBQU9aO0lBSkMsNEJBQVUsRUFBRTtJQUNaLHVCQUFLLEVBQUU7SUFDUCx3QkFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNsQiwwQkFBTSxFQUFFOzswQ0FDRztBQTVDaEIsc0NBNkNDIn0=
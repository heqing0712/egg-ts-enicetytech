"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoMenuDto = exports.DeleteMenuDto = exports.UpdateMenuDto = exports.CreateMenuDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
/**
 * 增加菜单
 */
class CreateMenuDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_validator_1.Max(2),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMenuDto.prototype, "type", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMenuDto.prototype, "parentId", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(2),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMenuDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateMenuDto.prototype, "orderNum", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 1 || o.type === 0; }),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMenuDto.prototype, "router", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 1 || o.type === 0; }),
    class_validator_1.IsBoolean(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Boolean)
], CreateMenuDto.prototype, "isShow", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 1 || o.type === 0; }),
    class_validator_1.IsBoolean(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Boolean)
], CreateMenuDto.prototype, "keepalive", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 1 || o.type === 0; }),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMenuDto.prototype, "icon", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 2; }),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMenuDto.prototype, "perms", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateMenuDto.prototype, "viewPath", void 0);
exports.CreateMenuDto = CreateMenuDto;
class UpdateMenuDto extends CreateMenuDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateMenuDto.prototype, "menuId", void 0);
exports.UpdateMenuDto = UpdateMenuDto;
/**
 * 删除菜单
 */
class DeleteMenuDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], DeleteMenuDto.prototype, "menuId", void 0);
exports.DeleteMenuDto = DeleteMenuDto;
/**
 * 查询菜单
 */
class InfoMenuDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoMenuDto.prototype, "menuId", void 0);
exports.InfoMenuDto = InfoMenuDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQVV5QjtBQUN6Qix5REFBMkM7QUFFM0M7O0dBRUc7QUFDSCxNQUFhLGFBQWE7Q0FpRHpCO0FBM0NDO0lBSkMsdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04scUJBQUcsQ0FBQyxDQUFDLENBQUM7SUFDTiwwQkFBTSxFQUFFOzsyQ0FDSTtBQUliO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OytDQUNRO0FBSWpCO0lBRkMsMkJBQVMsQ0FBQyxDQUFDLENBQUM7SUFDWiwwQkFBTSxFQUFFOzsyQ0FDSTtBQUtiO0lBSEMsdUJBQUssRUFBRTtJQUNQLHFCQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ04sMEJBQU0sRUFBRTs7K0NBQ1E7QUFLakI7SUFIQyw0QkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCwwQkFBUSxFQUFFO0lBQ1YsMEJBQU0sRUFBRTs7NkNBQ007QUFLZjtJQUhDLDRCQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELDJCQUFTLEVBQUU7SUFDWCwwQkFBTSxFQUFFOzs2Q0FDTztBQUtoQjtJQUhDLDRCQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELDJCQUFTLEVBQUU7SUFDWCwwQkFBTSxFQUFFOztnREFDVTtBQUtuQjtJQUhDLDRCQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzsyQ0FDSTtBQUtiO0lBSEMsNEJBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7OzRDQUNLO0FBSWQ7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ1E7QUFoRG5CLHNDQWlEQztBQUVELE1BQWEsYUFBYyxTQUFRLGFBQWE7Q0FJL0M7QUFEQztJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs2Q0FDTTtBQUhqQixzQ0FJQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxhQUFhO0NBSXpCO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ007QUFIakIsc0NBSUM7QUFFRDs7R0FFRztBQUNILE1BQWEsV0FBVztDQUl2QjtBQURDO0lBRkMsZ0NBQWMsRUFBRTtJQUNoQiwwQkFBTSxFQUFFOzsyQ0FDTTtBQUhqQixrQ0FJQyJ9
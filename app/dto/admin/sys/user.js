"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUserDto = exports.DeleteUserDto = exports.InfoUserDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class CreateUserDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateUserDto.prototype, "departmentId", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Matches(/^[a-z0-9A-Z]+$/),
    class_validator_1.Length(6, 20, { message: '用户名长度为 6 ~ 20 个字符' }),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "nickName", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "remark", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf((_o, v) => { return !(v === '' || v === undefined || v === null); }),
    class_validator_1.IsEmail(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn([0, 1]),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateUserDto.prototype, "status", void 0);
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends CreateUserDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateUserDto.prototype, "id", void 0);
exports.UpdateUserDto = UpdateUserDto;
class InfoUserDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumberString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], InfoUserDto.prototype, "userId", void 0);
exports.InfoUserDto = InfoUserDto;
class DeleteUserDto {
}
tslib_1.__decorate([
    class_validator_1.ArrayNotEmpty(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Array)
], DeleteUserDto.prototype, "userIds", void 0);
exports.DeleteUserDto = DeleteUserDto;
class QueryUserDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryUserDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryUserDto.prototype, "status", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryUserDto.prototype, "nickName", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryUserDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], QueryUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Type(() => Number),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], QueryUserDto.prototype, "departmentId", void 0);
exports.QueryUserDto = QueryUserDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQVd5QjtBQUN6Qix5REFBZ0Q7QUFDaEQscUNBQXdDO0FBRXhDLE1BQWEsYUFBYTtDQXlDekI7QUF0Q0M7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7bURBQ1k7QUFJckI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7MkNBQ0k7QUFNYjtJQUhDLHlCQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDekIsd0JBQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFDLENBQUM7SUFDNUMsMEJBQU0sRUFBRTs7K0NBQ1E7QUFJakI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7K0NBQ1E7QUFLakI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NENBQ087QUFJaEI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7NkNBQ007QUFLZjtJQUhDLDRCQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLHlCQUFPLEVBQUU7SUFDVCwwQkFBTSxFQUFFOzs0Q0FDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzRDQUNLO0FBS2Q7SUFIQyw0QkFBVSxFQUFFO0lBQ1osc0JBQUksQ0FBQyxDQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztJQUNkLDBCQUFNLEVBQUU7OzZDQUNNO0FBeENqQixzQ0F5Q0M7QUFFRCxNQUFhLGFBQWMsU0FBUSxhQUFhO0NBSS9DO0FBREM7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7eUNBQ0U7QUFIYixzQ0FJQztBQUVELE1BQWEsV0FBVztDQUl2QjtBQURDO0lBRkMsZ0NBQWMsRUFBRTtJQUNoQiwwQkFBTSxFQUFFOzsyQ0FDTTtBQUhqQixrQ0FJQztBQUVELE1BQWEsYUFBYTtDQUl6QjtBQURDO0lBRkMsK0JBQWEsRUFBRTtJQUNmLDBCQUFNLEVBQUU7OzhDQUNTO0FBSHBCLHNDQUlDO0FBRUQsTUFBYSxZQUFhLFNBQVEsaUJBQVU7Q0FnQzNDO0FBN0JDO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3dDQUNFO0FBS1g7SUFIQyx1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7NENBQ007QUFJZjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDUTtBQUlqQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzs4Q0FDUTtBQUlqQjtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOzswQ0FDSTtBQUtiO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJDQUNLO0FBS2Q7SUFIQyx1QkFBSyxFQUFFO0lBQ1Asd0JBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbEIsMEJBQU0sRUFBRTs7a0RBQ1k7QUE5QnZCLG9DQWdDQyJ9
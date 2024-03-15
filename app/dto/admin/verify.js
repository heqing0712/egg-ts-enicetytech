"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonInfoDto = exports.LoginInfoDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class LoginInfoDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], LoginInfoDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], LoginInfoDto.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], LoginInfoDto.prototype, "captchaId", void 0);
tslib_1.__decorate([
    class_validator_1.Length(4),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], LoginInfoDto.prototype, "verifyCode", void 0);
exports.LoginInfoDto = LoginInfoDto;
class UpdatePersonInfoDto {
}
tslib_1.__decorate([
    class_validator_1.Length(2, 20),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "nickName", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf((_o, v) => { return !(v === '' || v === undefined || v === null); }),
    class_validator_1.IsEmail(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "phone", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "originPassword", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "newPassword", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "remark", void 0);
tslib_1.__decorate([
    class_validator_1.Allow(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], UpdatePersonInfoDto.prototype, "headImg", void 0);
exports.UpdatePersonInfoDto = UpdatePersonInfoDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmVyaWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFNeUI7QUFDekIseURBQTJDO0FBRTNDLE1BQWEsWUFBWTtDQWlCeEI7QUFiQztJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzs4Q0FDUTtBQUlqQjtJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzs4Q0FDUTtBQUlqQjtJQUZDLDBCQUFRLEVBQUU7SUFDViwwQkFBTSxFQUFFOzsrQ0FDUztBQUlsQjtJQUZDLHdCQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1QsMEJBQU0sRUFBRTs7Z0RBQ1U7QUFoQnJCLG9DQWlCQztBQUVELE1BQWEsbUJBQW1CO0NBaUMvQjtBQTlCQztJQUZDLHdCQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLDBCQUFNLEVBQUU7O2lEQUNJO0FBSWI7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7cURBQ1E7QUFLakI7SUFIQyw0QkFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSx5QkFBTyxFQUFFO0lBQ1QsMEJBQU0sRUFBRTs7a0RBQ0s7QUFJZDtJQUZDLHVCQUFLLEVBQUU7SUFDUCwwQkFBTSxFQUFFOztrREFDSztBQUlkO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7OzJEQUNjO0FBSXZCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O3dEQUNXO0FBSXBCO0lBRkMsdUJBQUssRUFBRTtJQUNQLDBCQUFNLEVBQUU7O21EQUNNO0FBSWY7SUFGQyx1QkFBSyxFQUFFO0lBQ1AsMEJBQU0sRUFBRTs7b0RBQ087QUFoQ2xCLGtEQWlDQyJ9
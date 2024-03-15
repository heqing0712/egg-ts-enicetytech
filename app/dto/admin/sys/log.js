"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchLogDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const comm_1 = require("../../comm");
class SearchLogDto extends comm_1.PageGetDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], SearchLogDto.prototype, "q", void 0);
exports.SearchLogDto = SearchLogDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFFeUI7QUFDekIseURBQTJDO0FBQzNDLHFDQUF3QztBQUV4QyxNQUFhLFlBQWEsU0FBUSxpQkFBVTtDQUkzQztBQURDO0lBRkMsMEJBQVEsRUFBRTtJQUNWLDBCQUFNLEVBQUU7O3VDQUNDO0FBSFosb0NBSUMifQ==
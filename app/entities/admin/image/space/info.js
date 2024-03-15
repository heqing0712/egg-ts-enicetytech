"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../../base");
let ImageSpaceInfo = class ImageSpaceInfo extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ImageSpaceInfo.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'type_id' }),
    tslib_1.__metadata("design:type", Number)
], ImageSpaceInfo.prototype, "typeId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar', length: 500 }),
    tslib_1.__metadata("design:type", String)
], ImageSpaceInfo.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], ImageSpaceInfo.prototype, "extra", void 0);
ImageSpaceInfo = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'image_space_info' })
], ImageSpaceInfo);
exports.default = ImageSpaceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHdDQUEyQztBQUczQyxJQUFxQixjQUFjLEdBQW5DLE1BQXFCLGNBQWUsU0FBUSxpQkFBVTtDQWFyRCxDQUFBO0FBWEM7SUFEQyxnQ0FBc0IsRUFBRTs7MENBQ2Q7QUFHWDtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7OzhDQUNiO0FBR2Y7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7OzJDQUM3QjtBQUdaO0lBREMsZ0JBQU0sRUFBRTs7NkNBQ0s7QUFYSyxjQUFjO0lBRGxDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztHQUNoQixjQUFjLENBYWxDO2tCQWJvQixjQUFjIn0=
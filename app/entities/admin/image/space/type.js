"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_1 = require("../../../base");
let ImageSpaceType = class ImageSpaceType extends base_1.BaseEntity {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], ImageSpaceType.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, unique: true }),
    tslib_1.__metadata("design:type", String)
], ImageSpaceType.prototype, "name", void 0);
ImageSpaceType = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'image_space_type' })
], ImageSpaceType);
exports.default = ImageSpaceType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlFO0FBQ2pFLHdDQUEyQztBQUczQyxJQUFxQixjQUFjLEdBQW5DLE1BQXFCLGNBQWUsU0FBUSxpQkFBVTtDQU9yRCxDQUFBO0FBTEM7SUFEQyxnQ0FBc0IsRUFBRTs7MENBQ2Q7QUFHWDtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDekM7QUFMTSxjQUFjO0lBRGxDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztHQUNoQixjQUFjLENBT2xDO2tCQVBvQixjQUFjIn0=
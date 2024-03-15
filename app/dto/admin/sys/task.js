"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIdTaskDto = exports.UpdateTaskDto = exports.CreateTaskDto = exports.IsCronExpression = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const parser = require("cron-parser");
// cron 表达式验证，bull lib下引用了cron-parser
let IsCronExpression = class IsCronExpression {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validate(text, args) {
        try {
            const op = { iterator: true };
            let needOp = false;
            if (args.object.startTime) {
                needOp = true;
                op.startDate = args.object.startTime;
            }
            if (args.object.endTime) {
                needOp = true;
                op.endDate = args.object.endTime;
            }
            if (needOp) {
                const tmp = parser.parseExpression(text, op);
                if (!tmp.hasNext()) {
                    throw new Error();
                }
            }
            else {
                parser.parseExpression(text);
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultMessage(_args) {
        // here you can provide default error message if validation failed
        return 'this cron expression ($value) invalid';
    }
};
IsCronExpression = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ name: 'isCronExpression', async: false })
], IsCronExpression);
exports.IsCronExpression = IsCronExpression;
class CreateTaskDto {
}
tslib_1.__decorate([
    class_validator_1.Length(2, 50),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "service", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn([0, 1]),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateTaskDto.prototype, "type", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn([0, 1, 2]),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateTaskDto.prototype, "status", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf((_o, v) => { return !(v === '' || v === undefined || v === null); }),
    class_validator_1.IsDate(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Date)
], CreateTaskDto.prototype, "startTime", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf((_o, v) => { return !(v === '' || v === undefined || v === null); }),
    class_validator_1.IsDate(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Date)
], CreateTaskDto.prototype, "endTime", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateTaskDto.prototype, "limit", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateIf(o => { return o.type === 0; }),
    class_validator_1.Validate(IsCronExpression),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "cron", void 0);
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_validator_1.ValidateIf(o => { return o.type === 1; }),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CreateTaskDto.prototype, "every", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "data", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", String)
], CreateTaskDto.prototype, "remark", void 0);
exports.CreateTaskDto = CreateTaskDto;
class UpdateTaskDto extends CreateTaskDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], UpdateTaskDto.prototype, "id", void 0);
exports.UpdateTaskDto = UpdateTaskDto;
class CheckIdTaskDto {
}
tslib_1.__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Expose(),
    tslib_1.__metadata("design:type", Number)
], CheckIdTaskDto.prototype, "id", void 0);
exports.CheckIdTaskDto = CheckIdTaskDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQVl5QjtBQUN6Qix5REFBMkM7QUFDM0Msc0NBQXNDO0FBRXRDLHFDQUFxQztBQUVyQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQiw2REFBNkQ7SUFDN0QsUUFBUSxDQUFDLElBQVksRUFBRSxJQUF5QjtRQUM5QyxJQUFJO1lBQ0YsTUFBTSxFQUFFLEdBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDbkMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUssSUFBSSxDQUFDLE1BQWMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBYyxDQUFDLFNBQVMsQ0FBQzthQUMvQztZQUNELElBQUssSUFBSSxDQUFDLE1BQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsTUFBYyxDQUFDLE9BQU8sQ0FBQzthQUMzQztZQUNELElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNsQixNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ25CO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdE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
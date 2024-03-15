'use strict';
const { plainToClass } = require('class-transformer');
module.exports = {
    /**
     * validate data with options
     * @param  {Object} type - validate target
     * @param  {Object} data - validate data, default to `this.request.body`
     * @param  {Object} options  - validate options object, see [class-validator](https://github.com/typestack/class-validator)
     * @return {Promise} Promise<ValidationError[]> - validate errors
     */
    async validate(type, data, options) {
        data = data || this.request.body;
        const originOptions = { validationError: { target: false }, forbidUnknownValues: true, whitelist: true, skipMissingProperties: false, forbidNonWhitelisted: false };
        if (options) {
            Object.assign(originOptions, options);
        }
        const classTransformOptions = this.app.config.classValidator
            && this.app.config.classValidator.classTransformOptions ? this.app.config.classValidator.classTransformOptions : { excludeExtraneousValues: true };
        // 增加转换配置，默认开启类型安全
        const instanceCls = plainToClass(type, data, classTransformOptions);
        // return Promise<ValidationError[]>
        const errors = await this.app.validator.validate(instanceCls, originOptions);
        if (errors.length > 0) {
            if (this.app.config.classValidator && this.app.config.classValidator.handleError && this.app.config.classValidator.handleError instanceof Function) {
                // 如果定义了处理错误的函数，则交给定义的函数进行处理
                this.app.config.classValidator.handleError(this, errors);
            }
            else {
                // 默认实现
                this.throw(422, 'Validation Failed', { errors });
            }
        }
        else {
            // 返回创建的实例
            return instanceCls;
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXRELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZjs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTztRQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLEVBQUUsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNwSyxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsTUFBTSxxQkFBcUIsR0FDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYztlQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNySixrQkFBa0I7UUFDbEIsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNwRSxvQ0FBb0M7UUFDcEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxZQUFZLFFBQVEsRUFBRTtnQkFDbEosNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxRDtpQkFBTTtnQkFDTCxPQUFPO2dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNsRDtTQUNGO2FBQU07WUFDTCxVQUFVO1lBQ1YsT0FBTyxXQUFXLENBQUM7U0FDcEI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyJ9
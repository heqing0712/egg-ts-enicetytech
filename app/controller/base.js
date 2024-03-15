"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * @apiDefine BaseRes
 * @apiSuccess {Number} code 错误码，成功则返回200
 * @apiSuccess {String} message 错误信息，成功则返回success
 * @apiSuccess {Object} data 返回的数据
 */
/**
 * @apiDefine Auth
 * @apiHeader {String} Authorization 管理员登陆Token
 */
/**
* @apiDefine Page
* @apiSuccess {Array} data.list 查询数据列表
* @apiSuccess {Object} data.pagination 分页信息
* @apiSuccess {Number} data.pagination.page 当前页数
* @apiSuccess {Number} data.pagination.size 限制个数
* @apiSuccess {Number} data.pagination.total 总数量
*/
class BaseController extends egg_1.Controller {
    /**
     * 获取Query
     */
    getQuery() {
        return this.ctx.request.query;
    }
    /**
     * 获取Body
     */
    getBody() {
        return this.ctx.request.body;
    }
    /**
     * 获取Router上的参数
     */
    getParams() {
        return this.ctx.params;
    }
    /**
     * 获取Helper
     */
    getHelper() {
        return this.ctx.helper;
    }
    /**
     * 返回数据
     * @param op 返回配置，返回失败需要单独配置
    */
    res(op) {
        var _a, _b;
        this.ctx.set('Content-Type', 'application/json');
        this.ctx.body = {
            data: (_a = op === null || op === void 0 ? void 0 : op.data) !== null && _a !== void 0 ? _a : null,
            code: (_b = op === null || op === void 0 ? void 0 : op.code) !== null && _b !== void 0 ? _b : 200,
            message: (op === null || op === void 0 ? void 0 : op.code) ? this.ctx.helper.getErrorMessageByCode(`${op.code}`) || (op === null || op === void 0 ? void 0 : op.message) || 'unknown error' : (op === null || op === void 0 ? void 0 : op.message) || 'success',
        };
    }
}
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBaUM7QUFTakM7Ozs7O0dBS0c7QUFFSDs7O0dBR0c7QUFFSDs7Ozs7OztFQU9FO0FBRUYsTUFBOEIsY0FBZSxTQUFRLGdCQUFVO0lBRTdEOztPQUVHO0lBQ08sUUFBUTtRQUNoQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDTyxPQUFPO1FBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ08sU0FBUztRQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztNQUdFO0lBQ1EsR0FBRyxDQUFDLEVBQVU7O1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsSUFBSSxRQUFFLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxJQUFJLG1DQUFJLElBQUk7WUFDdEIsSUFBSSxRQUFFLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxJQUFJLG1DQUFJLEdBQUc7WUFDckIsT0FBTyxFQUFFLENBQUEsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSSxFQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsT0FBTyxDQUFBLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxPQUFPLEtBQUksU0FBUztTQUN0SSxDQUFDO0lBQ0osQ0FBQztDQUVGO0FBM0NELGlDQTJDQyJ9
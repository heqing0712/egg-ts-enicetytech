"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const router_register_1 = require("../../../decorator/router_register");
/**
 * 通用功能控制器
 */
class editorUeditorController extends base_1.default {
    /**
     * @api {get} /admin/editor/ueditor 百度编辑器公共接口
     * @apiGroup 登陆验证类
     * @apiUse BaseRes
     * @apiUse Auth
     */
    async ueditor() {
        const result = await this.service.admin.editor.ueditor.ueController();
        this.ctx.body = result;
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/editor/ueditor', 'all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], editorUeditorController.prototype, "ueditor", null);
exports.default = editorUeditorController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWVkaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVlZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBQ3hDLHdFQUFnRTtBQUVoRTs7R0FFRztBQUNILE1BQXFCLHVCQUF3QixTQUFRLGNBQWM7SUFFakU7Ozs7O09BS0c7SUFFSCxLQUFLLENBQUMsT0FBTztRQUVYLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7SUFFeEIsQ0FBQztDQUVGO0FBUEM7SUFEQyw0QkFBVSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQzs7OztzREFNcEM7QUFkSCwwQ0FnQkMifQ==
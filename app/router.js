"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_register_1 = require("./decorator/router_register");
//const ueditor = require('egg-ueditor')
//const ueditor = require('./libs/egg-ueditor/lib/uploadx')
//const ueditor = require('./libs/egg-ueditor')
exports.default = (app) => {
    // const { controller, router } = app;
    // router.all('/a', controller.welcome.index);
    // 使用@Route进行注册路由
    //app.router.all('/ueditor', ueditor());
    router_register_1.initRouter(app);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUVBQXlEO0FBQ3pELHdDQUF3QztBQUN4QywyREFBMkQ7QUFDM0QsK0NBQStDO0FBQy9DLGtCQUFlLENBQUMsR0FBZ0IsRUFBRSxFQUFFO0lBQ2xDLHNDQUFzQztJQUN0Qyw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUd4Qyw0QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9
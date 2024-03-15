"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_1 = require("../base");
const router_register_1 = require("../../decorator/router_register");
const banner_1 = require("../../dto/admin/shop/banner");
const content_1 = require("../../dto/admin/shop/content");
const goods_1 = require("../../dto/admin/shop/goods");
const goods_class_1 = require("../../dto/admin/shop/goods_class");
const page_1 = require("../../dto/admin/shop/page");
const home_1 = require("../../dto/admin/shop/home");
const Message_1 = require("../../dto/admin/shop/Message");
const case_1 = require("../../dto/admin/shop/case");
const case_class_1 = require("../../dto/admin/shop/case_class");
const fs = require('fs');
const path = require('path');
const faq_1 = require("../../dto/admin/shop/faq");
const Settings_1 = require("../../dto/admin/shop/Settings");
class AppController extends base_1.default {
    async pageAdmin() {
        const { ctx } = this;
        ctx.response.type = 'html';
        ctx.body = fs.readFileSync(path.resolve(__dirname, '../../../public/admin/index.html'));
    }
    async test() {
        this.res({
            data: {
                t: +new Date().getTime(),
                name: 'xiaohe'
            }
        });
    }
    async getCaseBanner() {
        const data = await this.service.admin.shop.content.info({ identifier: 'case-banner', id: 0 });
        this.res({
            data: data.content
        });
    }
    async getproductBanner() {
        const data = await this.service.admin.shop.content.info({ identifier: 'product-banner', id: 0 });
        this.res({
            data: data.content
        });
    }
    async getConfig() {
        const dto = await this.ctx.validate(Settings_1.QuerySettingsDto, this.getQuery());
        const config = await this.service.admin.shop.settings.info(dto);
        this.res({
            data: config
        });
    }
    async getBanner() {
        const dto = await this.ctx.validate(banner_1.QueryBannerDto, this.getQuery());
        const data = this.getQuery();
        console.log(data);
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.banner.list(dto);
        this.res({
            data: result
        });
    }
    async getContent() {
        const dto = await this.ctx.validate(content_1.QueryContentDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.content.list(dto);
        this.res({
            data: result
        });
    }
    async getFaq() {
        const dto = await this.ctx.validate(faq_1.QueryFaqDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.faq.list(dto);
        this.res({
            data: result
        });
    }
    async getHomeList() {
        const dto = await this.ctx.validate(home_1.QueryHomeDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.home.list(dto);
        this.res({
            data: result
        });
    }
    async getGoodsClassList() {
        const dto = await this.ctx.validate(goods_class_1.QueryGoodsClassDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.goodsClass.list(dto);
        this.res({
            data: result
        });
    }
    async getCaseClassList() {
        const dto = await this.ctx.validate(case_class_1.QueryCaseClassDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        const result = await this.service.admin.shop.caseClass.list(dto);
        this.res({
            data: result
        });
    }
    async getLangList() {
        const result = await this.service.admin.shop.lang.list();
        this.res({
            data: result
        });
    }
    async getGoodsList() {
        const dto = await this.ctx.validate(goods_1.QueryGoodsDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        let result;
        if (dto.goodsClassUrl) {
            result = await this.service.admin.shop.goods.listByGoodsClassUrl(dto.goodsClassUrl, dto.lang);
        }
        else {
            result = await this.service.admin.shop.goods.list(dto);
        }
        this.res({
            data: result
        });
    }
    async getGoodsListx() {
        const dto = await this.ctx.validate(goods_1.QueryGoodsDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        let result;
        if (dto.goodsClassUrl) {
            result = await this.service.admin.shop.goods.listByGoodsClassUrl(dto.goodsClassUrl, dto.lang);
        }
        else {
            result = await this.service.admin.shop.goods.listx(dto);
        }
        this.res({
            data: result
        });
    }
    async getcaseList() {
        const dto = await this.ctx.validate(case_1.QueryCaseDto, this.getQuery());
        if (!dto.lang) {
            dto.lang = "en";
        }
        let result;
        if (dto.caseClassUrl) {
            result = await this.service.admin.shop.case.listByCaseClassUrl(dto.caseClassUrl);
        }
        else {
            result = await this.service.admin.shop.case.list(dto);
        }
        this.res({
            data: result
        });
    }
    async getGoods() {
        const dto = await this.ctx.validate(goods_1.InfoGoodsDto, this.getQuery());
        const result = await this.service.admin.shop.goods.info(dto.id);
        this.res({
            data: result
        });
    }
    async getGoodsx() {
        const dto = await this.ctx.validate(goods_1.InfoGoodsxDto, this.getQuery());
        const result = await this.service.admin.shop.goods.infoByUrl(dto.url, dto.lang);
        this.res({
            data: result
        });
    }
    async getCase() {
        const dto = await this.ctx.validate(case_1.InfoCaseDto, this.getQuery());
        const result = await this.service.admin.shop.case.info(dto.id);
        this.res({
            data: result
        });
    }
    async getCasex() {
        const dto = await this.ctx.validate(case_1.InfoCasexDto, this.getQuery());
        const result = await this.service.admin.shop.case.infoByUrl(dto.url, dto.lang);
        this.res({
            data: result
        });
    }
    async getGoodsClass(id) {
        const result = await this.service.admin.shop.goodsClass.info(id);
        this.res({
            data: result
        });
    }
    async getCaseClass(id) {
        const result = await this.service.admin.shop.caseClass.info(id);
        this.res({
            data: result
        });
    }
    async getPage() {
        const dto = await this.ctx.validate(page_1.InfoPageDto, this.getQuery());
        const result = await this.service.admin.shop.page.info(dto);
        this.res({
            data: result
        });
    }
    async add() {
        const dto = await this.ctx.validate(Message_1.CreateMessageDto);
        const result = await this.service.admin.shop.message.add(dto);
        this.res({
            data: result ? true : false
        });
    }
}
tslib_1.__decorate([
    router_register_1.Route('/page/admin', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "pageAdmin", null);
tslib_1.__decorate([
    router_register_1.Route('/api/test', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "test", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/case-banner', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCaseBanner", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/product-banner', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getproductBanner", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/config', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getConfig", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/banner/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getBanner", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/content/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getContent", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/faq/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getFaq", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/home/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getHomeList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goodsclass/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoodsClassList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/caseclass/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCaseClassList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/lang/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getLangList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goods/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoodsList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goods/listx', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoodsListx", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/case/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getcaseList", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goods/', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoods", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goodsx/', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoodsx", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/case/', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCase", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/casex/', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCasex", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/goodsclass', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getGoodsClass", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/caseclass', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getCaseClass", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getPage", null);
tslib_1.__decorate([
    router_register_1.Route('/api/web/message', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "add", null);
exports.default = AppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFxQztBQUNyQyxxRUFBd0Q7QUFDeEQsd0RBQTZEO0FBQzdELDBEQUErRDtBQUMvRCxzREFBd0Y7QUFDeEYsa0VBQXNFO0FBQ3RFLG9EQUF3RDtBQUN4RCxvREFBeUQ7QUFDekQsMERBQWdFO0FBQ2hFLG9EQUFvRjtBQUNwRixnRUFBb0U7QUFDcEUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUU1QixrREFBdUQ7QUFDdkQsNERBQWlFO0FBR2pFLE1BQXFCLGFBQWMsU0FBUSxjQUFjO0lBSXZELEtBQUssQ0FBQyxTQUFTO1FBQ2IsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUNwQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7UUFDMUIsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQTtJQUN6RixDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxD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
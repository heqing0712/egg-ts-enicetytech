"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const router_register_1 = require("../../../decorator/router_register");
const base_1 = require("../../base");
const _ = require("lodash");
const image_1 = require("../../../dto/admin/space/image");
/**
 * 图片空间控制器
 */
class ImageSpaceController extends base_1.default {
    /**
     * @api {get} /admin/space/image/page 获取图片信息列表
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} typeId 类别编号
     * @apiUse Page
     * @apiSuccess {ImageSpaceInfo[]} data.list 图片信息列表
     */
    async page() {
        const dto = await this.ctx.validate(image_1.QueryImageDto, this.getQuery());
        this.res({
            data: {
                list: await this.service.admin.space.image.page(parseInt(dto.typeId), dto.page - 1, dto.limit),
                pagination: {
                    page: dto.page,
                    size: dto.limit,
                    total: await this.service.admin.space.image.count(parseInt(dto.typeId)),
                },
            },
        });
    }
    /**
     * @api {get} /admin/space/image/type/list 获取图片空间类别列表
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiSuccess {Array} data 图片空间类别列表
     */
    async typeList() {
        this.res({
            data: await this.service.admin.space.image.type(),
        });
    }
    /**
     * @api {post} /admin/space/image/type/add 新增图片空间类别
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {String} name 类别名称
     */
    async addType() {
        const dto = await this.ctx.validate(image_1.CreateTypeDto);
        await this.service.admin.space.image.addType(dto.name);
        this.res();
    }
    /**
     * @api {post} /admin/space/image/type/delete 删除图片空间类别
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} typeId 类别编号
     */
    async deleteType() {
        const dto = await this.ctx.validate(image_1.DeleteTypeDto);
        const hasImage = await this.service.admin.space.image.findCurrentTypeHasImage(dto.typeId);
        if (hasImage) {
            this.res({
                code: 20003,
            });
            return;
        }
        await this.service.admin.space.image.deleteType(dto.typeId);
        this.res();
    }
    /**
     * @api {post} /admin/space/image/delete 删除空间类别下的图片列表
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number[]} imageIds 图片ID列表
     */
    async deleteImage() {
        const dto = await this.ctx.validate(image_1.DeleteImageDto);
        await this.service.admin.space.image.deleteImageByIds(dto.imageIds);
        this.res();
    }
    /**
     * @api {post} /admin/space/image/upload 图片上传(表单)
     * @apiGroup 图片空间
     * @apiUse Auth
     * @apiUse BaseRes
     * @apiParam {Number} typeId 图片ID列表
     */
    async upload() {
        const dto = await this.ctx.validate(image_1.UploadImageDto);
        const typeId = parseInt(dto.typeId);
        if (typeId === -1) {
            this.res({ code: 10000 });
            return;
        }
        const file = this.ctx.request.files[0];
        if (!file) {
            this.res({ code: 20001 });
            return;
        }
        const type = await this.service.admin.space.image.find(typeId);
        // 查找图片空间是否存在
        if (_.isEmpty(type)) {
            this.res({ code: 20002 });
            return;
        }
        const { cdnUrl } = this.config.qiniu;
        try {
            const data = await this.service.admin.comm.oss.upload(file, type.name);
            const { key, hash } = data;
            const url = `${cdnUrl}/${key}`;
            await this.service.admin.space.image.add(typeId, url, JSON.stringify({ key, hash }));
            this.res({
                data: {
                    url,
                    hash,
                },
            });
        }
        catch (e) {
            this.res({ code: 20001 });
        }
    }
}
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/page', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "page", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/type/list', 'get'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "typeList", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/type/add', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "addType", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/type/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "deleteType", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/delete', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "deleteImage", null);
tslib_1.__decorate([
    router_register_1.AdminRoute('/space/image/upload', 'post'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ImageSpaceController.prototype, "upload", null);
exports.default = ImageSpaceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBZ0U7QUFDaEUscUNBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1QiwwREFBNkg7QUFFN0g7O0dBRUc7QUFDSCxNQUFxQixvQkFBcUIsU0FBUSxjQUFjO0lBRTlEOzs7Ozs7OztPQVFHO0lBRUgsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFnQixxQkFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM5RixVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDZixLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4RTthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUVILEtBQUssQ0FBQyxRQUFRO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNQLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFF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
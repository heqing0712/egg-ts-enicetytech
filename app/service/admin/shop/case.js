"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
const case_1 = require("../../../dto/admin/shop/case");
const class_transformer_1 = require("class-transformer");
// import { In } from 'typeorm';
/**
 * 系统部门Service
 */
class ShopCaseService extends base_1.default {
    /**
     * 修改分类
     */
    async add(model) {
        await this.getRepo().admin.shop.Case.insert(model);
    }
    /**
   * 删除分类
   */
    async delete(ids) {
        await this.getRepo().admin.shop.Case.delete(ids);
    }
    /**
     * 修改分类
     */
    async update(model) {
        await this.getRepo().admin.shop.Case.update(model.id, model);
    }
    /**
     * 案例分类分页
     */
    async page(query) {
        const { limit, title, page, startTime, endTime, lang, status } = query;
        const result = await this.getRepo().admin.shop.Case.createQueryBuilder('case')
            .where(title ? `case.title like '%${title}%'` : '1 = 1')
            .andWhere(lang ? `case.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `case.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `case.createTime <= '${endTime}'` : '1 = 1')
            .andWhere(status > -1 ? `case.status = ${status}` : '1 = 1')
            .orderBy({
            'case.sort': 'ASC',
            'case.id': 'DESC'
        })
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
     * 所有
     */
    async list(query) {
        const { lang, categoryId, title } = query;
        let result = await this.getRepo().admin.shop.Case.createQueryBuilder('case')
            .where('case.status = 1')
            .andWhere(categoryId ? `case.categoryId = ${categoryId}` : '1 = 1')
            .andWhere(title ? `case.title like '%${title}%'` : '1 = 1')
            .andWhere(lang ? `case.lang = '${lang}'` : '1 = 1')
            .orderBy({
            'case.sort': 'ASC',
            'case.id': 'DESC'
        })
            .getMany();
        const resultX = result.map(d => {
            return class_transformer_1.plainToClass(case_1.smallCaseDto, d, { strategy: 'excludeAll' });
        });
        return resultX;
    }
    /**
     * 通过分类url返回分类案例列表
     * @param url
     */
    async listByCaseClassUrl(url) {
        const caseClassModel = await this.service.admin.shop.caseClass.getModelByUrl(url);
        let result = [];
        if (!_.isEmpty(caseClassModel)) {
            result = await this.list(class_transformer_1.plainToClass(case_1.QueryCaseDto, { categoryId: caseClassModel.id }));
        }
        return {
            caseList: result,
            caseClass: caseClassModel
        };
    }
    /**
     * 查找案例信息
     * @param id 案例id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.Case.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error('案例id有误');
        }
        return Object.assign({}, model);
    }
    /**
   * 查找案例信息
   * @param url 案例url
   */
    async infoByUrl(url, lang) {
        const model = await this.getRepo().admin.shop.Case.findOne({ url, lang });
        if (_.isEmpty(model)) {
            throw new Error('案例id有误');
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopCaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLHVEQUF3RztBQUV4Ryx5REFBa0Q7QUFFbEQsZ0NBQWdDO0FBRWhDOztHQUVHO0FBQ0gsTUFBcUIsZUFBZ0IsU0FBUSxjQUFXO0lBRXREOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFtQjtRQUMzQixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVDOztLQUVDO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFZO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR0Q7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQW1CO1FBQzlCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBa0I7UUFDM0IsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxHQUFHLEtBQUssQ0FBQTtRQUM5RCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7YUFDM0Us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
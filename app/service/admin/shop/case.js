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
        const result = await this.getRepo()
            .admin.shop.Case.createQueryBuilder("case")
            .where(title ? `case.title like '%${title}%'` : "1 = 1")
            .andWhere(lang ? `case.lang = '${lang}'` : "1 = 1")
            .andWhere(startTime ? `case.createTime >= '${startTime}'` : "1 = 1")
            .andWhere(endTime ? `case.createTime <= '${endTime}'` : "1 = 1")
            .andWhere(status > -1 ? `case.status = ${status}` : "1 = 1")
            .orderBy({
            "case.sort": "ASC",
            "case.id": "DESC",
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
        const result = await this.getRepo()
            .admin.shop.Case.createQueryBuilder("case")
            .where("case.status = 1")
            .andWhere(categoryId ? `case.categoryId = ${categoryId}` : "1 = 1")
            .andWhere(title ? `case.title like '%${title}%'` : "1 = 1")
            .andWhere(lang ? `case.lang = '${lang}'` : "1 = 1")
            .orderBy({
            "case.sort": "ASC",
            "case.id": "DESC",
        })
            .getMany();
        const resultX = result.map((d) => {
            return class_transformer_1.plainToClass(case_1.CreateCaseDto, d, { strategy: "excludeAll" });
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
            caseClass: caseClassModel,
        };
    }
    /**
     * 查找案例信息
     * @param id 案例id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.Case.findOne(id);
        if (_.isEmpty(model)) {
            throw new Error("案例id有误");
        }
        return Object.assign({}, model);
    }
    /**
     * 查找案例信息
     * @param url 案例url
     */
    async infoByUrl(url, lang) {
        const model = await this.getRepo().admin.shop.Case.findOne({
            url,
            lang,
        });
        if (_.isEmpty(model)) {
            throw new Error("案例id有误");
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopCaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLHVEQUlzQztBQUV0Qyx5REFBaUQ7QUFFakQsZ0NBQWdDO0FBRWhDOztHQUVHO0FBQ0gsTUFBcUIsZUFBZ0IsU0FBUSxjQUFXO0lBQ3REOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFvQjtRQUM1QixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFhO1FBQ3hCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQW9CO1FBQy9CLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBbUI7UUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN2RSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO2FBQzFD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
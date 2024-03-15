"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const _ = require("lodash");
// import { In } from 'typeorm';
/**
 * 系统部门Service
 */
class ShopCaseClassService extends base_1.default {
    /**
     * 分类
     */
    async add(model) {
        await this.getRepo().admin.shop.CaseClass.save(model);
    }
    /**
   * 删除分类
   */
    async delete(ids) {
        await this.getRepo().admin.shop.CaseClass.delete(ids);
    }
    /**
     * 修改分类
     */
    async update(model) {
        await this.getRepo().admin.shop.CaseClass.update(model.id, model);
    }
    /**
     * 商品分类分页
     */
    async page(query) {
        //const {id,limit,createTime,email,username,name,page, departmentId} = query
        const { limit, name, page, startTime, endTime, lang } = query;
        const result = await this.getRepo().admin.shop.CaseClass.createQueryBuilder('case_class')
            .where(name ? `case_class.name like '%${name}%'` : '1 = 1')
            .andWhere(lang ? `case_class.lang = '${lang}'` : '1 = 1')
            .andWhere(startTime ? `case_class.createTime >= '${startTime}'` : '1 = 1')
            .andWhere(endTime ? `case_class.createTime <= '${endTime}'` : '1 = 1')
            .addOrderBy('case_class.sort', 'ASC')
            .offset(page * limit)
            .limit(limit)
            .getManyAndCount();
        return result;
    }
    /**
     * 所有商品分类
     */
    async list(query) {
        const { lang } = query;
        const result = await this.getRepo().admin.shop.CaseClass.createQueryBuilder('case_class')
            .andWhere(lang ? `case_class.lang = '${lang}'` : '1 = 1')
            .orderBy('case_class.sort', 'ASC')
            .getMany();
        return result;
    }
    /**
     * 通过url查收商品分类
     * @param url
     */
    async getModelByUrl(url) {
        const model = await this.getRepo().admin.shop.CaseClass.findOne({ url });
        if (_.isEmpty(model)) {
            // throw new Error('商品分类参数有误');
            return null;
        }
        return Object.assign({}, model);
    }
    /**
     * 查找商品分类信息
     * @param id 商品id
     */
    async info(id) {
        const model = await this.getRepo().admin.shop.CaseClass.findOne(id);
        if (_.isEmpty(model)) {
            return null;
        }
        return Object.assign({}, model);
    }
}
exports.default = ShopCaseClassService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZV9jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2VfY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBRTVCLGdDQUFnQztBQUVoQzs7R0FFRztBQUNILE1BQXFCLG9CQUFxQixTQUFRLGNBQVc7SUFFM0Q7O09BRUc7SUFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQXdCO1FBQ2hDLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUM7O0tBRUM7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQVk7UUFDdkIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFHRDs7T0FFRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBd0I7UUFDbkMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUF1QjtRQUNoQyw0RUFBNEU7UUFDNUUsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEdBQUcsS0FBSyxDQUFBO1FBRXRELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQzthQUN0RixLQUFLLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBRSwwQkFBMEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUM1RCxRQUFRLENBQUUsSUFBSSxDQUFBLENBQUMsQ0FBRSxzQkFBc0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN6RCxRQUFRLENBQUUsU0FBUyxDQUFBLENBQUMsQ0FBQyw2QkFBNkIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN6RSxRQUFRLENBQUUsT0FBTyxDQUFBLENBQUMsQ0FBQyw2QkFBNkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNyRSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDO2FBQ3BDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixlQUFlLEVBQUUsQ0FBQztRQUNyQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQXVCO1FBQ2hDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxLQUFLLENBQUE7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO2FBQ3RGLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFFLHNCQUFzQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQzFELE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUM7YUFDakMsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFVO1FBQzVCLE1BQU0sS0FBSyxHQUFRLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLCtCQUErQjtZQUMvQixPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7SUFJRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxLQUFLLEdBQVEsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QseUJBQVksS0FBSyxFQUFHO0lBQ3RCLENBQUM7Q0FHRjtBQW5GRCx1Q0FtRkMifQ==
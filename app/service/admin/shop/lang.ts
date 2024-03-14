import BaseService from '../../base';
import * as _ from 'lodash';
import { CreateLangDto, QueryLangDto, UpdateLangDto } from '../../../dto/admin/shop/lang';
// import { In } from 'typeorm';

/**
 * 系统部门Service
 */
export default class ShopLangService extends BaseService {

  /**
   * 语言
   */
  async add(model:CreateLangDto) {
    await this.getRepo().admin.shop.Lang.save(model);
  }

    /**
   * 删除语言
   */
  async delete(ids:number[]) {
    await this.getRepo().admin.shop.Lang.delete(ids);
  }

  
  /**
   * 修改语言
   */
  async update(model:UpdateLangDto) {
    await this.getRepo().admin.shop.Lang.update(model.id,model);
  }

  /**
   * 语言分页
   */
  async page(query:QueryLangDto) {
    const {limit,name,title,page,startTime,endTime} = query
    const result = await this.getRepo().admin.shop.Lang.createQueryBuilder('langs')
      .where( name ?  `langs.name like '%${name}%'` : '1 = 1')
      .andWhere( title ?  `langs.title like '%${title}%'` : '1 = 1')
      .andWhere( startTime ? `langs.createTime >= '${startTime}'` : '1 = 1')
      .andWhere( endTime? `langs.createTime <= '${endTime}'` : '1 = 1')
      .addOrderBy('langs.sort', 'ASC')
      .offset(page * limit)
      .limit(limit)
      .getManyAndCount();
    return result;
  }

  /**
   * 所有语言
   */
  async list() {
    const result = await this.getRepo().admin.shop.Lang.createQueryBuilder('lang')
      .andWhere('status = 1')
      .orderBy('lang.sort', 'ASC')
      .getMany();
    return result;
  }

  /**
   * 通过url查收语言
   * @param url 
   */
  async getModelByUrl(url:string){
    const model: any = await this.getRepo().admin.shop.Lang.findOne({url});
    if (_.isEmpty(model)) {
      // throw new Error('语言参数有误');
      return null
    }
    return { ...model };
  }
  

    
  /**
   * 查找语言信息
   * @param id 商品id
   */
  async info(id: number) {
    const model: any = await this.getRepo().admin.shop.Lang.findOne(id);
    if (_.isEmpty(model)) {
      return null
    }
    return { ...model };
  }


}

 
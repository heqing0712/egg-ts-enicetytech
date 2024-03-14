import BaseService from '../../base';
import * as _ from 'lodash';
import { CreateSettingsDto, InfoSettingsDto, QuerySettingsDto, UpdateSettingsDto } from '../../../dto/admin/shop/Settings';
// import { In } from 'typeorm';

/**
 * 内容service
 */
export default class ShopSettingsService extends BaseService {

  /**
   * 创建
   */
  async add(model:CreateSettingsDto) {
    await this.getRepo().admin.shop.Settings.insert(model);
  }

    /**
   * 删除
   */
  async delete(ids:number[]) {
    await this.getRepo().admin.shop.Settings.delete(ids);
  }

  
  /**
   * 修改
   */
  async update(model:UpdateSettingsDto) {
    await this.getRepo().admin.shop.Settings.update(model.id,model);
  }

  /**
   * 分页查询
   */
  async page(query:QuerySettingsDto) {
    const {limit,name,page,startTime,endTime,id,lang} = query

    const result = await this.getRepo().admin.shop.Settings.createQueryBuilder('Settings')
      .where( name ?  `Settings.name like '%${name}%'` : '1 = 1')
      .andWhere( id ?  `Settings.id = ${id}` : '1 = 1')
      .andWhere( lang?  `Settings.lang = '${lang}'` : '1 = 1')
      .andWhere( startTime? `Settings.createTime >= '${startTime}'` : '1 = 1')
      .andWhere( endTime? `Settings.createTime <= '${endTime}'` : '1 = 1')
      .offset(page * limit)
      .limit(limit)
      .getManyAndCount();
    return result;
  }

    /**
   * 信息
   * @param id
   */
  async info(query: InfoSettingsDto) {
    const { lang} = query
    const filter:any ={}
 
    if(lang){
      filter.lang = lang
    }
    let model: any = await this.getRepo().admin.shop.Settings.findOne(filter);
    if (_.isEmpty(model)) {
      //throw new Error('查询配置有误');
      const d:CreateSettingsDto = new CreateSettingsDto()
      d.lang = lang
      model = await this.add(d)
    }
    return { ...model };
  }

}
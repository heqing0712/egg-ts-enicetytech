import BaseController from '../../base';
import { AdminRoute } from '../../../decorator/router_register';
import { CreateLangDto, DeleteLangDto, QueryLangDto, UpdateLangDto } from '../../../dto/admin/shop/lang';

export default class ShopLangController extends BaseController {

    
  /**
   * @api {post} /admin/shop/lang/add 新增语言
   * @apiGroup 语言
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {String} name 语言名称
   * @apiParam {Number} sort 语言排序
   */
  @AdminRoute('/shop/lang/add', 'post')
  async add() {
    const dto = await this.ctx.validate<CreateLangDto>(CreateLangDto);
    await this.service.admin.shop.lang.add(dto);
    this.res();
  }


    /**
   * @api {post} /admin/shop/lang/update 修改语言
   * @apiGroup 语言
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   */
  @AdminRoute('/shop/lang/update', 'put')
  async update() {
    const dto = await this.ctx.validate<UpdateLangDto>(UpdateLangDto);
    await this.service.admin.shop.lang.update(dto);
    this.res();
  }


    /**
   * @api {get} /admin/shop/lang/page 获取语言列表
   * @apiGroup 语言列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiSuccess {Lang[]} data.list 用户列表
   */
  @AdminRoute('/shop/lang/page', 'get')
  async page() {
    const dto = await this.ctx.validate<QueryLangDto>(QueryLangDto, this.getQuery());
    dto.page -=1
    const result = await this.service.admin.shop.lang.page(dto)
    this.res({
      data:{
        list:result[0],
        pagination:{
          total:result[1],
          page:dto.page+1,
          size:dto.limit
        }
      }
    })
  }

  
    /**
   * @api {get} /admin/shop/lang/list 获取所有语言
   * @apiGroup 语言列表
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiUse Page
   * @apiParam {Number} pid 语言父id
   * @apiSuccess {Lang[]} data.list 用户列表
   */
  @AdminRoute('/shop/lang/list', 'get')
  async list() {
    const result = await this.service.admin.shop.lang.list()
    this.res({
      data: result
    })
  }

  /**
   * @api {delete} /admin/shop/lang/delete 删除语言
   * @apiGroup 删除语言
   * @apiUse Auth
   * @apiUse BaseRes
   * @apiParam {Number} id 语言id
   */
  @AdminRoute('/shop/lang/delete', 'delete')
  async delete() {
    const dto = await this.ctx.validate<DeleteLangDto>(DeleteLangDto);
    await this.service.admin.shop.lang.delete(dto.ids);
    this.res();
  }
}
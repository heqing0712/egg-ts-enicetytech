import { Entity, Column } from 'typeorm';
import { BasesEntity } from '../../base';


@Entity({ name: 'shop_lang' })
export default class ShopLang extends BasesEntity {

    @Column()
    title: string;

    @Column()
    name: string;

    @Column()
    nameEn: string;

    @Column()
    url: string;

    @Column()
    imgs: string;

}


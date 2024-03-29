import { CreateDateColumn, UpdateDateColumn  ,Generated,Column,PrimaryGeneratedColumn} from 'typeorm';
 

export abstract class BaseEntity {
  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}

export abstract class BasesEntity  extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid") 
  uuid: string;

  @Column({  type: 'int',  default: 1 })
  status: number;

  @Column({  type: 'int', nullable: true, default: 0 })
  sort: number;

}


export abstract class ShopBaseEntity extends BasesEntity {
 

  @Column()
  lang: string;
}

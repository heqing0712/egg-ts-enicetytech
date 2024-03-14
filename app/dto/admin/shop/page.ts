
import {
    IsInt,
    Allow,
    IsString,
    ArrayNotEmpty,
    IsOptional
} from 'class-validator';
import { Expose ,Type} from 'class-transformer';
import { PageGetDto ,CreateBaseDto} from '../../comm';


export class CreatePageDto extends CreateBaseDto {

    @IsString()
    @Expose()
    title: string;

    @Allow()
    @Expose()
    content: string;

    @Allow()
    @Expose()
    scontent: string;

    @Allow()
    @Expose()
    identifier:string;
 
}

export class UpdatePageDto extends CreatePageDto {
    @IsInt()
    @Expose()
    id: number;
}

export class QueryPageDto extends PageGetDto {
    
    @Allow()
    @Expose()
    lang: string;

    @Allow()
    @Expose()
    title: string;

    @Allow()
    @Expose()
    uuid: string;

    @IsOptional()
    @Allow()
    @Type(() => Number)
    @Expose()
    id: number;

    @Allow()
    @Expose()
    identifier:string;
}

export class DeletePageDto {
    @ArrayNotEmpty()
    @Expose()
    ids: number[];
  }

  export class InfoPageDto {


    @IsOptional()
    @Allow()
    @Type(() => Number)
    @Allow()
    @Expose()
    id: number;

    
    @Allow()
    @Expose()
    identifier:string;
  }
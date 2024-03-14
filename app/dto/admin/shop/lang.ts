
import {
    IsInt,
    Allow,
    IsString,
    ArrayNotEmpty
} from 'class-validator';
import { Expose } from 'class-transformer';
import { PageGetDto ,CreateBaseSystemDto } from '../../comm';


export class CreateLangDto  extends CreateBaseSystemDto {

    @IsString()
    @Expose()
    name: string;

    @IsString()
    @Expose()
    nameEn: string;


    @IsString()
    @Expose()
    title: string;

    @Allow()
    @Expose()
    url: string;

    @Allow()
    @Expose()
    imgs: string;
}


export class UpdateLangDto extends CreateLangDto {
    @IsInt()
    @Expose()
    id: number;

}


export class QueryLangDto extends PageGetDto {

    @Allow()
    @Expose()
    title: string;
    
    @Allow()
    @Expose()
    name: string;

}

export class DeleteLangDto {
    @ArrayNotEmpty()
    @Expose()
    ids: number[];
  }
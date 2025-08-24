/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsEnum, IsUUID } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { ArticleStatus } from '../interface/article.interface';

export class QueryArticleDto extends PaginationDto {
  @IsOptional()
  @IsString({ message: 'Le terme de recherche doit être une chaîne' })
  search?: string;

  @IsOptional()
  @IsEnum(ArticleStatus, { message: 'Le statut doit être DRAFT, PUBLISHED ou ARCHIVED' })
  status?: ArticleStatus;

  @IsOptional()
  @IsUUID(4, { message: 'L\'ID de la catégorie doit être un UUID valide' })
  categoryId?: string;

  @IsOptional()
  @IsUUID(4, { message: 'L\'ID de l\'auteur doit être un UUID valide' })
  authorId?: string;

  @IsOptional()
  @IsString({ message: 'Le tag doit être une chaîne' })
  tag?: string;
}
/* eslint-disable prettier/prettier */
import { 
  IsNotEmpty, 
  IsString, 
  IsOptional, 
  MinLength, 
  MaxLength,
  IsUUID,
  IsArray,
  IsEnum,
  ArrayMinSize,
  ArrayMaxSize,
  IsUrl 
} from 'class-validator';
import { ArticleStatus } from '../interface/article.interface';


export class CreateArticleDto {
  @IsNotEmpty({ message: 'Le titre est obligatoire' })
  @IsString({ message: 'Le titre doit être une chaîne de caractères' })
  @MinLength(5, { message: 'Le titre doit contenir au moins 5 caractères' })
  @MaxLength(200, { message: 'Le titre ne peut pas dépasser 200 caractères' })
  title: string;

  @IsNotEmpty({ message: 'Le contenu est obligatoire' })
  @IsString({ message: 'Le contenu doit être une chaîne de caractères' })
  @MinLength(100, { message: 'Le contenu doit contenir au moins 100 caractères' })
  @MaxLength(50000, { message: 'Le contenu ne peut pas dépasser 50000 caractères' })
  content: string;

  @IsOptional()
  @IsString({ message: 'L\'extrait doit être une chaîne de caractères' })
  @MaxLength(500, { message: 'L\'extrait ne peut pas dépasser 500 caractères' })
  excerpt?: string;

  @IsOptional()
  @IsUrl({}, { message: 'L\'image mise en avant doit être une URL valide' })
  featuredImage?: string;

  @IsOptional()
  @IsEnum(ArticleStatus, { message: 'Le statut doit être DRAFT, PUBLISHED ou ARCHIVED' })
  status?: ArticleStatus = ArticleStatus.DRAFT;

  @IsNotEmpty({ message: 'L\'auteur est obligatoire' })
  @IsUUID(4, { message: 'L\'ID de l\'auteur doit être un UUID valide' })
  authorId: string;

  @IsNotEmpty({ message: 'La catégorie est obligatoire' })
  @IsUUID(4, { message: 'L\'ID de la catégorie doit être un UUID valide' })
  categoryId: string;

  @IsOptional()
  @IsArray({ message: 'Les tags doivent être un tableau' })
  @ArrayMinSize(0, { message: 'Au moins 0 tag requis' })
  @ArrayMaxSize(10, { message: 'Maximum 10 tags autorisés' })
  @IsString({ each: true, message: 'Chaque tag doit être une chaîne de caractères' })
  @MaxLength(30, { each: true, message: 'Chaque tag ne peut pas dépasser 30 caractères' })
  tags?: string[] = [];
}

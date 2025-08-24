/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsOptional } from "class-validator/types/decorator/common/IsOptional";
import { IsIn, IsInt, Max, Min } from "class-validator/types/decorator/decorators";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'La page doit être un nombre entier' })
  @Min(1, { message: 'La page doit être supérieure à 0' })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'La limite doit être un nombre entier' })
  @Min(1, { message: 'La limite doit être supérieure à 0' })
  @Max(100, { message: 'La limite ne peut pas dépasser 100' })
  limit: number = 10;

  @IsOptional()
  @IsString({ message: 'Le champ de tri doit être une chaîne' })
  sortBy?: string = 'createdAt';

  @IsOptional()
  @IsIn(['ASC', 'DESC'], { message: "L'ordre doit être ASC ou DESC" })
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
}

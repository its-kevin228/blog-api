/* eslint-disable prettier/prettier */
import { IsHexColor, IsNotEmpty, IsOptional, Matches } from "class-validator";
import { MaxLength } from "class-validator/types/decorator/string/MaxLength";
import { MinLength } from "class-validator/types/decorator/string/MinLength";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  @MaxLength(100, { message: 'Le nom ne peut pas dépasser 100 caractères' })
  name: string;

  @IsOptional()
  @IsString({ message: 'Le slug doit être une chaîne de caractères' })
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Le slug doit être en minuscules, avec des tirets comme séparateurs',
  })
  slug?: string;

  @IsOptional()
  @IsString({ message: 'La description doit être une chaîne de caractères' })
  @MaxLength(500, {
    message: 'La description ne peut pas dépasser 500 caractères',
  })
  description?: string;

  @IsNotEmpty({ message: 'La couleur est obligatoire' })
  @IsHexColor({
    message: 'La couleur doit être un code hexadécimal valide (ex: #FF5733)',
  })
  color: string;
}

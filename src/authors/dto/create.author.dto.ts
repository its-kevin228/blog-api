/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateAuthorDto {
  @IsNotEmpty({ message: 'Le prénom est obligatoire' })
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  @MinLength(2, { message: 'Le prénom doit contenir au moins 2 caractères' })
  @MaxLength(50, { message: 'Le prénom ne peut pas dépasser 50 caractères' })
  @Matches(/^[a-zA-ZÀ-ÿ\s\-']+$/, { message: 'Le prénom contient des caractères invalides' })
  firstName: string;

  @IsNotEmpty({ message: 'Le nom est obligatoire' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @MinLength(2, { message: 'Le nom doit contenir au moins 2 caractères' })
  @MaxLength(50, { message: 'Le nom ne peut pas dépasser 50 caractères' })
  @Matches(/^[a-zA-ZÀ-ÿ\s\-']+$/, { message: 'Le nom contient des caractères invalides' })
  lastName: string;

  @IsNotEmpty({ message: 'L\'email est obligatoire' })
  @IsEmail({}, { message: 'L\'email doit être valide' })
  @MaxLength(100, { message: 'L\'email ne peut pas dépasser 100 caractères' })
  email: string;

  @IsOptional()
  @IsString({ message: 'La biographie doit être une chaîne de caractères' })
  @MaxLength(1000, { message: 'La biographie ne peut pas dépasser 1000 caractères' })
  bio?: string;

  @IsOptional()
  @IsUrl({}, { message: 'L\'avatar doit être une URL valide' })
  avatar?: string;
}
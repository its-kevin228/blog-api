/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class SlugGeneratorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Si c'est un DTO et qu'il a une propriété 'name' mais pas de 'slug'
    if (value && value.name && !value.slug) {
      value.slug = this.generateSlug(value.name);
    }
    
    return value;
  }

  private generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      // Remplace les caractères accentués
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Remplace les caractères non-alphanumériques par des tirets
      .replace(/[^a-z0-9\s-]/g, '')
      // Remplace les espaces par des tirets
      .replace(/\s+/g, '-')
      // Supprime les tirets multiples
      .replace(/-+/g, '-')
      // Supprime les tirets en début et fin
      .replace(/^-+|-+$/g, '');
  }
}
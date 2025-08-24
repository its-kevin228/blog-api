/* eslint-disable prettier/prettier */
import { 
  PipeTransform, 
  Injectable, 
  ArgumentMetadata, 
  BadRequestException 
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    if (!value) {
      return 0;
    }

    const val = parseInt(value, 10);
    
    if (isNaN(val)) {
      throw new BadRequestException(
        `"${value}" n'est pas un nombre entier valide pour le paramètre "${metadata.data}"`
      );
    }
    
    return val;
  }
}
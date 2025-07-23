import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText',
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
}

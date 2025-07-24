import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat',
})
export class ChronoFormatPipe implements PipeTransform {
  transform(value: number): string {
    // 0 -> 00:00
    // 10 -> 00:10
    // 61 -> 01:01
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    const minutesStr = `${minutes}`.padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFomart',
  standalone: true,
})
export class TimeFomartPipe implements PipeTransform {
  transform(value: number | undefined | null): string | null {
    if (!value) return null;

    if (value < 60) {
      return `${value}min`;
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (minutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}min`;
    }
  }
}

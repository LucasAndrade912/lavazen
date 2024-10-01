import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourRangeFormat',
  standalone: true,
})
export class HourRangeFormatPipe implements PipeTransform {
  transform(startTime: string, duration: number): string {
    const [startHour, startMinutes] = startTime.split(':').map(Number);

    // Converte a duração em minutos
    const totalMinutes = startHour * 60 + startMinutes + duration;

    // Calcula a hora final (transforma minutos em horas novamente)
    const endHour = Math.floor(totalMinutes / 60);
    const endMinutes = totalMinutes % 60;

    // Formata as horas e minutos para garantir que tenha sempre 2 dígitos
    const formattedStart = `${this.pad(startHour)}:${this.pad(startMinutes)}`;
    const formattedEnd = `${this.pad(endHour)}:${this.pad(endMinutes)}`;

    return `${formattedStart} - ${formattedEnd}`;
  }

  // Função auxiliar para adicionar o zero à esquerda, caso necessário
  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

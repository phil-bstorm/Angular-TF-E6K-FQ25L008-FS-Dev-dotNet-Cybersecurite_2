import { Component } from '@angular/core';
import { ChronoFormatPipe } from '../../../../shared/pipes/chrono-format.pipe';

@Component({
  selector: 'app-exo-chrono',
  imports: [ChronoFormatPipe],
  templateUrl: './exo-chrono.component.html',
  styleUrl: './exo-chrono.component.scss',
})
export class ExoChronoComponent {
  nbSeconds: number = 0;
  isChronoRunning: boolean = false;
  intervalId: any = null;

  onStart(): void {
    this.intervalId = setInterval(() => {
      this.nbSeconds++;
    }, 1000);
    this.isChronoRunning = true;
  }

  onStop(): void {
    clearInterval(this.intervalId);
    this.isChronoRunning = false;
  }

  onReset(): void {
    this.onStop();
    this.nbSeconds = 0;
  }
}

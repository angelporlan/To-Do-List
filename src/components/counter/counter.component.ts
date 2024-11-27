import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.updateTimeRemaining();
    this.intervalId = setInterval(() => {
      this.updateTimeRemaining();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTimeRemaining() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    const timeDiff = endOfDay.getTime() - now.getTime();

    this.hours = Math.floor(timeDiff / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }
}

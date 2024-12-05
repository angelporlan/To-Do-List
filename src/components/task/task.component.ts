import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { TimeComponent } from '../time/time.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ProgressBarComponent, TimeComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
}

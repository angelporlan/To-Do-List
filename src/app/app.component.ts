import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../components/counter/counter.component';
import { TaskComponent } from '../components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-DoList';
}

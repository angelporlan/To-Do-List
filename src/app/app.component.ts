import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-DoList';
}

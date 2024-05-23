import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputListComponent } from './input-list/input-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'autoKDW';
}

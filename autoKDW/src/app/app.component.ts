import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputListComponent } from './input-list/input-list.component';
import { ChooseArgumentTypeComponent } from './choose-argument-type/choose-argument-type.component';
import { CustomMotivationComponent } from './custom-motivation/custom-motivation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputListComponent,
    ChooseArgumentTypeComponent,
    CustomMotivationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'autoKDW';
}

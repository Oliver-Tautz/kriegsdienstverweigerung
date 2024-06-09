import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputListComponent } from './input-list/input-list.component';
import { ChooseArgumentTypeComponent } from './choose-argument-type/choose-argument-type.component';
import { CustomMotivationComponent } from './custom-motivation/custom-motivation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChooseArgumentTypeComponent,
    CustomMotivationComponent,
    InputListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'autoKDW';

  @ViewChild('inputlist', { static: true })
  inputListComponentRef!: InputListComponent;

  ngAfterViewInit() {
    // Now it's safe to access inputListComponentRef
    console.warn(this.inputListComponentRef);
    this.inputListComponentRef.profileForm.updateValueAndValidity();
  }

  onSubmit() {
    console.warn(this.inputListComponentRef);
    console.warn(this.inputListComponentRef.profileForm.valid);
  }
}

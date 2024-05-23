import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-choose-argument-type',
  standalone: true,

  templateUrl: './choose-argument-type.component.html',
  styleUrl: './choose-argument-type.component.css',
  imports: [ReactiveFormsModule],
})
export class ChooseArgumentTypeComponent {
  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  choiceForm = this.formBuilder.group({
    choice: this.formBuilder.group({
      religious: [''],
      moralistic: [''],
      philosophical: [''],
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.choiceForm.value);
  }
}

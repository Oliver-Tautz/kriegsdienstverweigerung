import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-input-list',
  standalone: true,
  templateUrl: './input-list.component.html',
  styleUrl: './input-list.component.css',
  imports: [ReactiveFormsModule],
})
export class InputListComponent {
  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      country: [''],
      postCode: ['', Validators.required],
    }),
  });

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'fancy',
      address: {
        street: '123 Drew Street',
        city: 'Liebefeld',
        streetNumber: '13',
        country: 'Germany',
        postCode: '33605',
      },
    });
    this.cdRef.detectChanges();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

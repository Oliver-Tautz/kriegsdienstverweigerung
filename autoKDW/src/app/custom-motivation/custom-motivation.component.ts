import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-custom-motivation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-motivation.component.html',
  styleUrl: './custom-motivation.component.css',
})
export class CustomMotivationComponent {
  public textAreaForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.textAreaForm = fb.group({
      textArea: '',
    });
  }
}

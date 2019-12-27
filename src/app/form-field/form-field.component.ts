import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'nr-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    site: [''],
    year: [''],
    checkbox: [false]
  });

  constructor(private fb: FormBuilder) { }

  async save() {
    if (this.form.valid) {
    } else {
      for (const control in this.form.controls) {
        this.form.controls[control].markAsDirty();
        this.form.controls[control].markAsTouched();
        this.form.controls[control].updateValueAndValidity();
      }
    }
  }
}

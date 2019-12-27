import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'nr-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  success = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email]],
    text: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  async save() {
    if (this.form.valid) {
      this.success = true;
    } else {
      for (const control in this.form.controls) {
        this.form.controls[control].markAsDirty();
        this.form.controls[control].markAsTouched();
        this.form.controls[control].updateValueAndValidity();
      }
    }
  }
}

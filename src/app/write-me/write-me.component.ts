import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'nr-write-me',
  templateUrl: './write-me.component.html',
  styleUrls: ['./write-me.component.scss']
})
export class WriteMeComponent {
  success = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
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

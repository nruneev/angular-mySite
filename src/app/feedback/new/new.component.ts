import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from '../../core/state/feedback/feedback.service';
import {Feedback} from '../../core/state/feedback/feedback.model';


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

  constructor(private fb: FormBuilder,
              private service: FeedbackService) { }

  async save() {
    if (this.form.valid) {
      await this.service.sendFeedback(this.createItem(this.form));
      this.success = true;
    } else {
      for (const control in this.form.controls) {
        this.form.controls[control].markAsDirty();
        this.form.controls[control].markAsTouched();
        this.form.controls[control].updateValueAndValidity();
      }
    }
  }

  createItem(form: FormGroup) {
    const feedback: Feedback = {
      id: 0,
      name: form.controls.name.value,
      email: form.controls.email.value,
      feedback: form.controls.text.value
    };
    return feedback;
  }
}

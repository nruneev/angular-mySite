import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../core/state/message/message.service';
import {Feedback} from '../core/state/feedback/feedback.model';
import {Message} from '../core/state/message/message.model';

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

  constructor(private fb: FormBuilder,
              private service: MessageService) { }

  async save() {
    if (this.form.valid) {
      await this.service.sendMessage(this.createItem(this.form));
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
    const message: Message = {
      id: 0,
      name: form.controls.name.value,
      email: form.controls.email.value,
      text: form.controls.text.value
    };
    return message;
  }
}

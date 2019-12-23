import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'nr-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email]],
    text: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }
}

import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'nr-write-me',
  templateUrl: './write-me.component.html',
  styleUrls: ['./write-me.component.scss']
})
export class WriteMeComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    text: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }
}

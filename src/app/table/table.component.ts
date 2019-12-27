import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Table} from '../shared/table';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'nr-tables',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponents {
  table: Table = {
    headerGroups: [
      {headers: [
          '№', 'Name', 'Email'
        ]}
    ],
    rowGroups: [
      {
        rows: [
            [1, 'Nikita', 'nruneev@mail.ru'],
            [2, 'Bill', 'bill@mail.ru'],
            [3, 'Thomas', 'qwerty@mail.ru'],
            [4, 'George', 'gr.efimo@mail.ru'],
            [5, 'Adam', 'adam@mail.ru'],
            [6, 'Calvin', 'super.cal@mail.ru'],
            [7, 'Donald', 'trumpland@mail.ru'],
          ]
      }
    ]
  };

  form = this.fb.group({
    nameField: ['', Validators.required],
    textSimple: ['']
  });

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef) {}

  save() {
    if (this.form.valid) {
      this.table.headerGroups[0].headers.push(this.form.controls['nameField'].value);
      this.table.rowGroups[0].rows.forEach(item => item.push(this.form.controls['textSimple'].value ? this.form.controls['textSimple'].value : '-'));
      this.form.setValue({
        nameField: '',
        textSimple: ''
      });
      this.form.controls['nameField'].reset();
    } else {
      for (const control in this.form.controls) {
        this.form.controls[control].markAsDirty();
        this.form.controls[control].markAsTouched();
        this.form.controls[control].updateValueAndValidity();
      }
    }
  }

}

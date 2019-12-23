import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlContainer, FormGroupDirective, ValidationErrors} from '@angular/forms';
import {untilDestroyed} from 'ngx-take-until-destroy';

@Component({
  selector: 'nr-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class TextareaComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() placeholder = '';

  @HostBinding('attr.appearance')
  @Input() appearance: 'standard' | 'outline' = 'outline';

  @HostBinding('attr.empty')
  empty = true;

  @HostBinding('attr.focus')
  focus = false;

  invalid: ValidationErrors | null;

  get type(): string {
    return 'text';
  }

  constructor(private element: ElementRef,
              private cd: ChangeDetectorRef,
              private parentFormControl: FormGroupDirective) {
  }

  ngOnInit() {
    this.parentFormControl.control.controls[this.name].statusChanges
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        const control = this.parentFormControl.control.controls[this.name];
        const isError = control.invalid && (control.dirty || control.touched);

        this.empty = control.value === '';

        this.invalid = isError ? control.errors : null;

        this.cd.markForCheck();
      });
  }

  ngOnDestroy() {
  }
}

import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

import {CountryCode} from './country-code.type';


@Component({
    selector: 'nr-flag',
    template: `
      <svg aria-hidden="true" focusable="false">
          <use [attr.xlink:href]="( 'assets/flags.gen.svg#' + country )"></use>
      </svg>`,
    styleUrls: ['./flag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent {
    @Input() country: CountryCode;

    @HostBinding('attr.role') readonly role = 'img';
}

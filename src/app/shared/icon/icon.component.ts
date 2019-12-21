import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

import {IconName} from './icon-name.type';

@Component({
    selector: 'nr-icon',
    template: `
      <svg aria-hidden="true" focusable="false">
          <use [attr.xlink:href]="( 'assets/icons.gen.svg#' + name )"></use>
      </svg>`,
    styleUrls: ['./icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
    @Input() name: IconName;

    @HostBinding('attr.role') readonly role = 'img';
}

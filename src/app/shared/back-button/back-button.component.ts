import {ChangeDetectionStrategy, Component, ViewEncapsulation, Input} from '@angular/core';


@Component({
  selector: 'nr-back-button',
  template: `<a [routerLink]="backURL || '../'" i18n="@@backButton">Назад</a>`,
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BackButtonComponent {
    @Input() backURL: string;
}

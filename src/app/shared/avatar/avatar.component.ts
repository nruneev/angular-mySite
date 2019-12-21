import {Component, ElementRef, Input} from '@angular/core';

import {Source} from '../types';


@Component({
  selector: 'nr-avatar',
  template: `
      <img [src]="image || defaultImage" alt="Аватар гостя" >
      `,
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  readonly defaultImage: Source = './assets/default-operator-avatar.svg';

  @Input() image: Source;

  get type(): string {
    const tagName = this.element.nativeElement.tagName as string;

    switch (tagName.toLowerCase()) {
      case 'af-agent-avatar':
        return 'agent';
      case 'af-department-avatar':
        return 'department';
    }

    return 'department';
  }

  constructor(private element: ElementRef) {}
}


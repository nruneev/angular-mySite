import {Component} from '@angular/core';

@Component({
  selector: 'nr-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  items = [
    {link: 'general', title: 'Who am I?'},
    {link: 'link-to-my-work', title: 'Link to my work'},
    {link: 'feedback', title: 'Your feedback'}
  ];
}

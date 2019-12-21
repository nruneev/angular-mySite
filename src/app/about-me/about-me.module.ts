import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from './about-me.component';
import {AboutMeRoutingModule} from './about-me-routing.module';
import {PageModule} from '../shared/page';
import { GeneralComponent } from './general/general.component';
import {SectionModule} from '../shared/section';
import { SkillComponent } from './skill/skill.component';
import { LinkComponent } from './link/link.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormModule} from '../shared/form/form.module';

@NgModule({
  imports: [CommonModule, AboutMeRoutingModule, PageModule, SectionModule, FormModule],
  declarations: [AboutMeComponent, GeneralComponent, SkillComponent, LinkComponent, FeedbackComponent]
})
export class AboutMeModule { }

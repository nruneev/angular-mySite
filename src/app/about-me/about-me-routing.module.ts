import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './about-me.component';
import {GeneralComponent} from './general/general.component';
import {SkillComponent} from './skill/skill.component';
import {LinkComponent} from './link/link.component';
import {FeedbackComponent} from './feedback/feedback.component';


const routes: Routes = [
  {path: '', component: AboutMeComponent, children: [
      {path: '', redirectTo: 'general', pathMatch: 'full'},
      {path: 'general', component: GeneralComponent},
      {path: 'skill', component: SkillComponent},
      {path: 'link-to-my-work', component: LinkComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: '**', redirectTo: 'general', pathMatch: 'full'}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutMeRoutingModule { }

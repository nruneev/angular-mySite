import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from './about-me.component';
import {AboutMeRoutingModule} from './about-me-routing.module';
import {PageModule} from '../shared/page';
import { GeneralComponent } from './general/general.component';
import {SectionModule} from '../shared/section';
import { LinkComponent } from './link/link.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormModule} from '../shared/form/form.module';
import {TableModule} from '../shared/table';
import {PaginatorModule} from '../shared/paginator/paginator.module';

@NgModule({
  imports: [CommonModule, AboutMeRoutingModule, PageModule, SectionModule, FormModule, TableModule, PaginatorModule],
  declarations: [AboutMeComponent, GeneralComponent, LinkComponent, FeedbackComponent]
})
export class AboutMeModule { }

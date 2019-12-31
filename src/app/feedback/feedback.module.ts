import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedbackRoutingModule} from './feedback-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import {PageModule} from '../shared/page';
import {SectionModule} from '../shared/section';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../shared/form/form.module';
import {TableModule} from '../shared/table';
import {IconModule} from '../shared/icon/icon.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ListComponent, NewComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    PageModule,
    SectionModule,
    ReactiveFormsModule,
    FormModule,
    HttpClientModule,
    TableModule,
    IconModule
  ]
})
export class FeedbackModule { }

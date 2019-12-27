import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormFieldComponent} from './form-field/form-field.component';
import {WriteMeComponent} from './write-me/write-me.component';
import {TableComponents} from './table/table.component';


const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},
  {path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)},
  {path: 'formFields', component: FormFieldComponent},
  {path: 'chat', component: WriteMeComponent},
  {path: 'table', component: TableComponents},
  {path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

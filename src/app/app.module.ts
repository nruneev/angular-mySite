import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IconModule} from './shared/icon/icon.module';
import {ExpandableModule} from './shared/expandable/expandable.module';
import {AgentWidgetComponent, SidebarToggleComponent, SidenavComponent} from './components';
import {HeaderModule} from './shared/header';
import {NavigationModule} from './shared/navigation/navigation.module';
import {CoreModule} from './core/core.module';
import {StopwatchModule} from './shared/stopwatch';
import {SelectModule} from './shared/form/select/select.module';
import {AvatarModule} from './shared/avatar';
import {A11yModule} from '@angular/cdk/a11y';
import {AboutMeModule} from './about-me/about-me.module';
import { FormFieldComponent } from './form-field/form-field.component';
import {PageModule} from './shared/page';
import {SectionModule} from './shared/section';
import {FormModule} from './shared/form/form.module';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WriteMeComponent } from './write-me/write-me.component';
import {TableComponents} from './table/table.component';
import {TableModule} from './shared/table';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AgentWidgetComponent,
    SidebarToggleComponent,
    FormFieldComponent,
    WriteMeComponent,
    TableComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    IconModule,
    CoreModule,
    ExpandableModule,
    HeaderModule,
    NavigationModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    StopwatchModule,
    SelectModule,
    AvatarModule,
    A11yModule,
    PageModule,
    SectionModule,
    TableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

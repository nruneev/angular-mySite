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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AgentWidgetComponent,
    SidebarToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconModule,
    CoreModule,
    ExpandableModule,
    HeaderModule,
    NavigationModule,
    StopwatchModule,
    SelectModule,
    AvatarModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

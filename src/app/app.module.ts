import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IconModule} from './shared/icon/icon.module';
import {ExpandableModule} from './shared/expandable/expandable.module';
import {SidebarToggleComponent, SidenavComponent} from './components';
import {HeaderModule} from './shared/header';
import {NavigationModule} from './shared/navigation/navigation.module';
import {CoreModule} from './core/core.module';
import {StopwatchModule} from './shared/stopwatch';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
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
        StopwatchModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

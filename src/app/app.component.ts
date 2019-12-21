import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationItem} from './shared/dependent-types';
import {SidebarState, UiLayoutQuery, UiLayoutService} from './core/state/ui-layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  mainNavigationItems: NavigationItem[] = [
    {id: 0, label: 'Библиотека "Поля для формы"', link: 'formField', icon: 'form'},
    {id: 1, label: 'Библиотека "Таблицы"', link: 'table', icon: 'table'},
    {id: 2, label: 'Отзывы', icon: 'chat', children: [
        {id: 0, label: 'Смотреть', link: 'review'},
        {id: 1, label: 'Написать', link: 'write'}
    ]},
    {id: 3, label: 'Оставить заказ', link: 'chat', icon: 'message'}
  ];


  sidebarState$: Observable<SidebarState> = this.uiLayoutQuery.sidebarState$;
  sidebarExpanded$: Observable<boolean> = this.uiLayoutQuery.sidebarState$.pipe(
    map(state => state === SidebarState.Expanded)
  );

  toggleSidebar = () => this.uiLayoutService.toggleSidebar();

  constructor(private uiLayoutQuery: UiLayoutQuery,
              private uiLayoutService: UiLayoutService) {}


  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}
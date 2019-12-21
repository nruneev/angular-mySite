import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild} from '@angular/core';


@Component({
    selector: 'nr-page',
    templateUrl: 'page.component.html',
    styleUrls: ['./page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class PageComponent implements AfterViewInit {
    @ViewChild('article', {static: false}) article: ElementRef<HTMLElement>;
    @Input() title: string;
    @Input() needBackBtn = false;
    @Input() backBtnURL: string;

    ngAfterViewInit() {
        if (this.article.nativeElement.childElementCount === 0 ||
           (this.article.nativeElement.lastChild && this.article.nativeElement.lastChild.nodeName.toLowerCase() !== 'nr-page-content')) {
            throw new Error('There is no page content.');
        }
    }
}

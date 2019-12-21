import {ChangeDetectionStrategy, Component, Input, DoCheck} from '@angular/core';


@Component({
    selector: 'nr-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements DoCheck {
    readonly pagesLimit = 5;

  @Input() set currentPage(page: number) {
    if (page < 0) {
      throw new Error('Current page cannot be negative');
    }

    this.selectPage = page;
  }
  @Input() set pageCount(count: number) {
    if (count < 0) {
      throw new Error('The number of pages cannot be negative');
    }

    this.totalPage = count;
  }

  selectPage: number;
  totalPage: number;
  startPage: number;
  endPage: number;
  pages: number[];

  get nextPage(): number {
    return Math.min(this.totalPage, this.selectPage + 1);
  }

  get prevPage(): number {
    return Math.max(this.selectPage - 1, 1);
  }

  ngDoCheck() {
    const halfPagesLimit = this.pagesLimit >> 1;
    this.startPage = Math.max(1,  this.selectPage - halfPagesLimit);
    this.endPage = Math.min(this.totalPage, this.selectPage + halfPagesLimit);
    this.pages = this.range(this.startPage, this.endPage + 1);
  }

    private range(start, end) {
        return Array.from({length: (end - start)}, (v, k) => k + start);
    }
}

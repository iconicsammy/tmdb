import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.css']
})
export class SearchPaginationComponent implements OnInit {
  @Input() totalPages: number = 0;
  @Output() goToPageEvent = new EventEmitter<number>();
  pages : number[] = [];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.pages = Array.from({length: this.totalPages}, (v, k) => k+1); 
    console.log(18, this.pages, this.totalPages)
  }

  loadPage(event: any, page: number) {
    event.preventDefault();
    this.currentPage = page;
    this.goToPageEvent.emit(page);
  }

  ngOnChanges(change: SimpleChanges){
    this.totalPages = change['totalPages'].currentValue;
    this.pages = Array.from({length: this.totalPages}, (v, k) => k+1); 
}
}

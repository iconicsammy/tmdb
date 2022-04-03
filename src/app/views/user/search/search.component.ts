import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TmdbService } from '@services/tmdb/tmdb.service';
import { SearchMediaTypes } from '@enums/tmdb.enums';
import { NgxSpinnerService } from "ngx-spinner";
import { TrendingMedia } from '@interfaces/tmdb.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFor: string;
  query: string = '';
  include_adult: string = 'false';
  header = "Search Results";
  loading = true;

  totalFound = 0;
  totalPages = 0;
  currentPage = 1;
  
  medias : TrendingMedia[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private tmdbService: TmdbService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query') || '';
    this.searchFor = this.route.snapshot.paramMap.get('searchFor') || SearchMediaTypes.TV;
    this.include_adult = this.route.snapshot.paramMap.get('include_adult') || 'false'; //params go as strings
    
    this.fetchResults(1);

  }

  fetchResults(goToPage: number){
    this.loading = true;
    this.spinner.show();
    this.tmdbService.search(this.searchFor, this.query, goToPage, this.include_adult).subscribe({
      error: (e) => { console.log(e) },    // errorHandler 
      next: (v) => { this.handleMedias(v.results, v.total_results, v.total_pages)},     // nextHandler
  
  });
  }

  handleMedias(results: TrendingMedia[], totalFound: number, totalPages: number){
    this.totalPages = totalPages;
    this.totalFound = totalFound;
    console.log(results[0])
    this.medias = results;
    this.spinner.hide();
    this.loading = false;
  }

  trackMedia(index: number, media: TrendingMedia) {
    return media ? media.id : undefined;
  }

  loadPage(page: number){
    this.fetchResults(page);
  }

}

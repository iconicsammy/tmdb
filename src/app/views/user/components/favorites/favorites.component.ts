import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TrendingMedia, UserDetails } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';
import { UserService } from '@services/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() showTopOnly = true;
  loading = true;

  totalFound = 0;
  totalPages = 0;
  currentPage = 1;
  

  header = "Favorite TV Shows";
  
  medias : TrendingMedia[] = [];

  constructor(private tmdbService: TmdbService, private userService: UserService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    console.log(28, this.showTopOnly)
    this.fetchResults(1);

  }


  trackMedia(index: number, media: TrendingMedia) {
    return media ? media.id : undefined;
  }

  fetchResults(goToPage: number){
    const userDetails: UserDetails = this.userService.getUserInformation();
    this.loading = true;
    this.spinner.show();
    this.tmdbService.getFavoriteTvShows(userDetails.accountId, userDetails.sessionId, goToPage).subscribe({
      error: (e) => { console.log(e) },    // errorHandler 
      next: (v) => { console.log('done ' + v); this.handleMedias(v.results, v.total_results, v.total_pages)},     // nextHandler
  
  });
  }

  handleMedias(results: TrendingMedia[], totalFound: number, totalPages: number){
    if (this.showTopOnly){
      this.medias = results.slice(0, 8);
    }else{
      console.log(53)
      this.totalPages = totalPages;
      this.totalFound = totalFound;
      this.medias = results;

    }
    this.spinner.hide();
    this.loading = false;

  }


  loadPage(page: number){
    this.fetchResults(page);
  }

}

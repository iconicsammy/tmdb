import { Component, OnInit, Input } from '@angular/core';
import { TrendingTimeFrame, TrendingType } from '@enums/tmdb.enums';
import { TrendingMedia } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  @Input() mediaType : TrendingType = TrendingType.TV;
  @Input() trendingWhen: TrendingTimeFrame = TrendingTimeFrame.Day;
  header = "Trending TV Shows";
  
  medias : TrendingMedia[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    if (this.mediaType  === TrendingType.TV){
      this.header = 'Trending TV Shows'
    }else if (this.mediaType  === TrendingType.Movie){
      this.header = 'Trending Movies'
    }else if (this.mediaType  === TrendingType.Person){
      this.header = 'Trending Celebs'
    }else{
      this.header = 'Trending Now'
    }
    this.tmdbService.getTrendingMedias(this.trendingWhen, this.mediaType).subscribe({
      error: (e) => { console.log(e) },    // errorHandler 
      next: (v) => { console.log('done ' + v); this.handleMedias(v.results)},     // nextHandler
  
  });
  }

  handleMedias(results: TrendingMedia[]){
    this.medias = results.slice(0, 8);
  }

  trackMedia(index: number, media: TrendingMedia) {
    return media ? media.id : undefined;
  }

  handleSelectedMedia(media: TrendingMedia){
    console.log(media)
  }

}

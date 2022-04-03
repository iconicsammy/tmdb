import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MediaID, Season, TVShowInfo } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { endPoints } from '@config/endPoints';

@Component({
  selector: 'app-tv-season-detail',
  templateUrl: './tv-season-detail.component.html',
  styleUrls: ['./tv-season-detail.component.css']
})
export class TvSeasonDetailComponent implements OnInit {

  id : string;
  seasonNumber: string;
  tvShowName: string;
  endPoints = endPoints;
  loading = true;
  media : MediaID = {}
  tvSeasonInfo : Season;

  constructor(private route: ActivatedRoute, private router: Router, private tmdbService: TmdbService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      this.tvShowName = this.route.snapshot.paramMap.get('tvShowName') || '';
      this.id = this.route.snapshot.paramMap.get('id') || '0';
      this.seasonNumber = this.route.snapshot.paramMap.get('seasonNumber') || '0'
      this.media.tvId = this.id;
      this.media.seasonNumber = this.seasonNumber;
      this.loadTVShow();
    
  }

  loadTVShow(){
    this.loading = true;
    this.spinner.show();
    this.tmdbService.getTVSeasonDetails(+this.id, +this.seasonNumber).subscribe({
      error: (e) => { console.log(e) },
      next: (v) => { this.loadSeasonInfo(v)},
  
  });
  }

  loadSeasonInfo(info: Season){
    this.tmdbService.setViewed(this.media);
    this.tvSeasonInfo = info;
    this.spinner.hide();
    this.loading = false;
  }

  episodeIsViewed(epiNumber: number){
    const mediaInfo :MediaID = {
      tvId: this.id,
      seasonNumber: this.seasonNumber,
      episodeNumber: epiNumber.toString()
    }
    return this.tmdbService.isViewed(mediaInfo) === true ? 'Yes' : 'No';
  }

}

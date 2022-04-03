import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MediaID, TVShowInfo } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { endPoints } from '@config/endPoints';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  id : string;
  endPoints = endPoints;
  loading = true;
  tvInfo : TVShowInfo;
  media : MediaID = {}
  constructor(private route: ActivatedRoute, private router: Router, private tmdbService: TmdbService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

      this.id = this.route.snapshot.paramMap.get('id') || '0';
      this.media.tvId = this.id;
      this.loadTVShow();
    
  }

  loadTVShow(){
    this.loading = true;
    this.spinner.show();
    this.tmdbService.getTVShowDetails(+this.id).subscribe({
      error: (e) => { console.log(e) },
      next: (v) => { this.loadTVInfo(v)},
  
  });
  }

  loadTVInfo(info: TVShowInfo){

    this.tmdbService.setViewed(this.media);
    this.tvInfo = info;
    this.spinner.hide();
    this.loading = false;
  }

  seasonIsViewed(seasonNumber: number){
    const mediaInfo :MediaID = {
      tvId: this.id,
      seasonNumber: seasonNumber.toString()
    }
    return this.tmdbService.isViewed(mediaInfo) === true ? 'Yes' : 'No';
  }


}

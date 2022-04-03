import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Episode, MediaID } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { endPoints } from '@config/endPoints';


@Component({
  selector: 'app-tv-episode-detail',
  templateUrl: './tv-episode-detail.component.html',
  styleUrls: ['./tv-episode-detail.component.css']
})
export class TvEpisodeDetailComponent implements OnInit {

  id : string;
  episodeNumber: string;
  seasonNumber: string;
  tvShowName: string;
  endPoints = endPoints;
  media : MediaID = {}
  loading = true;
  episodeInfo : Episode;
  constructor(private route: ActivatedRoute, private router: Router, private tmdbService: TmdbService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      this.tvShowName = this.route.snapshot.paramMap.get('tvShowName') || '';
      this.episodeNumber = this.route.snapshot.paramMap.get('episodeNumber') || ''
      this.id = this.route.snapshot.paramMap.get('id') || '0';
      this.seasonNumber = this.route.snapshot.paramMap.get('seasonNumber') || '0'
      this.media.tvId = this.id;
      this.media.seasonNumber = this.seasonNumber;
      this.media.episodeNumber = this.episodeNumber;
      this.fetchEpisodeDetails();
    
  }

  fetchEpisodeDetails(){
    this.loading = true;
    this.spinner.show();
    this.tmdbService.getTVEpisodeDetails(+this.id, +this.seasonNumber, +this.episodeNumber).subscribe({
      error: (e) => { console.log(e) },
      next: (v) => { this.loadEpisodeInfo(v)},
  
  });
  }

  loadEpisodeInfo(info: Episode){
    this.tmdbService.setViewed(this.media);
    this.episodeInfo = info;
    this.spinner.hide();
    this.loading = false;
  }

}

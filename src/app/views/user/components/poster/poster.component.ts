import { Component, OnInit, Input} from '@angular/core';
import { MediaID, TrendingMedia } from '@interfaces/tmdb.interface';
import { endPoints } from '@config/endPoints';
import { Router } from '@angular/router'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TmdbService } from '@services/tmdb/tmdb.service';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  host: {'class': 'col-md-5 mt-3 col-lg-3'}
})
export class PosterComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  endPoints = endPoints;
  @Input() posterFor :TrendingMedia;
  @Input() showDetailsModally = false;
  @Input() posterIs = 'tv'; //tvetc

  viewedStatusIcon = faEyeSlash;

  showDetails = false;

  constructor(private router: Router, private tmdbService: TmdbService) { }

  ngOnInit(): void {
  }

  loadMediaDetails(event: any){
    event.preventDefault();
    if (this.showDetailsModally){
      this.showDetails = !this.showDetails;
    }else{
      if (this.posterIs === 'tv'){
        this.router.navigate(['user/tv/' + this.posterFor.id]);
      }else  if (this.posterIs === 'movie'){
        this.router.navigate(['user/movie/' + this.posterFor.id]);
      }
    }

  }

  detailsClosed(closed: boolean){
    this.showDetails = closed;
  }

  viewedAlready(){
    const media : MediaID = {
      tvId: this.posterFor.id.toString()
    }
    if (this.tmdbService.isViewed(media)){
      this.viewedStatusIcon = faEye
    } else{
      this.viewedStatusIcon = faEyeSlash;
    }
    return this.viewedStatusIcon;
  }

}

import { Injectable } from '@angular/core';
import { endPoints } from '@config/endPoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episode, Season, TrendingMediaResults, TVShowInfo, MediaID } from '@interfaces/tmdb.interface';
import { TrendingTimeFrame, TrendingType } from '@enums/tmdb.enums';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  getTrendingMedias(timeWindow: TrendingTimeFrame, mediaType: TrendingType): Observable<TrendingMediaResults> {
    return this.http.get<TrendingMediaResults>(`${endPoints.trendingMedias}${mediaType}/${timeWindow}`)
  }


  getFavoriteTvShows(accountId: number, sessionId: string, page: number = 1): Observable<TrendingMediaResults> {
    return this.http.get<TrendingMediaResults>(`${endPoints.getFavoriteTVShows}${accountId}/favorite/tv?session_id=${sessionId}&sort_by=created_at.asc&page=${page}`)
  }

  search(searchFor: string, query: string, page: number, include_adult: string = 'false'): Observable<TrendingMediaResults> {
    return this.http.get<TrendingMediaResults>(`${endPoints.search}${searchFor}?query=${query}&include_adult=${include_adult}&page=${page}`)
  }

  getTVShowDetails(tvId: number): Observable<TVShowInfo> {
    return this.http.get<TVShowInfo>(`${endPoints.getTVShowDetails}${tvId}`)
  }

  getTVSeasonDetails(tvId: number, seasonNumber: number): Observable<Season> {
    return this.http.get<Season>(`${endPoints.getTVSeasonDetails}${tvId}/season/` + seasonNumber)
  }

  getTVEpisodeDetails(tvId: number, seasonNumber: number, episodeNumber: number): Observable<Episode> {
    return this.http.get<Episode>(`${endPoints.getTVEpisodeDetails}${tvId}/season/` + seasonNumber + "/episode/" + episodeNumber) 
  }

  setViewed(mediaId: MediaID){
   const key : string = this.createMediaKey(mediaId);
   const isViewed = this.isViewed(mediaId);
   let currentViewedITems = localStorage.getItem("viewed") || '';
  
   if (!isViewed){
    currentViewedITems = currentViewedITems + key + ";"
    localStorage.setItem("viewed", currentViewedITems)
   }
   
  }

  isViewed(mediaId: MediaID): boolean {
    const key : string = this.createMediaKey(mediaId);
    let viewedMedias: string[] = (localStorage.getItem("viewed") || '').split(';');
    
   
    if (!viewedMedias.includes(key)){
     return false;
    }
    return true;
    
     
  }


  createMediaKey(note:MediaID){
    let noteKey = '';
    if (note.tvId && note.seasonNumber && note.episodeNumber){
      noteKey = `${note.tvId}_${note.seasonNumber}_${note.episodeNumber}`
    } else if (note.tvId && note.seasonNumber && !note.episodeNumber){
      noteKey = `${note.tvId}_${note.seasonNumber}`
    } else if (note.tvId && !note.seasonNumber && !note.episodeNumber){
      noteKey = `${note.tvId}`
    }
    return noteKey;
   }






  
}

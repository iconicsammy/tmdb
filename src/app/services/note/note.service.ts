import { Injectable } from '@angular/core';
import { MediaID } from '@interfaces/tmdb.interface';
import { TmdbService } from '@services/tmdb/tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private tmdbService: TmdbService) {

   }

   addNote(media: MediaID, note: string){
    const noteKey = this.tmdbService.createMediaKey(media);
    if (noteKey === '') return;
    localStorage.setItem(noteKey, note);
   }

   readNote(media: MediaID){
    const noteKey = this.tmdbService.createMediaKey(media);
    if (noteKey === '') return '';
    return localStorage.getItem(noteKey) || '';
   }
}

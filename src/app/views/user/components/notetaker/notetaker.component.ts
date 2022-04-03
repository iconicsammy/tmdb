import { Component, OnInit, Input } from '@angular/core';
import { MediaID } from '@interfaces/tmdb.interface';
import { NoteService } from '@services/note/note.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {

  @Input() tvId = '';
  @Input() seasonNumber = '';
  @Input() episodeNumber = '';

  note: string = '';

  noteForMedia: MediaID = {
    episodeNumber: undefined,
    tvId: undefined,
    seasonNumber: undefined
  };

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteForMedia.episodeNumber = this.episodeNumber;
    this.noteForMedia.seasonNumber = this.seasonNumber;
    this.noteForMedia.tvId = this.tvId;
    this.note = this.noteService.readNote(this.noteForMedia);
  }

  addNote(){
    this.noteService.addNote(this.noteForMedia, this.note);
  }
  
  handleInput(value : string){
    this.note = value;
  }
}

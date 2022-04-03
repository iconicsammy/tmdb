import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { TrendingMedia } from '@interfaces/tmdb.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() showModal = false;
  @Input() media : TrendingMedia;
  @Output() closeDetailsEvent = new EventEmitter<boolean>();

  displayStyle = "none";

  constructor() { }

  ngOnInit(): void {
  }

  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.closeDetailsEvent.emit(false);
  }

  ngOnChanges(change: SimpleChanges){
      this.showModal = change['showModal'].currentValue;
      if(this.showModal){
        this.openPopup();
      }else{
        this.closePopup();
      }
  }

}

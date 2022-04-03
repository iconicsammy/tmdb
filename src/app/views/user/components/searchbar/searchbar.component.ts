import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchMediaTypes } from '@enums/tmdb.enums';
import { NotificationService } from '@services/notification/notification.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  value: string = "";
  searchFor: SearchMediaTypes = SearchMediaTypes.TV; //we can make it flexible now
  include_adult = 'false';

  constructor(private router: Router, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  handleAdultChoice(event: any){
    event.preventDefault();
    if (event.target.checked){
      this.include_adult = 'true'
    }else{
      this.include_adult = 'false';
    }
  }

  handleSearchTerm(v:string){
    this.value = v;
  }

  search(){
    if(!this.value){
      this.notifyService.showError("enter search term");
      return;
    }
    //
    this.router.navigate(['user/search/' + this.searchFor + "/"  + this.value + "/" + this.include_adult])
  }

}

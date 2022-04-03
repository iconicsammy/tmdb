import { Component, OnInit } from '@angular/core';
import { TrendingTimeFrame, TrendingType } from '@enums/tmdb.enums';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingType = TrendingType;

  constructor() { }

  ngOnInit(): void {
  }

}

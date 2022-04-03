import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TrendingComponent } from './components/trending/trending.component';
import { PosterComponent } from './components/poster/poster.component';
import { RatingComponent } from './components/rating/rating.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { SearchComponent } from './search/search.component';
import { SearchPaginationComponent } from './components/search-pagination/search-pagination.component';
import { ModalComponent } from './components/modal/modal.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvSeasonDetailComponent } from './tv-season-detail/tv-season-detail.component';
import { TvEpisodeDetailComponent } from './tv-episode-detail/tv-episode-detail.component';
import { NotetakerComponent } from './components/notetaker/notetaker.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavComponent,
    SearchbarComponent,
    TrendingComponent,
    PosterComponent,
    RatingComponent,
    FavoritesComponent,
    MyFavoritesComponent,
    SearchComponent,
    SearchPaginationComponent,
    ModalComponent,
    TvshowComponent,
    TvSeasonDetailComponent,
    TvEpisodeDetailComponent,
    NotetakerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }

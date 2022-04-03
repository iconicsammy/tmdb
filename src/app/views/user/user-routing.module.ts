import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { TvSeasonDetailComponent } from './tv-season-detail/tv-season-detail.component';
import { TvEpisodeDetailComponent } from './tv-episode-detail/tv-episode-detail.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:searchFor/:query/:include_adult',
    component: SearchComponent
  },
  {
    path: 'tv/:id',
    component: TvshowComponent
  },
  {
    path: 'tv-season-details/:id/:seasonNumber/:tvShowName',
    component: TvSeasonDetailComponent
  },
  {
    path: 'tv-episode-details/:id/:seasonNumber/:tvShowName/:episodeNumber',
    component: TvEpisodeDetailComponent
  },
  {
    path: 'favorites',
    component: MyFavoritesComponent
  }
];
2
3
	

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

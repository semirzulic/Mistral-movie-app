import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { TvShowsComponent } from 'src/app/components/tv-shows/tv-shows.component';
import { MoviesDetailsComponent } from 'src/app/components/movies-details/movies-details.component';
import { TvShowsDetailsComponent } from 'src/app/components/tv-shows-details/tv-shows-details.component';

let routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'movie-details/:id', component: MoviesDetailsComponent },
  { path: 'tv-details/:id', component: TvShowsDetailsComponent },
  { path: '**', redirectTo: 'movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

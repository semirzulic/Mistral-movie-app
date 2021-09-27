import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipeModule } from './pipe/pipe.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvShowsDetailsComponent } from './components/tv-shows-details/tv-shows-details.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { AppRoutingModule } from './app-routing.module';
import { EmbedVideo } from 'ngx-embed-video';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MoviesComponent,
    TvShowsComponent,
    TvShowsDetailsComponent,
    MoviesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    EmbedVideo.forRoot(),
    NgxStarRatingModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

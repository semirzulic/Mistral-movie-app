import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  searchTextLength: boolean = false;
  loaderReady: boolean = false;
  showSearchBar: boolean = true;
  tvShowsSearched: any[] = [];
  moviesSearched: any[] = [];
  route: string = '';

  constructor(
    private tvService: TvService,
    private movieService: MoviesService,
    private sharedService: SharedService,
    private location: Location,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      this.route = location.path();
      if (this.route.includes('details')) {
        this.showSearchBar = false;
      } else {
        this.showSearchBar = true;
      }
    });
  }

  ngOnInit(): void {}

  onInputChange(event: string | any[]) {
    if (event.length > 1) {
      this.searchTextLength = true;
      this.loaderReady = true;

      this.sharedService.getSearchLength(this.searchTextLength);
      this.sharedService.getLoader(this.loaderReady);

      this.movieService.searchMovies(this.searchText).subscribe((resp) => {
        this.moviesSearched = resp.results.filter(
          (result: any, idx: number) => idx < 10
        );
        this.sharedService.searchMovies(this.moviesSearched);
      });

      this.tvService.searchTV(this.searchText).subscribe((resp) => {
        this.tvShowsSearched = resp.results.filter(
          (result: any, idx: number) => idx < 10
        );
        this.sharedService.searchTV(this.tvShowsSearched);
      });
    } else {
      this.searchTextLength = false;
      this.sharedService.getSearchLength(this.searchTextLength);
    }
    setTimeout(() => {
      this.loaderReady = false;
      this.sharedService.getLoader(this.loaderReady);
    }, 1000);
  }
}

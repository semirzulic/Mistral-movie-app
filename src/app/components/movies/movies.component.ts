import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  topRatedMovies: any;
  loader = true;
  searchMovies: any;
  searchLength: boolean | undefined;
  movieNumber: number = 10;

  constructor(
    private movieService: MoviesService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getTopRatedMovies(this.movieNumber);
    this.sharedService.currentMovieSearch.subscribe(
      (searchMovies) => (this.searchMovies = searchMovies)
    );
    this.sharedService.currentSearchLength.subscribe(
      (searchLength) => (this.searchLength = searchLength)
    );
    setTimeout(() => {
      this.loader = false;
      this.sharedService.loader.subscribe((loader) => (this.loader = loader));
    }, 500);
  }

  getTopRatedMovies(movieNumber: number) {
    this.movieService.getTopRatedMovies().subscribe(
      (res: any) => {
        this.topRatedMovies = res.results.filter(
          (result: any, idx: number) => idx < movieNumber
        );
      },
      (error) => console.log(error)
    );
  }

  loadMoreMovies() {
    this.movieNumber += 10;
    this.getTopRatedMovies(this.movieNumber);
  }
}

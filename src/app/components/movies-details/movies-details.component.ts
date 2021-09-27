import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  public id: number | undefined;
  public video: any;
  usePoster: boolean = false;
  videoLoader: boolean = true;
  movie: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  relatedvideo: any;
  safeURL: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  element: HTMLElement | undefined;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getSingleMoviesDetails(this.id);
      setTimeout(() => {
        this.getSingleMoviesVideos(this.id);
      }, 500);
    });
  }

  getSingleMoviesDetails(id: any) {
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  backClicked() {
    this._location.back();
  }

  getSingleMoviesVideos(id: any) {
    this.movieService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length > 0) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
        this.video['url'] = this.baseUrl + this.video['key'] + this.autoplay;
        this.safeURL = this.video['url'];
      } else {
        this.usePoster = true;
      }
    });
    this.videoLoader = false;
  }

  countStar(star: number) {
    this.selectedValue = star;
  }

  addClass(star: number) {
    let ab = '';
    for (let i = 0; i < star; i++) {
      ab = 'starId' + i;
      this.element = document.getElementById(ab) as HTMLElement;
      this.element.classList.add('selected');
    }
  }
  removeClass(star: number) {
    let ab = '';
    for (let i = star - 1; i >= this.selectedValue; i--) {
      ab = 'starId' + i;
      this.element = document.getElementById(ab) as HTMLElement;
      this.element.classList.remove('selected');
    }
  }
}

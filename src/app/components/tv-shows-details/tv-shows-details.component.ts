import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TvService } from 'src/app/services/tv.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.css'],
})
export class TvShowsDetailsComponent implements OnInit {
  public id: number | undefined;
  public video: any;
  usePoster: boolean = false;
  videoLoader: boolean = true;
  episode: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  related_video: any;
  safeURL: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  element: HTMLElement | undefined;

  constructor(
    private tvService: TvService,
    private router: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getTvDetails(this.id);
      setTimeout(() => {
        this.getTvVideos(this.id);
      }, 500);
    });
  }

  getTvDetails(id: any) {
    this.tvService.getTVShow(id).subscribe((res: any) => {
      this.episode = res;
    });
  }

  backClicked() {
    this._location.back();
  }

  getTvVideos(id: number | undefined) {
    this.tvService.getTvVideos(id).subscribe((res: any) => {
      if (res.results.length > 0) {
        this.video = res.results[0];
        this.related_video = res.results;
        this.video['url'] = this.baseUrl + this.video['key'] + this.autoplay;
        this.safeURL = this.video['url'];
      } else {
        this.usePoster = true;
      }
      this.videoLoader = false;
    });
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

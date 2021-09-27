import { Component, OnInit } from '@angular/core';
import { TvService } from 'src/app/services/tv.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  topRatedTv: any;
  loader: boolean = true;
  searchTV: any;
  searchLength: boolean | undefined;
  showNumber: number = 10;

  constructor(
    private tvService: TvService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.topRatedTVShows(this.showNumber);
    this.sharedService.currentTvSearch.subscribe(
      (searchTV) => (this.searchTV = searchTV)
    );
    this.sharedService.currentSearchLength.subscribe(
      (searchLength) => (this.searchLength = searchLength)
    );
    setTimeout(() => {
      this.loader = false;
      this.sharedService.loader.subscribe((loader) => (this.loader = loader));
    }, 500);
  }

  topRatedTVShows(showNumber: number) {
    this.tvService.getTopRatedTVShows().subscribe(
      (res) => {
        this.topRatedTv = res.results.filter(
          (result: any, idx: number) => idx < showNumber
        );
      },
      (error) => console.log(error)
    );
  }

  loadMoreTVShows() {
    this.showNumber += 10;
    this.topRatedTVShows(this.showNumber);
  }
}

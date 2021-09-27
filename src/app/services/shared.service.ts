import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchedMovies = new BehaviorSubject<any>([]);
  private searchedTV = new BehaviorSubject<any>([]);
  public searchLength = new BehaviorSubject<boolean>(false);
  public loaderReady = new BehaviorSubject<boolean>(false);
  currentMovieSearch = this.searchedMovies.asObservable();
  currentTvSearch = this.searchedTV.asObservable();
  currentSearchLength = this.searchLength.asObservable();
  loader = this.loaderReady.asObservable();

  constructor() {}

  searchMovies(result: any[] = []) {
    this.searchedMovies.next(result);
  }

  searchTV(result: any[] = []) {
    this.searchedTV.next(result);
  }

  getSearchLength(result: boolean) {
    this.searchLength.next(result);
  }

  getLoader(result: boolean) {
    this.loaderReady.next(result);
  }
}

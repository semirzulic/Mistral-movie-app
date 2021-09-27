import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = 'fadac10f8bca19b8f111023684605251';
    this.language = 'en-US';
    this.region = 'US';
  }

  getTopRatedTVShows(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=1&language=${this.language}`
    );
  }

  searchTV(searchStr: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}`
    );
  }

  getTVShow(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  getTvVideos(id: any) {
    return this.http.get(
      `${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}&language=${this.language}`
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl: any = 'https://screenrepo.onrender.com/api/screenShot/';
  // apiUrl: any = 'https://screenrepo.onrender.com/api/screenShot/';
  constructor(private _http: HttpClient) {}
  searchByWord(word: any) {
    return this._http.get<any>(this.apiUrl + 'search/' + word);
  }
}

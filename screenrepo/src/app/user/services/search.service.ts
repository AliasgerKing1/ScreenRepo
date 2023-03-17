import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../services/url.service';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // apiUrl: any = 'https://screenrepo.onrender.com/api/screenShot/';
  constructor(private _http: HttpClient, private _backend: UrlService) {}
  apiUrl: any = `${this._backend.Backend_url}/api/screenShot/`;
  searchByWord(word: any) {
    return this._http.get<any>(this.apiUrl + 'search/' + word);
  }
}

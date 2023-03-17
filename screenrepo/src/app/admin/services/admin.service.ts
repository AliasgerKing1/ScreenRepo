import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient, private _backend : UrlService) {}
  // apiUrl = 'https://screenrepo.onrender.com/api/admin/login/';
  apiUrl = `${this._backend.Backend_url}/api/admin/login/`;
  getAdmin() {
    return this._http.get<any>(this.apiUrl);
  }
  addAdmin(obj: any) {
    return this._http.post<any>(this.apiUrl, obj);
  }
}

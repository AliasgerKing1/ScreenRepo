import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from 'src/app/services/url.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _backend: UrlService
  ) {}
  apiUrl = `${this._backend.Backend_url}/api/admin//loginauth/`;
  doLogin(obj: any) {
    return this._http.post<any>(this.apiUrl, obj);
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this._router.navigate(['/admin']);
    localStorage.removeItem('token');
  }
}

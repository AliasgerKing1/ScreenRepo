import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://screenrepo.onrender.com/api/ss/';
  // apiUrl: string =
  // 'https://console.firebase.google.com/u/0/project/screen-repo/database/screen-repo-default-rtdb/data/~2F';
  addSs(obj: any) {
    return this._http.post<any>(this.apiUrl, obj);
  }
  getSs() {
    return this._http.get<any>(this.apiUrl);
  }
  deletetSs(id: any) {
    return this._http.delete<any>(this.apiUrl + id);
  }
  getSsById(id: any) {
    return this._http.get<any>(this.apiUrl + id);
  }
  getSsByIdSkip(id: any) {
    return this._http.get<any>(this.apiUrl + 'skip/' + id);
  }
  updateSs(id: any, obj: any) {
    return this._http.put<any>(this.apiUrl + id, obj);
  }
}

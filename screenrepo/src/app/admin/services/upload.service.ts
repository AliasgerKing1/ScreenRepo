import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/api/ss/';
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
  updateSs(id: any, obj: any) {
    return this._http.put<any>(this.apiUrl + id, obj);
  }
}

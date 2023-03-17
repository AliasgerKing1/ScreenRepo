import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  Backend_url = 'http://localhost:3000';
  // export const Backend_url = "https://screenrepo.onrender.com"
  constructor() {}
}

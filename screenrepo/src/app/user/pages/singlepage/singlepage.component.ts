import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss'],
})
export class SinglepageComponent {
  constructor(private _router: Router) {}

  redirect() {
    this._router.navigate(['/']);
  }
}

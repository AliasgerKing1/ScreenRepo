import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent {
  constructor(private _router: Router) {}

  redirect() {
    this._router.navigate(['/screenShot']);
  }
}

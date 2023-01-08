import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent {
  allScreenShots: any;
  id: any;
  constructor(
    private _router: Router,
    private _upload: UploadService,
  ) {
    this._upload.getSs().subscribe((result) => {
      this.allScreenShots = result;
    });

  }

  redirect(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
}

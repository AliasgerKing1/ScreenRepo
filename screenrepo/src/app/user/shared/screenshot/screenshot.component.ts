import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent {
  id: any;
  @Input() searchResults: any = [];
  allImages: any = [];
  constructor(private _router: Router, private _upload: UploadFileService) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
    });
    // console.log(this.searchResults);
  }

  redirect(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
}

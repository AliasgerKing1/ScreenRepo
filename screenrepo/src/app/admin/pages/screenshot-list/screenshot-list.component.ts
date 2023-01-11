import { Component } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
@Component({
  selector: 'app-screenshot-list',
  templateUrl: './screenshot-list.component.html',
  styleUrls: ['./screenshot-list.component.scss'],
})
export class ScreenshotListComponent {
  allImages: any = [];

  indexNum: any;
  allObj: any = [];
  constructor(private _upload: UploadFileService) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
    });
  }

  askDelete(Number: any, obj: any) {
    this.indexNum = Number;
    this.allObj = obj;
  }

  confDelete() {
    this._upload.deleteImages(this.allObj._id).subscribe((result) => {
      console.log(result);
    });
  }
}

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

  confDelete(btn: any) {
    this._upload.deleteImages(this.allObj._id).subscribe((result) => {
      if (result.success == true) {
        let n = this.allImages.indexOf(this.allObj);
        this.allImages.splice(n, 1);
        btn.click();
      }
    });
  }
}

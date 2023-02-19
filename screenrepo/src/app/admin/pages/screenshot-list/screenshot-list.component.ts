import { Component } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-screenshot-list',
  templateUrl: './screenshot-list.component.html',
  styleUrls: ['./screenshot-list.component.scss'],
})
export class ScreenshotListComponent {
  allImages: any = [];
  typeForm: FormGroup;
  CheckForm = false;
  indexNum: any;
  allObj: any = [];

  ids: any = [];

  type: any = ['Select', 'Login', 'Register', 'User', 'Admin'];
  constructor(
    private _upload: UploadFileService,
    public _auth: AuthService,
    private _fb: FormBuilder
  ) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
    });
    this.typeForm = this._fb.group({
      typeset: '',
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

  onCheckBoxChange(event: any) {
    const checkBoxId = event.target.id;
    this.ids.push(checkBoxId);
    let n = 0;
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] == checkBoxId) {
        n++;
      }
    }
    if (n > 1) {
      this.ids.splice(this.ids.length - 1, 1);
      return;
    }
    return n;
  }

  changeType() {
    this._upload
      .updateTypeInImages(this.ids, this.typeForm.value)
      .subscribe((result) => {
        console.log(result);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-screen-shot-upload',
  templateUrl: './screen-shot-upload.component.html',
  styleUrls: ['./screen-shot-upload.component.scss'],
})
export class ScreenShotUploadComponent implements OnInit {
  uploadForm: FormGroup;
  checkForm: boolean = false;
  upload_date: any = Date();
  urls: any = [];

  mainImg: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _upload: UploadFileService
  ) {
    this.uploadForm = this._fb.group({
      comp_name: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],
      category: ['', Validators.required],
      screen_shot: ['', Validators.required],
      upload_date: this.upload_date,
    });
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this._upload.upload(file, this.uploadForm.value).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this._upload.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this._upload.getFiles();
        },
      });
    }
  }

  submit() {
    if (this.uploadForm.invalid) {
      this.checkForm = true;
    }
    // let image = photo.files;
    // if (image) {
    //   let form = new FormData();
    //   if (!this.uploadForm.invalid) {
    //     form.append('data', JSON.stringify(this.uploadForm.value));
    //     form.append('image', image);
    //     this._upload.addSs(form).subscribe((result) => {
    //       if (result.success == true) {
    //         // window.location.reload();
    //       }
    //     });
    //   }
    // }
  }

  Category: any = [
    'business',
    'Education',
    'Entertainment',
    'Finance',
    'Food & Drink',
    'Health & Fitness',
    'Lifestyle',
    'Medical',
    'Music',
    'Navigation',
    'News',
    'Photo & Video',
    'Productivity',
    'Reference',
    'Shopping',
    'Socisl Networking',
    'Sports',
    'Travel',
    'Utilities',
  ];

  ngOnInit(): void {
    this.fileInfos = this._upload.getFiles();
  }
  // onSelect(e: any) {
  //   if (e.target.files) {
  //     for (let i = 0; i <= File.length; i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(e.target.files[i]);
  //       reader.onload = (events: any) => {
  //         this.urls.push(events.target.result);
  //         this.allImage = this.urls;
  //       };
  //     }
  //   }
  // }
}

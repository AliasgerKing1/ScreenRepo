import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UploadService } from 'src/app/services/upload.service';

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
  allImage: any = [];
  mainImg: any;
  testForm: FormGroup;
  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _upload: UploadService
  ) {
    this.uploadForm = this._fb.group({
      comp_name: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],
      category: ['', Validators.required],
      screen_shot: ['', Validators.required],
      upload_date: this.upload_date,
    });

    this.testForm = this._fb.group({
      image: '',
    });
  }

  submit(photo: any) {
    if (this.uploadForm.invalid) {
      this.checkForm = true;
    }
    let image = photo.files[0];
    if (image) {
      let form = new FormData();
      if (
        image.type == 'image/jpeg' ||
        image.type == 'image/jpg' ||
        image.type == 'image/png' ||
        image.type == 'image/svg'
      ) {
        if (image.size <= 1024 * 1024 * 4) {
          if (!this.uploadForm.invalid) {
            form.append('data', JSON.stringify(this.uploadForm.value));
            form.append('image', image);
            this._upload.addSs(form).subscribe((result) => {
              if (result.success == true) {
                window.location.reload();
              }
            });
          }
        } else {
          this.uploadForm.controls['screen_shot'].setErrors({ sizeErr: true });
        }
      } else {
        this.uploadForm.controls['screen_shot'].setErrors({ typeErr: true });
      }
    }
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

  ngOnInit(): void {}

  onSelect(e: any) {
    if (e.target.files) {
      for (let i = 0; i <= File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
          this.allImage = this.urls;
        };
      }
    }
  }
}

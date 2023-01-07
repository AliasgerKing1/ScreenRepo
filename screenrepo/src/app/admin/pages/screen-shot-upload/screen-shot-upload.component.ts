import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-screen-shot-upload',
  templateUrl: './screen-shot-upload.component.html',
  styleUrls: ['./screen-shot-upload.component.scss'],
})
export class ScreenShotUploadComponent implements OnInit {
  uploadForm: FormGroup;
  checkForm: boolean = false;

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;
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
    });
  }

  submit(ss: any) {
    if (this.uploadForm.invalid) {
      this.checkForm = true;
      return;
    }
    this._upload.addSs(this.uploadForm.value).subscribe((result) => {
      console.log(result);
    });
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
}

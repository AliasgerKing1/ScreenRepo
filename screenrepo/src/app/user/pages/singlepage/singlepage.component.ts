import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss'],
})
export class SinglepageComponent {
  id: any;
  allSs: any;
  constructor(
    private _router: Router,
    private actroute: ActivatedRoute,
    private _upload: UploadService
  ) {
    this.id = this.actroute.snapshot.paramMap.get('id');
    this._upload.getSsById(this.id).subscribe((result) => {
      this.allSs = result;
      console.log(this.allSs);
    });
  }

  redirect() {
    this._router.navigate(['/']);
  }
}

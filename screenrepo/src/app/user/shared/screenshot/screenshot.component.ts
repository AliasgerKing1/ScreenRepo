import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() searchSuggestions = new EventEmitter<string[]>();
  allImages: any = [];
  searchedCompanyName: any;
  constructor(private _router: Router, private _upload: UploadFileService) {
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
      this.searchSuggestions.emit(this.allImages);
    });
  }

  redirect(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
  getImagesByCompany(companyName: string): any[] {
    const images =
      this.searchResults.length !== 0 ? this.searchResults : this.allImages;
    const filteredImages = images.filter(
      (img: any) => img.compName === companyName
    );
    if (this.searchResults[0]) {
      if (this.searchResults[0].compName === companyName) {
        this.searchedCompanyName = companyName;
      }
    }
    return filteredImages.length > 0 ? filteredImages.slice(0, 8) : [];
  }
}

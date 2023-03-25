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
  showSpinner: boolean = false;
  @Input() searchResults: any = [];
  @Input() searchSuggestionsByBox: any[] = [];

  @Output() searchSuggestions = new EventEmitter<string[]>();
  @Output() searchList = new EventEmitter<string[]>();
  allImages: any = [];
  searchedCompanyName: any;
  constructor(private _router: Router, private _upload: UploadFileService) {
    this.showSpinner = true;
    this._upload.getImages().subscribe((result) => {
      this.allImages = [result][0];
      this.searchSuggestions.emit(this.allImages);
      this.searchList.emit(this.allImages);
      this.showSpinner = false;
    });
  }

  redirect(id: any) {
    this._router.navigate(['/screenShot/' + id]);
  }
  getImagesByCompany(companyName: string): any[] {
    const images =
      // this.searchResults.length !== 0 ? this.searchResults : this.allImages;
      this.searchSuggestionsByBox.length !== 0
        ? this.searchSuggestionsByBox
        : this.allImages;
    const filteredImages = images.filter(
      (img: any) => img.compName === companyName
    );
    if (this.searchSuggestionsByBox[0]) {
      if (this.searchSuggestionsByBox[0].compName === companyName) {
        this.searchedCompanyName = companyName;
      }
    }
    // if (this.searchResults[0]) {
    //   if (this.searchResults[0].compName === companyName) {
    //     this.searchedCompanyName = companyName;
    //   }
    // }
    return filteredImages.length > 0 ? filteredImages.slice(0, 8) : [];
  }
}

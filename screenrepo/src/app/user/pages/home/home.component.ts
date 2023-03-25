import { Component } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchResults2: string[] = [];
  searchResultsBox: string[] = [];
  searchList: string[] = [];
  appNum: number = 0;
  constructor(private _upload: UploadFileService) {}

  onSearchResults(results: string[]) {
    this.searchResults2 = results;
  }
  onSearchResultsBox(results: any) {
    this.searchResultsBox = results;
  }
  onSearchList(results: any) {
    this.searchList = results;
    const numberOfImages = this.searchList.length;
    this.appNum = Math.ceil(Math.sqrt(numberOfImages) / 2);
  }
}

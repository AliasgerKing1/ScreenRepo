import { Component, Input } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchResults2: string[] = [];
  constructor(private _upload: UploadFileService) {}

  onSearchResults(results: string[]) {
    this.searchResults2 = results;
  }
}

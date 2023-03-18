import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  // inputWord: string = '';
  searchTerm: string = '';
  searchInput: String = '';
  showSuggestions = false;
  suggestions: any = [];
  inputLength = 0;
  @Input() allImages: any[] = [];
  @Input() searchSuggestions: any[] = [];
  @Output() searchResults = new EventEmitter<string[]>();
  @Output() searchSuggestionsByBox = new EventEmitter<string[]>();
  constructor(
    private _search: SearchService,
    private _upload: UploadFileService
  ) {}

  sendInputWord() {
    this._search.searchByWord(this.searchTerm).subscribe((result) => {
      this.searchResults.emit(result);
    });
  }
  onInput(event: any) {
    this.searchInput = event.target.value;
    this.inputLength = event.target.value.length;
    this._upload.getImages().subscribe((result) => {
      this.suggestions = result;
    });
  }
  onSearchInput() {
    if (this.inputLength == 0) {
      this.showSuggestions = false;
    } else {
      this.showSuggestions = true;
    }
  }

  onSuggestionClick(suggestions: any) {
    this._search.searchByWord(suggestions).subscribe((result) => {
    this.searchSuggestionsByBox.emit(result);
    });
  }
}

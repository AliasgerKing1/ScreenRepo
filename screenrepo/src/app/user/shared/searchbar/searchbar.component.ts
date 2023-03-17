import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  // inputWord: string = '';
  searchTerm: string = '';
  showSuggestions = false;
  suggestions: string[] = ['home', 'hii'];
  inputLength = 0;
  @Input() allImages: any[] = [];
  @Output() searchResults = new EventEmitter<string[]>();
  constructor(private _search: SearchService) {}

  sendInputWord() {
    this._search.searchByWord(this.searchTerm).subscribe((result) => {
      this.searchResults.emit(result);
    });
  }
  onInput(event: any) {
    this.inputLength = event.target.value.length;
  }
  onSearchInput() {
    if (this.inputLength == 0) {
      this.showSuggestions = false;
    } else {
      this.showSuggestions = true;
    }
  }
  onSuggestionClick(suggestions: any) {}
}

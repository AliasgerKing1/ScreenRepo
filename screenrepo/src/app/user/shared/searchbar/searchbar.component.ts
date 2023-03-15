import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  // inputWord: string = '';
  searchTerm: string = "";
  @Output() searchResults = new EventEmitter<string[]>();
  constructor(private _search: SearchService) {}

  sendInputWord() {
    this._search.searchByWord(this.searchTerm).subscribe((result) => {
      this.searchResults.emit(result);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comic } from '../model/comic.model';
import { CatalogState } from '../store/state/catalog.state';
import { getComics, getSelectedComic, getSearchResults } from '../store/catalog.selectors';
import { loadComics, createComics, searchComics } from '../store/actions/catalog.actions';

@Component({
  selector: 'app-catalog-list-component',
  templateUrl: './catalog-list-component.component.html',
  styleUrls: ['./catalog-list-component.component.scss']
})
export class CatalogListComponentComponent implements OnInit {
  comics$: Observable<Comic[]>;
  selectedComic$: Observable<Comic>;
  comicSearchInput: string;

  constructor(private store: Store<CatalogState>) {
    this.store.dispatch(loadComics());

  }

  ngOnInit(): void {
    this.comics$ = this.store.select(getComics);
    this.selectedComic$ = this.store.select(getSelectedComic);
  }

  searchComics() {
    console.log(this.comicSearchInput);
    if (!this.comicSearchInput) {
      this.clearSearch();
    } else {
      this.comics$ = this.store.select(getSearchResults);
      this.store.dispatch(searchComics({ searchQuery: this.comicSearchInput }));
    }
  }

  clearSearch() {
    this.comicSearchInput = '';
    console.log(this.comicSearchInput);
    this.store.dispatch(loadComics());
  }

  comicSelected(comic: Comic): void {
   // this.store.dispatch
  }
}

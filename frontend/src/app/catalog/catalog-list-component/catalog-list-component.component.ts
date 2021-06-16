import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comic } from '../model/comic.model';
import { CatalogState } from '../store/state/catalog.state';
import { getComics, getSelectedComic } from '../store/catalog.selectors';
import { loadComics, createComics } from '../store/actions/catalog.actions';

@Component({
  selector: 'app-catalog-list-component',
  templateUrl: './catalog-list-component.component.html',
  styleUrls: ['./catalog-list-component.component.scss']
})
export class CatalogListComponentComponent implements OnInit {
  comics$: Observable<Comic[]>;
  selectedComic$: Observable<Comic>;

  constructor(private store: Store<CatalogState>) {
    this.store.dispatch(loadComics());

  }

  ngOnInit(): void {
    this.comics$ = this.store.select(getComics);
    this.selectedComic$ = this.store.select(getSelectedComic);
  }

  comicSelected(comic: Comic): void {
   // this.store.dispatch
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comic } from '../model/comic.model';
import { CatalogState } from '../store/catalog.state';
import { getComics } from '../store/catalog.selectors'

@Component({
  selector: 'app-catalog-list-component',
  templateUrl: './catalog-list-component.component.html',
  styleUrls: ['./catalog-list-component.component.scss']
})
export class CatalogListComponentComponent implements OnInit {
  comics$: Observable<Comic[]>;
  selectedComic$: Observable<Comic>;

  constructor(private store: Store<CatalogState>) { }

  ngOnInit(): void {
    this.comics$ = this.store.select(getComics);
  }

}

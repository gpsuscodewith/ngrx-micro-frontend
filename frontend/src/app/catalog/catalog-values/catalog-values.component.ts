import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CatalogState } from '../store/state/catalog.state';
import { ComicValueInput } from '../model/comic-value-input';
import { Comic } from '../model/comic.model';
import { getComics, getComicValues } from '../store/catalog.selectors';
import { filter, map } from 'rxjs/operators';
import { loadComicValues } from '../store/actions/catalog.actions';
import { ComicValue } from '../model/comic-value.model';

@Component({
  selector: 'app-catalog-values',
  templateUrl: './catalog-values.component.html',
  styleUrls: ['./catalog-values.component.scss']
})
export class CatalogValuesComponent implements OnInit {
  @Input() comicValuesInput: ComicValueInput[];

  comicValues$: Observable<ComicValue[]>;

  totalValue: number = 0;

  constructor(private store: Store<CatalogState>) {
    this.store.dispatch(loadComicValues());
  }

  ngOnInit(): void {
    console.log(`The length of the comicValuesInput is ${this.comicValuesInput.length}`);
    this.comicValues$ = this.store.select(getComicValues).pipe(
      map(items =>
        items.filter(item =>
          this.comicValuesInput.findIndex(x =>
            x.issueNumber === item.issueNumber) > -1)
    ));
  }



}

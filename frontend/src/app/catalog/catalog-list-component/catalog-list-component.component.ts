import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CatalogState } from '../store/catalog.state';

@Component({
  selector: 'app-catalog-list-component',
  templateUrl: './catalog-list-component.component.html',
  styleUrls: ['./catalog-list-component.component.scss']
})
export class CatalogListComponentComponent implements OnInit {

  constructor(private store: Store<CatalogState>) { }

  ngOnInit(): void {
  }

}

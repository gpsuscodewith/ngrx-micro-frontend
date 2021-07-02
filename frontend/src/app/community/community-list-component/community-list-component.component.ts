import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collector } from '../model/collector.model';
import { ComicInstance } from '../model/comic-instance.model';
import { CommunityState } from '../store/community.state';
import { loadCollectors } from '../store/community.actions';

@Component({
  selector: 'app-community-list-component',
  templateUrl: './community-list-component.component.html',
  styleUrls: ['./community-list-component.component.scss']
})
export class CommunityListComponentComponent implements OnInit {

  comics$: Observable<Collector[]>;

  constructor(private store: Store<CommunityState>) {
    this.store.dispatch(loadCollectors());
  }

  ngOnInit(): void {
  }

}

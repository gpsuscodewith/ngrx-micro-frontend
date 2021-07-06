import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collector } from '../model/collector.model';
import { ComicInstance } from '../model/comic-instance.model';
import { CommunityState } from '../store/state/community.state';
import { loadCollectors } from '../store/actions/community.actions';
import { getCollectors } from '../store/community.selectors';

@Component({
  selector: 'app-community-list-component',
  templateUrl: './community-list-component.component.html',
  styleUrls: ['./community-list-component.component.scss']
})
export class CommunityListComponentComponent implements OnInit {

  collectors$: Observable<Collector[]>;

  constructor(private store: Store<CommunityState>) {
    this.store.dispatch(loadCollectors());
  }

  ngOnInit(): void {
    this.collectors$ = this.store.select(getCollectors);
  }

}

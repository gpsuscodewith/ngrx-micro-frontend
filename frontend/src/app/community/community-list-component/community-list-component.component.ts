import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collector } from '../model/collector.model';
import { ComicInstance } from '../model/comic-instance.model';
import { CommunityState } from '../store/state/community.state';
import { filterCollectorsByComic, loadCollectors } from '../store/actions/community.actions';
import { getCollectors } from '../store/community.selectors';

@Component({
  selector: 'app-community-list-component',
  templateUrl: './community-list-component.component.html',
  styleUrls: ['./community-list-component.component.scss']
})
export class CommunityListComponentComponent implements OnInit {

  collectors$: Observable<Collector[]>;
  @Input() selectedComic: string;

  @Output() onCollectorSelected = new EventEmitter<string>()

  constructor(private store: Store<CommunityState>) {
    this.store.dispatch(loadCollectors());
  }

  ngOnInit(): void {
    this.collectors$ = this.store.select(getCollectors);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log('The value of cur is ' + cur);
      console.log('The value of prev is ' + prev);

      if (cur != '') {
        this.store.dispatch(filterCollectorsByComic({ comic: this.selectedComic }));
      } else {
        this.store.dispatch(loadCollectors());
      }
    }
  }

  collectorSelected(collector: Collector): void {
    console.log('The collector selected was ' + collector.lastName + ', ' + collector.firstName);
    this.onCollectorSelected.emit(collector.id);
  }
}

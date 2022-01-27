import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommunityState } from '../store/state/community.state';
import { Comic } from 'src/app/catalog/model/comic.model';
import { loadCollectors, loadPartner, loadProposer } from '../store/actions/community.actions';
import { getComicsForTradePartner, getComicsForTradeProposer, getCurrentTradePartner, getCurrentTradeProposer } from '../store/community.selectors';
import { ComicInstance } from '../model/comic-instance.model';
import { Collector } from '../model/collector.model';
import { switchMap } from 'rxjs/operators';
import { MatSelectionListChange } from '@angular/material/list';
import { ComicSelectionChangeEventArgs } from '../model/comic-selected-event-args';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-community-trade',
  templateUrl: './community-trade.component.html',
  styleUrls: ['./community-trade.component.scss']
})
export class CommunityTradeComponent implements OnInit {

  @Input() proposerId: string;
  @Input() partnerId: string;

  @Output() partnerComicSelectionChanged: EventEmitter<ComicSelectionChangeEventArgs> = new EventEmitter();
  @Output() proposerComicSelectionChanged: EventEmitter<ComicSelectionChangeEventArgs> = new EventEmitter();

  proposerComics$: Observable<ComicInstance[]>;
  partnerComics$: Observable<ComicInstance[]>;

  proposer$: Observable<Collector>;
  partner$: Observable<Collector>;


  constructor(
    private route: ActivatedRoute,
    private store: Store<CommunityState>) {
  }

  proposerInstanceSelected(comicInstance: ComicInstance): void {
    console.log('The instance was selected ' + comicInstance.issueNumber);
  }

  partnerInstanceSelected(comicInstance: ComicInstance): void {
    console.log('The instance was selected ' + comicInstance.issueNumber);
  }

  onProposerComicChange(change: MatSelectionListChange): void {
    console.log(change.option.value, change.option.selected);
    let eventArgs = this.getComicSelectionChangeEventArgs(change);
    console.log(`Got events args prior to emitting proposerComicSelectionChanged events - ${eventArgs}`);
    this.proposerComicSelectionChanged.emit(eventArgs);
  }

  onPartnerComicChange(change: MatSelectionListChange): void {
    console.log(change.option.value, change.option.selected);
    let eventArgs = this.getComicSelectionChangeEventArgs(change);
    console.log(`Got events args prior to emitting partnerComicSelectionChanged events - ${eventArgs}`);
    this.partnerComicSelectionChanged.emit(eventArgs);
  }

  getComicSelectionChangeEventArgs(matSelection: MatSelectionListChange): ComicSelectionChangeEventArgs {
    let comicSelectionChanged: ComicSelectionChangeEventArgs = {
      issueNumber: matSelection.option.value.issueNumber,
      condition: matSelection.option.value.condition,
      isSelected: matSelection.option.selected
    };

    return comicSelectionChanged;
  }

  ngOnInit(): void {
    this.store.dispatch(loadCollectors());

   // this.partnerId = this.route.snapshot.paramMap.get('partnerId');
   // this.proposerId = this.route.snapshot.paramMap.get('proposerId');
    console.log('this.partnerId - ' + this.partnerId);
    console.log('this.proposerId - ' + this.proposerId);

    console.log('prior to dispatch');
    this.store.dispatch(loadPartner( {partnerId: this.partnerId} ));
    this.store.dispatch(loadProposer( {proposerId: this.proposerId} ));
    console.log('after dispatch');

    this.proposerComics$ = this.store.select(getComicsForTradeProposer);
    this.partnerComics$ = this.store.select(getComicsForTradePartner);

    this.proposer$ = this.store.select(getCurrentTradeProposer);
    this.partner$ = this.store.select(getCurrentTradePartner);
  }

}

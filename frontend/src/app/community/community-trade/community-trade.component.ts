import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-community-trade',
  templateUrl: './community-trade.component.html',
  styleUrls: ['./community-trade.component.scss']
})
export class CommunityTradeComponent implements OnInit {

  proposerId: string;
  partnerId: string;

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

  ngOnInit(): void {
    this.store.dispatch(loadCollectors());

    this.partnerId = this.route.snapshot.paramMap.get('partnerId');
    this.proposerId = this.route.snapshot.paramMap.get('proposerId');
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

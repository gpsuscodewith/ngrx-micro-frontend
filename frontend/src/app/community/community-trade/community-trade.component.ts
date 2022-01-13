import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommunityState } from '../store/state/community.state';
import { Comic } from 'src/app/catalog/model/comic.model';
import { loadPartnerId, loadProposerId } from '../store/actions/community.actions';

@Component({
  selector: 'app-community-trade',
  templateUrl: './community-trade.component.html',
  styleUrls: ['./community-trade.component.scss']
})
export class CommunityTradeComponent implements OnInit {

  proposerId: string;
  partnerId: string;

  proposerComics$: Observable<Comic[]>;
  partnerComics$: Observable<Comic[]>;


  constructor(private route: ActivatedRoute, private store: Store<CommunityState>) {

  }

  getData() {
    // call a service
    // set value to local variable

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.partnerId = params.partnerId;
      this.proposerId = params.proposerId;

      this.store.dispatch(loadPartnerId( {partnerId: this.partnerId} ));
      this.store.dispatch(loadProposerId( {proposerId: this.proposerId} ));

      console.log('this.partnerId - ' + this.partnerId);
      console.log('this.proposerId - ' + this.proposerId);
    })
  }

}

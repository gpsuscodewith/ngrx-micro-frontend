import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community-trade',
  templateUrl: './community-trade.component.html',
  styleUrls: ['./community-trade.component.scss']
})
export class CommunityTradeComponent implements OnInit {

  proposerId: string;
  partnerId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.partnerId = params.partnerId;
      this.proposerId = params.proposerId;

      console.log('this.partnerId - ' + this.partnerId);
      console.log('this.proposerId - ' + this.proposerId);
    })
  }

}

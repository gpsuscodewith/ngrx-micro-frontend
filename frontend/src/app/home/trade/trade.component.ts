import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicValueInput } from 'src/app/catalog/model/comic-value-input';

import { CommunityTradeComponent } from 'src/app/community/community-trade/community-trade.component';

import { ComicSelectionChangeEventArgs } from 'src/app/community/model/comic-selected-event-args';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {

  proposerId: string;
  partnerId: string;

  proposerSelections: ComicValueInput[] = [];
  partnerSelections: ComicValueInput[] = [];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.partnerId = this.route.snapshot.paramMap.get('partnerId');
    this.proposerId = this.route.snapshot.paramMap.get('proposerId');
    console.log('this.partnerId - ' + this.partnerId);
    console.log('this.proposerId - ' + this.proposerId);
  }

  onPartnerComicSelectionChanged(eventArgs: ComicSelectionChangeEventArgs): void {
    console.log('onPartnerComicSelectionChanged fired with ' + eventArgs);
    this.handleSelectionUpdate(eventArgs, this.partnerSelections);
  }

  handleSelectionUpdate(update: ComicSelectionChangeEventArgs, currentSelections: ComicValueInput[]) : void {
    console.log(`Inside handleSelectionUpdate with the currentSelections of ${currentSelections}`);
    let selectionIndex: number = currentSelections
      .map(x => x.issueNumber)
      .indexOf(update.issueNumber);

    if (selectionIndex > -1 && !update.isSelected) {
      console.log('Need to remove from currentSelection');
    } else if (update.isSelected) {
      console.log('Need to add to currentSelection');
      let selection: ComicValueInput = {
        issueNumber: update.issueNumber,
        condition: update.condition
      };
      currentSelections.push(selection);
    } else {
      console.log('fail');
    }
  }

  onProposerComicSelectionChanged(eventArgs: ComicSelectionChangeEventArgs): void {
    console.log('onProposerComicSelectionChanged fired with ' + eventArgs);
  }

}

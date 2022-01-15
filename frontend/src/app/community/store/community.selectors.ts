import { createFeatureSelector, createSelector } from '@ngrx/store';
import { zip } from 'rxjs';
import { Collector } from '../model/collector.model';
import { CommunityState } from './state/community.state';

const getCommunityFeatureState = createFeatureSelector<CommunityState>("community");

export const getCollectors = createSelector(
  getCommunityFeatureState,
  state => {
    console.log('Inside getCollectors selector with a value of ' + state.collectors);
    console.log('Return an array of collectors with a length of ' + state.collectors.length);
    return state.collectors;
  }
);

export const getCurrentComicIssueNumber = createSelector(
  getCommunityFeatureState,
  state => state.currentComicIssue
);

export const getCollectorThatHasIssue = createSelector(
  getCommunityFeatureState,
  getCurrentComicIssueNumber,
  (state, currentIssueNumber) => state.collectors.filter(x => x.instances.findIndex(y => y.issueNumber === currentIssueNumber) !== -1)
);

export const getCurrentTradeProposer = createSelector(
  getCommunityFeatureState,
  state => {
    console.log('Inside getCurrentTradeProposer selector with a tradeProposerId of ' + state.tradeProposerId);
<<<<<<< HEAD
    console.log('The length of state.collectors is ' + state.collectors.length);
=======
>>>>>>> main
    let proposer = state.collectors.find(x => x.id === state.tradeProposerId);
    console.log('The value of proposer inside getCurrentTradeProposer is ' + proposer);
    return proposer;
  }
);

export const getComicsForTradeProposer = createSelector(
  getCommunityFeatureState,
  getCurrentTradeProposer,
  (state, proposer) => proposer.instances
);

export const getCurrentTradePartner = createSelector(
  getCommunityFeatureState,
  state => state.collectors.find(x => x.id === state.tradePartnerId)
);

export const getComicsForTradePartner = createSelector(
  getCommunityFeatureState,
  getCurrentTradePartner,
  (state, partner) => partner.instances
);

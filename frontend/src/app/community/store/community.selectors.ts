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
  state => state.tradeProposerId
);

export const getComicsForTradeProposer = createSelector(
  getCommunityFeatureState,
  getCurrentTradeProposer,
  (state, proposerId) => state.collectors.find(x => x.id === proposerId).instances
);

export const getCurrentTradePartner = createSelector(
  getCommunityFeatureState,
  state => state.tradePartnerId
);

export const getComicsForTradePartner = createSelector(
  getCommunityFeatureState,
  getCurrentTradePartner,
  (state, partnerId) => state.collectors.find(x => x.id === partnerId).instances
);

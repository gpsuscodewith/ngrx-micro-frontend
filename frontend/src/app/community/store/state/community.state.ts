import { ComicInstance } from '../../model/comic-instance.model';
import { Collector } from '../../model/collector.model';

export interface CommunityState {
  currentComicIssue: string | null;
  collectors: Collector[];
  tradeProposerId: string | null;
  tradePartnerId: string | null;
}

export const initialState: CommunityState = {
  currentComicIssue: null,
  collectors: [],
  tradeProposerId: null,
  tradePartnerId: null
}


import { ComicInstance } from './comic-instance.model';
import { Collector } from './collector.model';

export interface CommunityState {
  collectors: Collector[];
}

export const initialState: CommunityState = {
  collectors: []
}


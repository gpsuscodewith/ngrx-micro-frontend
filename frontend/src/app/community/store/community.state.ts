import { ComicInstance } from '../model/comic-instance.model';
import { Collector } from '../model/collector.model';

export interface CommunityState {
  collectors: Collector[];
}

export const initialState: CommunityState = {
  collectors: []
}


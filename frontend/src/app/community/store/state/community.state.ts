import { ComicInstance } from '../../model/comic-instance.model';
import { Collector } from '../../model/collector.model';

export interface CommunityState {
  currentComicIssue: string | null;
  collectors: Collector[];
}

export const initialState: CommunityState = {
  currentComicIssue: null,
  collectors: []
}


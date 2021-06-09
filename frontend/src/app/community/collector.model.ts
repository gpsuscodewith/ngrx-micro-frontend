import { ComicInstance } from "./comic-instance.model";

export class Collector {
  id!: string;
  lastName!: string;
  firstName!: string;
  location!: string;
  rating!: number;
  instances!: ComicInstance[];
}



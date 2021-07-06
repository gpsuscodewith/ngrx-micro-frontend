import { v4 as uuidv4 } from 'uuid';
import { Collector } from "./collector.model";
import { ComicInstance} from "./comic-instance.model";

export const MOCKCOLLECTORS: Collector[] = [
  {
    id: "collector1",
    lastName: "Skywalker",
    firstName: "Luke",
    location: "Los Angeles, CA",
    rating: 5,
    instances: [
      {
        token: 1,
        issueNumber: "A1",
        condition: "Mint"
      },
      {
        token: 2,
        issueNumber: "A1",
        condition: "Very Good"
      },
      {
        token: 3,
        issueNumber: "A3",
        condition: "Mint"
      }
    ]
  },
  {
    id: "collector2",
    lastName: "Leia",
    firstName: "Princess",
    location: "Los Angeles, CA",
    rating: 5,
    instances: [
      {
        token: 4,
        issueNumber: "A2",
        condition: "Mint"
      },
      {
        token: 5,
        issueNumber: "A4",
        condition: "Very Good"
      },
      {
        token: 6,
        issueNumber: "B1",
        condition: "Mint"
      }
    ]
  },
  {
    id: "collector3",
    lastName: "Solo",
    firstName: "Han",
    location: "Tombstone, Az",
    rating: 1,
    instances: [
      {
        token: 7,
        issueNumber: "H1",
        condition: "Good"
      },
      {
        token: 8,
        issueNumber: "H2",
        condition: "Mint"
      },
      {
        token: 9,
        issueNumber: "G1",
        condition: "Mint"
      }
    ]
  }
];

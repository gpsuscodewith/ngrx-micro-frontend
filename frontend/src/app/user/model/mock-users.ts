import { v4 as uuidv4 } from 'uuid';
import { User } from './user.model';

export const MOCKUSERS: User[] = [
  {
    id: "12345",
    userName: "jedi",
    lastName: "Skywalker",
    firstName: "Luke",
    isCollector: true,
    isAppraiser: false,
    collectorId: "collector1"
  },
  {
    id: "23456",
    userName: "pricess",
    lastName: "Leia",
    firstName: "Princess",
    isCollector: true,
    isAppraiser: false,
    collectorId: "collector2"
  },
  {
    id: "34567",
    userName: "smuggler",
    lastName: "Solo",
    firstName: "Han",
    isCollector: true,
    isAppraiser: false,
    collectorId: "collector3"
  }
];

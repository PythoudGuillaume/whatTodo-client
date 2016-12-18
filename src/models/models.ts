export class List {
  id: string;
  public: boolean;
  title: string;
  date: Date;
  items: [Item];
}

export class Item {
  id: string;
  text: string;
  votes: [number];
  myVote: number;
}

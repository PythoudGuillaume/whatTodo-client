export class List {
  id: string;
  public: boolean;
  title: string;
  items: [Item];
}

export class Item {
  id: string;
  text: string;
  votes: [number];
}

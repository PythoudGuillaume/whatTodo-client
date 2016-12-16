export class WTodo{
  id:number;
  description:string;
  title:string;
  answer:[Choice];
}

export class Choice{
  title:string;
  vote: number;
}

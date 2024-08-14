export class Todo {
  id: number;
  done: boolean;

  constructor(public text: string) {
    this.done = false;
    this.id = Date.now();
  }
}

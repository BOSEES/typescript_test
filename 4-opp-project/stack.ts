{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop():string;
  }
  
  type StackNode = {
    readonly value: string;
    readonly next: StackNode | undefined;
  }

  class LinkedList implements Stack {
    private _size: number = 0;
    private head: StackNode | undefined;

    constructor(private capacity: number) {};

    get size() {
      return this._size;
    }

    push(value: string): void {
      if(this.capacity === this.size) {
        throw new Error("stack is full!");
      }
      const node: StackNode = {value: value, next: this.head}
      this.head = node;
      this._size++;
    }

    pop(): string { //null == undefined
      if(this.head == null) {
        throw new Error("stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  
  const stack = new LinkedList(10);
  stack.push("duddlf1")
  stack.push("duddlf2")
  stack.push("duddlf3");
  stack.push("duddlf1")
  stack.push("duddlf2")
  stack.push("duddlf3");
  stack.push("duddlf1")
  stack.push("duddlf2")

  console.log(stack.size);
}

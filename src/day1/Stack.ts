export default class Stack<T> {
    public length: number;
    private top?:StackNode<T>;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        let node = {value:item} as StackNode<T>
        if(!this.top){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        } 
        this.length++;
    }

    pop(): T | undefined {
        if(!this.top) return undefined;

        let value = this.top.value;
        this.top = this.top.next;

        this.length--;

        return value;
    }

    peek(): T | undefined {
        if(!this.top) return undefined;
        return this.top.value;
    }
}

type StackNode<T> = {
    value: T,
    next?: StackNode<T> //reference to the next node below current node in stack
}

/*
Cases
- pushing into an empty stack
- pushing into non-empty stack
- popping from stack L > 1
- popping from stack L = 1
- popping from empty stack
*/
export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void { //push to tail of queue
        let newTail = {
            value: item //no further nodes after new tail
        }
        if(!this.tail){
            this.tail = this.head = newTail
        } else {
            this.tail.next = newTail; //this.tail is still the head node
            this.tail = newTail; //change the head node to the new tail node
        }
        this.length++;
        this.printAll(this.length)
    }

    deque(): T | undefined { //pop from head of queue
        if (!this.head) return undefined; //no head, i.e. no queue
        let value = this.head?.value;
        this.head = this.head?.next;
        this.length--;

        //clean up for dequeue if no more nodes
        if (this.length === 0){ //without this will fail list.enqueue(69);
			this.tail = undefined;
		}

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    printAll(length:number): void{
        let node = this.head;
        let values = "";
        while(node){
            values = values + node.value + ",";
            node = node.next;
        }
        values = values + ":" + length;
        console.log(values);
    }
}


type QueueNode<T> = {
    value: T,
    next?: QueueNode<T> //reference to the next QueueNode
}


/*
Garbage collection is done by JS but in general you should free the memory i.e. head.next = undefined
check for length == 0  instead?


*/
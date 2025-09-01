export default class DoublyLinkedList<T> {
    
    public length: number;
    private head?: ListNode<T>; 
    private tail?: ListNode<T>; 

    constructor() {
        this.length = 0;
        this.head = undefined; //not really required but good to be explicit
        this.tail = undefined;
    }

    prepend(item: T): void {
        let newHead:ListNode<T> = { value: item } //let vs const
        if(!this.head){ //empty list
            this.head = newHead;//currNode && i <idx
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length ++ 
    }

    append(item: T): void {
        let newTail:ListNode<T> = { value: item } //let vs const
        if(!this.tail){ //empty list
            this.tail = newTail;
            this.head = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            newTail.next = undefined; //explcit
            this.tail = newTail;
        }

        this.length ++ 
    }

    insertAt(item: T, idx: number): void { 
        if(idx > this.length){
            throw new Error("Insertion Index greater then length of Linked List")
        } else if (idx === 0 || !this.head){ //empty list
            this.prepend(item)
            return;
        } else if (idx === length){
            this.append(item)
            return;
        }

        let currNode:ListNode<T> | undefined = this.head;
        //TODO: traverse

        let newNode:ListNode<T> = { value: item }
        newNode.prev = currNode.prev;
        newNode.next = currNode;
        currNode.prev = newNode;
        if(currNode.prev) currNode.prev.next = newNode; //only for head case? but already handled

        this.length++;
    } 

    remove(item: T): T | undefined {
        let currNode:ListNode<T> | undefined = this.head;
        for(let i = 0; i < this.length && currNode; i ++){
            if (currNode.value = item){
                return this.removeNode(currNode) ;
            } else {
                currNode = currNode.next; //traverse
            }
        }
        return; //not found
    }

    get(idx: number): T | undefined {
        if(idx > this.length) throw new Error("Insertion Index greater then length of Linked List")
        let currNode:ListNode<T> | undefined = this.head;
        for(let i = 0; i < idx ; i++){ 
            if(!currNode){ //currNode && i <idx
                return; //List has pointer issues
            } else {
                currNode = currNode.next; //traverse until i
            }
        }
        return currNode?.value;
    }

    removeAt(idx: number): T | undefined {
        if(idx > this.length) throw new Error("Insertion Index greater then length of Linked List")
        let currNode:ListNode<T> | undefined = this.traverseTo(idx)
        if (!currNode) return; //TODO: handle
        return this.removeNode(currNode) ;
    }

    removeNode(currNode:ListNode<T>): T{
        if(currNode.prev) currNode.prev.next = currNode.next;
        //if length == 1, prev = undefined
        if(currNode.next) currNode.next.prev = currNode.prev;
        //if length == 1, next = undefined
        
        
        //handle remove from head/tail - update head/tail
        if(currNode == this.head){
            this.head = currNode.next
        }
        if(currNode == this.tail){
            this.tail = currNode.prev
        }

        this.length--;  
        //handle empty list case from length == 1 - update head/tail
        if(length === 0){
            this.head = this.tail = undefined;
        }
        
        currNode.prev = currNode.next = undefined //cleanup

        return currNode.value;
    }


    traverseTo(idx: number): ListNode<T> | undefined {
        let currNode:ListNode<T> | undefined = this.head; //currNode starts at i = 0;
        if(!this.head) throw new Error(`List is empty, cannot traverse`) //this.head = undefined - empty list
        for(let i = 0; i < idx ; i++){ 
            if(!currNode){//currNode && i <idx 
                // currNode = undefined (list issue)
                throw new Error(`TraverseTo encounted undefined node at index ${i}`)
            } else {
                currNode = currNode.next; //traverse to next node
            }
        }
        return currNode;
    }

    traverseToV1(idx: number){
        let currNode:ListNode<T> | undefined = this.head; //currNode starts at i = 0;
        for(let i = 0; i < idx ; i++){ 
            if(!currNode){ //if this.head = 0 - emnpty List, don't traverse.
                throw new Error(`TraverseTo encounted undefined node at index ${i}`)
            } else if(!currNode.next){
                throw new Error(`TraverseTo encounted undefined node at index ${i+1}, cannot traverse to next node`) //does not work for last node
            }
            currNode = currNode.next; //traverse to next node
        }
    }
}


/*
declare type ListNode<T> = {
    value: T,
    next?: ListNode<T>,
    prev?: ListNode<T>,
}
*/


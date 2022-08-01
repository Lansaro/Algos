class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        var NewNode = new Node(val);
        NewNode.next = this.head;
        this.head = NewNode;
        return this.head;
    }
    removeFront() {
        if (this.head === null) {
            return this;
        }
        var RemovedNode = this.head;
        this.head = RemovedNode.next;
        RemovedNode.next = null;
        return this.head;
    }
    front() {
        if (this.head === null) {
            return null;
        } else {
            this.head.val;
        }
    }
}

SLL1 = new SLL()
SLL1.addFront(18) //=> Node { data: 18, next: null }
console.log(SLL1.front());
//SLL1.addFront(5) //=> Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) // => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// SLL1.removeFront();

console.log(SLL1);
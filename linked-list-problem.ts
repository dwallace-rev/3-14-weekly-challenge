
class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }

}

export default class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    addNode(value: any) {
        let newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
        }
        else{
            let current:ListNode = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}



function findIntersect(A: LinkedList, B: LinkedList): any | null {
    let result = null;
    let currentA:ListNode | null = A.head;
    let currentB:ListNode | null = B.head;

    while (currentA && currentB){
        if (currentA.data === currentB.data){
            result = currentA.data;
            break;
        }

        currentA = currentA.next;
        currentB = currentB.next;
    }

    return result ? result : "No intersection found.";
}

let A: LinkedList = new LinkedList();
let B: LinkedList = new LinkedList();

A.addNode(3);
A.addNode(7);
A.addNode(8);
A.addNode(10);

B.addNode(99);
B.addNode(1);
B.addNode(8);
B.addNode(10);

console.log(findIntersect(A, B));
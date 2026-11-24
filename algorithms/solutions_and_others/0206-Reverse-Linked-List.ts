


class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? null : val);
        this.next = (next === undefined ? null : next);
    };
};


function lenOfLinkList(list: ListNode): number {
    let cur = list;
    let count = 1;
    while (cur.next !== null) {
        count++;
        cur = cur.next;
    }
    return count;
};


let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(lenOfLinkList(list));


function printLinkList(list: ListNode): null {
    let curr = list;
    let values: number[] = [];

    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    };

    console.log(values.join(" -> ", " -> null"));
};

printLinkList(list);


function findMiddleNode(head: ListNode): ListNode {
    let slow: ListNode = head;
    let fast: ListNode = head;

    while (fast !== null && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow;
};


function reverseList(head: ListNode): ListNode {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let tmp = curr;
        curr = curr.next;
        tmp.next = prev;
        prev = tmp;
    };
    return prev;
};

function reverseListRecur(head: ListNode): ListNode {
    if (head.next === null) {
       return null;
    }

    let curr = head;
    if (curr.next !== null) {
        let prev = reverseListRecur(head.next);
    } else {

};



let nlist = list.next.next.next.next;
reverseListRecur(list);

printLinkList(nlist);

console.log(findMiddleNode(list).val);


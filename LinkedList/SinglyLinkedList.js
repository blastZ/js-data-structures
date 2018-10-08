class SinglyLinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    value && this.addToHead(value);
  }

  addToHead(value) {
    const newNode = {
      value
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  removeFromHead() {
    if (this.length === 0) return;

    const thisNode = this.head;
    this.head = this.head.next;
    this.length--;

    return thisNode;
  }

  findNode(value) {
    let thisNode = this.head;

    while (thisNode) {
      if (thisNode.value === value) {
        return thisNode;
      }

      thisNode = thisNode.next;
    }

    return thisNode;
  }

  removeNode(value) {
    if (this.length === 0) return;

    if (this.head.value === value) {
      this.removeFromHead();
    }

    let preNode = this.head;
    let thisNode = this.head.next;

    while (thisNode) {
      if (thisNode.value === value) {
        preNode.next = thisNode.next;
        this.length--;
        break;
      }

      preNode = thisNode;
      thisNode = thisNode.next;
    }

    return thisNode;
  }
}

/** Test */

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList
  .addToHead('first')
  .addToHead('second')
  .addToHead('third');

console.log(JSON.stringify(singlyLinkedList, null, 2));

console.log('\n----------Remove from head---------\n');
singlyLinkedList.removeFromHead();
console.log(JSON.stringify(singlyLinkedList, null, 2));

console.log('\n----------Find node which value is third----------\n');
console.log(JSON.stringify(singlyLinkedList.findNode('third'), null, 2));

console.log('\n----------Remove node which value is first--------\n');
singlyLinkedList.removeNode('first');
console.log(JSON.stringify(singlyLinkedList, null, 2));

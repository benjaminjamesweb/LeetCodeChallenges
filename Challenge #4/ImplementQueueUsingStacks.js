class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(element) {
        this.stack1.push(element);
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty() {
        if (this.stack1.length === 0) {
            if (this.stack2.length === 0) {
                return true;
            }
        }
        return false;
    }
}

const myQueue = new MyQueue();
myQueue.push(1); 
myQueue.push(2); 
console.log(myQueue.peek());  
console.log(myQueue.pop());  
console.log(myQueue.empty()); 
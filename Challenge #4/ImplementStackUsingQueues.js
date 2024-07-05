class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(element) {
        this.queue1.push(element);
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const poppedValue = this.queue1.shift();

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return poppedValue;
    }

    top() {

        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const topValue = this.queue1.shift();
        this.queue2.push(topValue);

        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;

        return topValue;
    }

empty() {
    if (this.queue1.length === 0) {
        if (this.queue2.length === 0) {
            return true;
        }
    } 
    return false;
}
}

const myStack = new MyStack();
console.log(myStack.push(1)); 
console.log(myStack.push(2));
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.empty());
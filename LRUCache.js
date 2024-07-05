class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        const node = this.cache.get(key);

        this.remove(node);
        this.add(node);

        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.add(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }

    add(node) {
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); 
lRUCache.put(2, 2); 
console.log(lRUCache.get(1));   
lRUCache.put(3, 3); 
console.log(lRUCache.get(2));   
lRUCache.put(4, 4); 
console.log(lRUCache.get(1));   
console.log(lRUCache.get(3));  
console.log(lRUCache.get(4));  
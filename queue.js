class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data){
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }

        if(this.last){
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue() {
        if(this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;

        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}


function peek(queue) {
    return queue.first;
}

function isEmpty(queue){
    if(queue.first === null){
        return 'Queue is Empty'
    }

    return 'Queue is not Empty'
}

function display(queue){
    if(queue.first === null){
        return 'Empty Queue';
    }
    else{
        let tempNode = queue.first;
        let queueListed = [];
        while(tempNode.next !== null){
            queueListed.push(tempNode);
            tempNode = tempNode.next;
        }
      return queueListed;  
    }
}

function sqDance(queue){
    let spares = new Queue();
    let pairs = [];

    if (queue.first === null){
        return 'No Guests'
    }

    else{
        let tempNode = queue.first;
        let spareNode = spares.first;
        // console.log('tempnode', tempNode);
        // console.log('tempnode.next', tempNode.next)
        // console.log('tempnode.next.next', tempNode.next.next);
        // console.log('tempnode.val', tempNode.value, 'tempnode.val.next', tempNode.next.value)

        while(tempNode !== null){
            // console.log('pairs', pairs)
            // console.log('spares', spares);
            if(spareNode !== null && spareNode.value.charAt(0) !== tempNode.value.charAt(0)){
                    console.log('there is a pair')
                    pairs.push(tempNode.value + 'is dancing with' + spareNode);
                    spares.dequeue();
                    queue.dequeue();
            } 
            if(tempNode.value.charAt(0) !== tempNode.next.value.charAt(0)){
                console.log('there is a pair')
               pairs.push(tempNode.value + ' is dancing with ' + tempNode.next.value);
               queue.dequeue();
               queue.dequeue();

               console.log('new queue', queue)
               console.log('tempnode', tempNode)
               

            }
            else {
                console.log('two in a row')
                spares.enqueue(tempNode.value);
                spares.enqueue(tempNode.next.value);
                queue.dequeue();
                queue.dequeue();
            }
        }
        console.log('all pairs finished')
        return pairs;
        // , 'There are ' + spares.length + 'waiting to dance'
    }
}

const bank = (line) => {
    const customerHelped = line.dequeue();
    const random = Math.floor(Math.random() * 5);

    if(line.first === null){
        return 'empty line';
    }
        if (random === 1){
            line.enqueue(customerHelped);
            return 'customer returned'
        }
        else{
            return customerHelped;
}
}

let starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();
starTrekQ.dequeue();


let sqr = new Queue();

sqr.enqueue('F Jane');
sqr.enqueue('M Frank');
sqr.enqueue('M John');
sqr.enqueue('M Sherlock');
sqr.enqueue('F Madonna');
sqr.enqueue('M David');
sqr.enqueue('M Christopher');
sqr.enqueue('F Beyonce');

let bankLine = new Queue();

bankLine.enqueue('a')
bankLine.enqueue('b')
bankLine.enqueue('c')
bankLine.enqueue('d')
bankLine.enqueue('e')
bankLine.enqueue('f')
bankLine.enqueue('g')
bankLine.enqueue('h')
bankLine.enqueue('i')
bankLine.enqueue('j')
bankLine.enqueue('k')
//console.log(isEmpty(bankLine))
console.log(bank(bankLine));
console.log(bank(bankLine));
console.log(bank(bankLine));
console.log(bank(bankLine));
console.log(bank(bankLine));
console.log(display(bankLine))

// console.log(display(sqr));
// sqr.dequeue();
// sqr.dequeue();
// console.log(display(sqr));
//console.log(sqDance(sqr));
//console.log(display(starTrekQ));

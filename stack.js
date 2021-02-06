class _Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    
}

function peek(stack){
    return stack.top;
}

function isEmpty(stack){
    if(stack.top === null){
        return "Stack is Empty"
    }
    return 'Stack is Not Empty'
}

function display(stack){
    if(stack.top === null){
        return 'Empty Stack';
    }
    else{
        let tempNode = stack.top;
        let stackListed = [];
        while(tempNode.next !== null){
            stackListed.push(tempNode);
            tempNode = tempNode.next;
        }
      return stackListed;  
    }
}

function sort(stack){
    let tempStack = new Stack();
    
    while(stack.top){
        let tmp = stack.pop(); 

        while(tempStack.top && tempStack.top.data < tmp){
            stack.push(tempStack.pop());
        }
        tempStack.push(tmp);
    }

    return display(tempStack);
}


const starTrek = new Stack()

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();
starTrek.pop();

const test = new Stack();

test.push(1);
test.push(7);
test.push(2);
test.push(5);



//console.log(display(starTrek));

//console.log(display(test));
console.log(sort(test));


let enqueueStack = new Stack();
let dequeueStack = new Stack();


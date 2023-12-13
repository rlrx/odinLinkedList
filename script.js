function LinkedList() {
    console.log("LL initialised");
    let head = null;
    function append(value){
        let newNode = Node(value);
        if(head == null){
            head = newNode;
        }
        else{
            let current = head;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }
    function prepend(value){
        let newNode = Node(value);
        if(head == null){
            head = newNode;
        }
        else{
            let current = head;
            head = newNode;
            head.nextNode = current;
        }
    }
    function size(){
        if(head == null){
            return 0;
        }
        else{
            let current = head;
            let count = 1;
            while(current.nextNode){
                current = current.nextNode;
                count++;
            }
            return count;
        }
    }
    function headNode(){
        if(head == null){
            return "Empty Linked List";
        }
        return head;
    }
    function tail(){
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let current = head;
            while(current.nextNode){
                current = current.nextNode;
            }
            return current;
        }
    }
    function at(index){
        let count = 0;
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let current = head;
            if(index == 0){
                return current;
            }
            else while(current.nextNode){
                current = current.nextNode;
                count++;
                if(count == index){
                    return current;
                }
            }
            return "Index out of range!"
        }
    }
    function pop(){
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let current = head;
            let prev = current;
            while(current.nextNode){
                prev = current;
                current = current.nextNode;
            }
            if(current == head){
                head = null;
            }
            else{
                prev.nextNode = null;
            }
        }
    }
    function contains(value){
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let current = head;
            if(current.value == value){
                return true;
            }
            else while(current.nextNode){
                current = current.nextNode;
                if(current.value == value){
                    return true;
                }
            }
            if(current.value == value){
                return true;
            }
            else{
                return false;
            }
        }
    }
    function find(value){
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let i = 0;
            let current = head;
            if(current.value == value){
                return i;
            }
            else while(current.nextNode){
                current = current.nextNode;
                if(current.value == value){
                    i++;
                    return i;
                }
                else{
                    i++;
                }
            }
        }
        return null;
    }
    function toString(){
        let result = "";
        if(head == null){
            return "Empty Linked List";
        }
        else{
            let current = head;
            while(current){
                result += `( ${current.value} )`;
                result += ' -> ';
                current = current.nextNode;
            }
            result += 'null';
        }
        return result;
    }
    return { headNode, append, prepend, size, tail, at, pop, contains, find, toString }
}

function Node(nodeValue = null) {
    let value = nodeValue;
    let nextNode = null;
    console.log('new node initialized!');
    return {value: value, nextNode: nextNode};
}
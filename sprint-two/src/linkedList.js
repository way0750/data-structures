var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // find list.tail, add node by creating a new node obj
  // update list.tail to the just added node
  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }
  };

  list.addToHead = function (value) {
    var newNode = new Node(value);
    if (list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else { 
      list.head.previous = newNode;     
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.removeTail = function(){
    var removedTailValue = list.tail.value;
    var newTail = list.tail ? list.tail.previous : null;
    if (list.tail){list.tail.previous = null;}
    if (newTail){newTail.next = null;}
    list.tail = newTail;
    return removedTailValue;
  };

  // find list.head, remove it
  // update list.head
  list.removeHead = function() {
    if (list.head == null ){return null;}
    
    var formerHead = list.head;
    list.head = formerHead.next;
    if (list.head){list.head.previous = null;}
    formerHead.next = null;

    return formerHead.value;

  };

  // go through the list one node at the time
  // compare node.value with target
  // return if found
  list.contains = function(target, returnNodeInstead) {
    var curNode = list.head;
    
    while(curNode !== null){
      if (curNode.value === target){
        return returnNodeInstead ? curNode : true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

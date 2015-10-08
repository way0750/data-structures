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
      list.tail = newNode;
    }
  };

  // find list.head, remove it
  // update list.head
  list.removeHead = function() {
    if (list.head !== null){
      var formerHead = list.head;
      list.head = list.head.next;
      return formerHead.value;
    }
  };

  // go through the list one node at the time
  // compare node.value with target
  // return if found
  list.contains = function(target) {
    var curNode = list.head;
    
    while(curNode !== null){
      if (curNode.value === target){return true;}
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

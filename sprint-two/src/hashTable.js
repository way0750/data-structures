// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   // find list.tail, add node by creating a new node obj
//   // update list.tail to the just added node
//   list.addToTail = function(value, key) {
//     var newNode = new Node(value, key);
//     if (list.head === null){
//       list.head = newNode;
//       list.tail = newNode;
//     } else {
//       list.tail.next = newNode;
//       list.tail = newNode;
//     }
//   };

//   // find list.head, remove it
//   // update list.head
//   list.removeHead = function() {
//     if (list.head !== null){
//       var formerHead = list.head;
//       list.head = list.head.next;
//       return formerHead.value;
//     }
//   };

//   // go through the list one node at the time
//   // compare node.value with target
//   // return if found
//   list.contains = function(value, key) {
//     var curNode = list.head;
    
//     while(curNode !== null){
//       if (curNode.value === value){
//         return true;
//       } else if (arguments.length>1){
//       	if (curNode.key === key) {return curNode;}
//       }
//       curNode = curNode.next;
//     }
//     return false;
//   };

//   return list;
// };

// var Node = function(value, key) {
//   var node = {};

//   node.value = value;
//   node.key = key;
//   node.next = null;

//   return node;
// };
// 
// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);

// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var linkObj = this._storage[index];
//   if (linkObj){
//   	// if LinkedList already exist then find and see if same key already exist
//   	// if yes: overwrite, if no: add to end
//   	// loop through the linkedlist obj
//   	var curNode = linkObj.head;
//   	while (curNode !== null && curNode.key !== k){
//   		curNode = curNode.next;
//   		// debugger;
//   	}

//   	curNode ? curNode.value = v : linkObj.addToTail(v,k);

//   } else {
//   	var newLinkedList = LinkedList();
//   	newLinkedList.addToTail(v, k);
//   	this._storage[index] = newLinkedList;
//   }
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var foundNode = this._storage[index].contains(k, k);
//   return foundNode.value;
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
set array
convert key to num index and story as linkedlist obj on array[key_index];
	if index value == null, it's empty,
	if not empty, add to end of linkedlist obj.addToTail = 


 */

var HashTable = function(limit) {
  this.entrySize = 0;
  this._limit = limit || 8;
  // debugger
  this._storage = LimitedArray(this._limit);

};


// when this.entrySize is 
//  >= 0.75: double
//  < 0.75: halve
// read every key and value to recreate the entire the hashTable 
// reassign it to _storage
HashTable.prototype.changeTableSize = function () {
	var fullness = this.entrySize  /  this._limit, newTable, allValue, newLimit;
	// debugger;
	if (fullness >= 0.75) {
		newLimit = this._limit*2;		
	} else if (fullness <= 0.25){
		newLimit = Math.ceil(this._limit/2);
	}

	newTable = new HashTable(newLimit);

		// go through each key : value and insert them to the new table
	allValue = this._storage;

	allValue.each(function( bucketObj, bucketIndex, table){
		for (var key in bucketObj){
			// debugger;
			newTable.insert(key, bucketObj[key]);
		}
	});

	this._storage = newTable._storage;
	this._limit = newLimit;
};

HashTable.prototype.insert = function(k, v) {
	// debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // should return an {}
  var arr = [this, this._limit, index];
  // debugger;
  if (!this._storage.get(index)){
  	this._storage.set(index, {});
  }
  this._storage.get(index)[k]=v;
  this.entrySize++;


  if ( (this.entrySize  /  this._limit) >= 0.75 ) {
  	this.changeTableSize();
  }

};



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index) ? this._storage.get(index)[k] : null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
  if (Object.keys(this._storage.get(index)).length === 0 ){this._storage.set(index, null);}
  this.entrySize--;

  if ( (this.entrySize  /  this._limit) <= 0.20 ) {
  	this.changeTableSize();
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */



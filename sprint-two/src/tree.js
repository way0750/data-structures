// a tree IS a node

var Tree = function(value) {
  var newTree = {};

  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  for(var methName in treeMethods){
  	newTree[methName] = treeMethods[methName];
  }

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  // your code here
  var newNode = new Tree(value);

  this.children = ( this.children ? this.children.concat([newNode]) : [newNode]);

};

treeMethods.contains = function(target) {

	//use recursion to find target within all children;
	//
	//base case: end of the child tree; node.children === null
	//how to break: if current node.value !== target then call contains again with current node.child
	// what to return: if matching value is found, then return true;
	// what to do about return, check and see if it is true, if yes, then keep on returning, if false, call next child

	if (this.value === target){
		return true;
	} else if (this.children){
		for (var i = 0; i < this.children.length; ++i){
			var childNode = this.children[i];
		 	if (childNode.contains(target)){
		 		return true;
		 	}			
		}
	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

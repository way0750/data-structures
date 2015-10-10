// a tree IS a node

var Tree = function(value, parent) {
  var newTree = {};

  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  newTree.parent = parent || null;

  for(var methName in treeMethods){
  	newTree[methName] = treeMethods[methName];
  }

  return newTree;
};

var treeMethods = {};


// remove parent child relationship as a way to disconnect a sub tree;
// set parent to null
// then go to parent's children list and remove self.
// 
treeMethods.breadthFirstLog = function(callBack){
	// go through every child first before recursively calling sub sub child
	
	

};

treeMethods.removeFromParent = function(){
	var formerParent = this.parent;
	// delete child in parent's list
	delete formerParent[this.value];
	// return formerParent.children;
	
	// delete parent current tree's parent property
	this.parent = null;
	
};

treeMethods.traverse = function(callBack){
	callBack(this.value);
	if (this.children){
		for (var childName in this.children){
			this.children[childName].traverse(callBack);
		}
	}
};


treeMethods.addChild = function(value) {
  // your code here
  var newNode = new Tree(value, this);

  // use child's value as key too
  // so just keep children as valueAsKey : treeObj in a object.
  // this.children ? this.children[value] = newNode : this.children = { value : newNode};
  if (!this.children){this.children = {};}
  this.children[value] = newNode;
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
		for (var childName in this.children){
			if (this.children[childName].contains(target)){return true;}
		}
	}
	return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var protoMethods = {

	buildArr : function(){
		var leftSide = [], rightSide = [];
		
		if (this.left) {leftSide = this.left.buildArr();}
		if (this.right) {rightSide = this.right.buildArr();}
		
		return leftSide.concat(this.value, rightSide);
	},

	// sortedInsert is to call the topmostnode and do the insert on each array value
	// by doing it recursively, you can add mid value to insert;

	sortedInsert : function(arr){
		// this value should always be the top most node;
		var midIndex = Math.floor(arr.length/2);
		var midValue = arr[midIndex];
		this.insert(midValue);

		var smallerChildren = arr.slice(0, midIndex);
		var biggerChidren = arr.slice(midIndex+1);
		if (smallerChildren.length){
			this.sortedInsert(smallerChildren);
		}
		if (biggerChidren.length){
			this.sortedInsert(biggerChidren);
		}
	},

	rebuildTree : function(sortedArr){
		// create a node with the midpoint
		// then left with two small arrays
		// call rebuildTree with each array;
		




		var midIndex = Math.floor(sortedArr.length/2);
		var midValue = sortedArr[midIndex];

	
		this.value = midValue;
		this.parent = parent || null;
		this.left = null;
		this.right = null;
		this.curDepth = 1;
		this.curMinDepth = 2;
		this.curMaxDepth = 2;

		var smallerChildren = sortedArr.slice(0, midIndex);
		var biggerChidren = sortedArr.slice(midIndex+1);
		if (smallerChildren.length){
			this.sortedInsert(smallerChildren);
		}
		if (biggerChidren.length){
			this.sortedInsert(biggerChidren);
		}
		
	},

	insert : function(value){
		// var newTreeNode = BinarySearchTree(value, this);
		var newTreeNode;
		
		if (value <= this.value){
			if (this.left === null){
				newTreeNode = BinarySearchTree(value, this);
				this.left = newTreeNode;
			} else {
				newTreeNode = this.left.insert(value);
			}
		} else {
			if (this.right === null){
				newTreeNode = BinarySearchTree(value, this);
				this.right = newTreeNode;
			} else {
				newTreeNode = this.right.insert(value);
			}
		}

		this.curMinDepth = Math.min(this.curMinDepth, newTreeNode.curMinDepth);
		this.curMaxDepth = Math.max(this.curMaxDepth, newTreeNode.curMaxDepth);

		if (this.rebalancing === false && this.curDepth === 1 && this.curMaxDepth/this.curMinDepth > 2){
			this.rebalancing = true;
			this.rebuildTree(this.buildArr());
			this.rebalancing = false;
		} else {
			return newTreeNode;
		}

	},

	contains : function(target){
		if (this.value === target){
			return true;
		} else {
			if (target > this.value){
				return this.right ? this.right.contains(target) : false;
			} else {
				return this.left ? this.left.contains(target) : false;
			}
		}
	},

	depthFirstLog : function(callBack){
		// base case dont have any child
		callBack(this.value);
		if (this.left){
			this.left.depthFirstLog(callBack);
		} else if (this.right) {
			this.right.depthFirstLog(callBack);
		}
	},

	breadthFirstLog : function(callBack){
	  // always go through all the same level nodes first,
	  // then go through all the next same level nodes
	  // as you go through the same level nodes, add next level node but don't process them;
	  var curNode, sameLevelNodes = [this];
	  while (sameLevelNodes.length){
	  	curNode = sameLevelNodes.shift();
	
	  	if (curNode){
	  		callBack(curNode.value);
	  		sameLevelNodes.push( curNode.left, curNode.right);
	  	}
	  }
	  // return sameLevelNodes.value;
	}
};

var BinarySearchTree = function(value, parent) {
	var newTree = Object.create(protoMethods);

	newTree.value = value;
	newTree.parent = parent || null;
	newTree.left = null;
	newTree.right = null;
	newTree.curDepth = parent ? parent.curDepth+1 : 1;
	// if no parent then it's the top most node
	// set min and max depth for entire tree;
	
	newTree.rebalancing = false;

	newTree.curMinDepth = newTree.curDepth+1;
	newTree.curMaxDepth = newTree.curDepth+1;

	return newTree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var protoMethods = {
	// make new tree instance with newVal
	// then compare with current tree node
	// 	see if it is smallerNEqual or bigger;
	// 	then see if that spot has been taken,
	//		if taken, call the tree node's insert with this new tree;
	
	// traversal : function (treeNode, conditionCTRLfunct) {

	// 	if (conditionCTRLfunct(treeNode)){

	// 	}
	// },

	insert : function(value){
		var newTreeNode = BinarySearchTree(value);
		function spotSearch(treeNode, newTreeNode){
			// always find a spot anyway
			// so base case: spot found?
			// not found? check next child tree node or create
			// 	new one then done
			if (newTreeNode.value <= treeNode.value){
				if (treeNode.left){
					spotSearch(treeNode.left, newTreeNode);
				} else {
					treeNode.left = newTreeNode;
				}
			} else {
				if (treeNode.right){
					spotSearch(treeNode.right, newTreeNode);
				} else {
					treeNode.right = newTreeNode;
				}
			}
		}

		spotSearch(this, newTreeNode);
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
	}
};

var BinarySearchTree = function(value) {
	var newTree = Object.create(protoMethods);
	
	newTree.value = value;
	newTree.left = null;
	newTree.right = null;

	return newTree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
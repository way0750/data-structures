/*
 use two dimensional objects

	A  B  C
A   0  1  5
B  -1  0  1
C  -1 -1  0

each node {
	connections to other
		an array of obj {other node(the numeric id of each node), connected?} or {101 : positiveNumber(as distance)}
			-1(not connected) or positive (connected) and the distance
			or { 101: true, 203: false, 999: true  }
	
			{
				101 : { 203: true, 999: true , value: value},
				203 : { 101: true, 999: true , value: value},
				999 : { 101: true, 203: true , value: value}
			}

			

	its own value

}

 */

// ------------------------
// Instantiate a new graph
var Graph = function() {
	this.availableID = 0;
	this.nodes = {};


};

var node = function (value) {
	// add a property 'value' to the new node and make sure it is unenumerable;
	Object.defineProperty(this, "value", {
		value : value
	});

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
	// make new node
	var newNodeID = this.availableID++;
	var newNode = new node(value);

	// add new node to graph with unique id
	this.nodes[newNodeID] = newNode;

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value, nameInstead) {
	// get a list of all the ids in this.nodes
	// go through them, and access the actual node on it
	// check that node.value
	// 	compare === value;
	// 	
	var allNodeIDs = Object.keys(this.nodes);

	for (var i = 0; i < allNodeIDs.length; i++){
		var nodeID = allNodeIDs[i];
		if (this.nodes[nodeID].value === value){
			return nameInstead ? nodeID : true;
		}
	}
	return false;
};

// Graph.prototype.traverse = function (test) {
// 	// test can be a value or a function for doing more complex comparison
// 	var callBack;
// 	if (arguments.length){
// 		callBack = typeof(test) === 'string' ? function(node){return node.value === test} : test ;
// 	}

// 	var allNodeIDs = Object.keys(this.nodes);
// 	for (var i =0; i < allNodeIDs.length; i++){
// 		var nodeID = allNodeIDs[i];
// 		if (callBack(this.nodes[nodeID])){
// 			return true;
// 		}
// 	}

// };

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
	// update all of the to-be-deleted node's connection
	// then delete the node;
	var nodeID = this.contains(value, true);
	if (nodeID){
		// go through all of the connection and update about the face the this current node is about to be deleted
		var connectedNodesID = Object.keys(this.nodes[nodeID]);
		connectedNodesID.reduce(function(graph, connectionID){
			delete graph[connectionID][nodeID];
		}, this);
		delete this.nodes[nodeID];
	}

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



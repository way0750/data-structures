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
	this.nodes = {};
};

var node = function (valueAsID) {
	// add a property 'value' to the new node and make sure it is unenumerable;
	Object.defineProperty(this, "value", {
		value : valueAsID
	});
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(valueAsID) {
	// make new node
	// var newNodeID = this.availableID++;
	var newNode = new node(valueAsID);
	
	// add new node to graph with unique id
	this.nodes[valueAsID] = newNode;

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(valueAsID, nameInstead) {

	return !!this.nodes[valueAsID];
};

Graph.prototype.removeNode = function(valueAsID) {

	delete this.nodes[valueAsID];

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return !!this.nodes[fromNode][toNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodes[fromNode][toNode] = true;
	this.nodes[toNode][fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.nodes[fromNode][toNode];
	delete this.nodes[toNode][fromNode];	
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	Object.keys(this.nodes).forEach(function(node){
		cb(node);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



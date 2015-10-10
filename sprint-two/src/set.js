var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = undefined;
  set.items = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // set._storage = undefined;
  var key = JSON.stringify(item); 
  this[key] = item;
};

setPrototype.contains = function(item) {
	var key = JSON.stringify(item);
	return !!this.hasOwnProperty(key);
};

setPrototype.remove = function(item) {
	var key = JSON.stringify(item);
	delete this[key];
};

setPrototype.get = function(item) {
	var key = JSON.stringify(item);
	return this[key];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

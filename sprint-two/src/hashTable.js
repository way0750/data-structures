var HashTable = function(limit) {
  this.entrySize = 0;
  this._limit = limit || 8;

  this._storage = LimitedArray(this._limit);

};


// when this.entrySize is 
//  >= 0.75: double
//  < 0.75: halve
// read every key and value to recreate the entire the hashTable 
// reassign it to _storage
// 
// 
// 
HashTable.prototype.changeTableSize = function () {
	var fullness = this.entrySize  /  this._limit, newTable, allValue, newLimit;
	// debugger;
	if (fullness >= 0.75) {
		newLimit = this._limit*2;		
	} else if (fullness <= 0.25) {
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


  if ( (this.entrySize  /  this._limit) > 0.75 ) {
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
  if (Object.keys(this._storage.get(index)).length === 0 ){ this._storage.set(index, null); }
  this.entrySize--;

  if ( (this.entrySize  /  this._limit) < 0.25 ) {
  	this.changeTableSize();
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */



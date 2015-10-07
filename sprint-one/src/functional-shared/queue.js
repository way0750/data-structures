var queueMethods = {

  enqueue : function(value) {
    this.storage[this.actingIndex0+this.length] = value;
    return ++this.length;
  },

  dequeue : function() {
    if (this.length){
      var dequeuedValue = this.storage[this.actingIndex0];
      this.actingIndex0++;
      --this.length;
      return dequeuedValue;
    }
  },

  size : function() {
    return this.length;
  }
};

var Queue = function() {
	var someInstance = {
		actingIndex0 : 0, 
		length : 0,
		storage : {}
	};

	for (var methName in queueMethods){
		someInstance[methName] = queueMethods[methName];
	}


	return someInstance;
	
};
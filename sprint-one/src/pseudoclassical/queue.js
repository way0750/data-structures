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

  this.storage = {};
  this.actingIndex0 = 0;
  this.length = 0;
  
};

Queue.prototype = queueMethods;
Object.defineProperty(queueMethods, 'constructor', {
	value : Queue
});


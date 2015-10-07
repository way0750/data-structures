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
  var queue = Object.create(queueMethods);

  queue.storage = {};
  queue.actingIndex0 = 0;
  queue.length = 0;

  return queue;
};

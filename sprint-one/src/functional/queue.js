var Queue = function() {
  var someInstance = {};
  var actingIndex0 = 0, length = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[actingIndex0+length] = value;
    return ++length;
  };

  someInstance.dequeue = function() {
    if (length){
      var dequeuedValue = storage[actingIndex0];
      actingIndex0++;
      --length;
      return dequeuedValue;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // length: which is the amount of the items in stack, can be use as current available spot to store incoming value;
  var length = 0;
    
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[length]=value;
    return length++;
  };

  someInstance.pop = function() {
    
    if (length>0){
      length--;
      var poppedVal = someInstance[length];
      delete someInstance[length];
      return poppedVal;
    }

  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

var stackMethods = {


  push :  function (value) {
    this.storage[this.length]=value;
    return ++this.length;
  },

  pop  : function () {
    
    if (this.length>0){
      this.length--;
      var poppedVal = this.storage[this.length];
      delete this.storage[this.length];
      return poppedVal;
    }

  },

  size :  function () {
    return this.length;
  }

};

var Stack = function() {
	var stack = Object.create(stackMethods);
	stack.length = 0;
	stack.storage = {};

	return stack;
};

describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should return sorted Array', function(){
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(18);
    binarySearchTree.insert(11);
    var array = binarySearchTree.buildArr();
    expect(array.join()).to.eql('5,5,6,7,8,9,10,11,18');
  });

  it('should execute a callback on every value in a tree using "breathFirstLog"', function(){
    var array = [];

    var func = function(value){ array.push(value); };
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(5);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(18);
    binarySearchTree.insert(11);
    binarySearchTree.breadthFirstLog(func);
    expect(array.join()).to.eql('8,6,11,5,7,10,18,5,9');
  });

  // buildArr




});

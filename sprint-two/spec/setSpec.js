describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add string an numeric values to set', function(){
    set.add("this is s a string");
    set.add(90);
    expect(set.contains(90)).to.equal(true);
    expect(set.contains('this is s a string')).to.equal(true);
  });


  it('should add objects of any kind to set', function(){
    set.add([1,2,3,4]);
    set.add({name : "god"});
    expect(set.contains({name : "god"})).to.equal(true);
    expect(set.contains([1,2,3,4])).to.equal(true);
  });

  it('should return unstringified value from set', function(){
    set.add([1,2,3,4]);
    set.add({name : "god"});
    expect(typeof set.get({name : "god"})).to.equal('object');
    expect(typeof set.get([1,2,3,4])).to.equal('object');
  });
});

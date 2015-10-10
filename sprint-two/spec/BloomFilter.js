describe('BloomFilter', function() {
  var bFilter;

  beforeEach(function() {
    bFilter = new BloomFilter(18, 3);
  });


  it('should have all functions', function() {
    expect(bFilter.createSingleHash).to.be.a("function");
    expect(bFilter.createHashes).to.be.a("function");
    expect(bFilter.enterBitArray).to.be.a("function");
    expect(bFilter.checkKey).to.be.a("function");
  });


  it('createSingleHash should return same hash for same key', function(){
    var hash1 = bFilter.createSingleHash('abcde', 5);
    var hash2 = bFilter.createSingleHash('abcde', 4);
    var hash3 = bFilter.createSingleHash('abcde', 3);
    expect(bFilter.createSingleHash('abcde', 5)).to.equal(hash1);
    expect(bFilter.createSingleHash('abcde', 4)).to.equal(hash2);
    expect(bFilter.createSingleHash('abcde', 3)).to.equal(hash3);
  });

  it('createHashes should create an array of hashes', function(){
    var hash1 = bFilter.createHashes('what');
    var hash2 = bFilter.createHashes('god');
    expect(bFilter.createHashes('what').toString()).to.equal(hash1.toString());
    expect(bFilter.createHashes('god').toString()).to.equal(hash2.toString());
    // expect(bFilter.bitArray).to.equal(hash2.toString());
  });

  it('enterBitArray should enter hash it BloomFilter array', function(){
    bFilter.enterBitArray('a');
    bFilter.enterBitArray('b');
    bFilter.enterBitArray('c');
    bFilter.enterBitArray('ab');
    expect(bFilter.bitArray.toString()).to.equal(',1,,1,,,,,1,1,1,1,1,,,,,1');
  });

  it('should return true for found key and false for nonexistent key', function(){
    bFilter.enterBitArray('a');
    bFilter.enterBitArray('b');
    expect(bFilter.checkKey('a')).to.equal(true);
    expect(bFilter.checkKey('b')).to.equal(true);
    expect(bFilter.checkKey('c')).to.equal(false);
  });


});

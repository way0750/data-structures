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
    expect(bFilter.bitArray.toString()).to.equal(',,1,1,,,1,,,1,1,,,1,1,1,1,1');
  });

  it('should return true for found key and false for nonexistent key', function(){
    bFilter.enterBitArray('a');
    bFilter.enterBitArray('b');
    expect(bFilter.checkKey('a')).to.equal(true);
    expect(bFilter.checkKey('b')).to.equal(true);
    expect(bFilter.checkKey('c')).to.equal(false);
  });

  it('test false positive', function(){
    
    var makeRandomArray = function(range, rangeMin){
      var arr = [];
      for (var i = 0; i< 20; i++){
        var num = Math.floor((Math.random()*range))+rangeMin;
        arr.push(num);
      }
      return arr;
    };

    var falsePositiveRate = 0;

    for (var l = 0; l < 10000; l++){
      var bloom = new BloomFilter(18, 3);
      var enterArr = makeRandomArray(30, 0);
      enterArr.forEach(function(num){
        bloom.enterBitArray(num);
      });

      var falseArr = makeRandomArray(30, 40);
      var falseAmount = 0;
      // debugger;
      falseArr.forEach(function(falseNum){
        if (bloom.checkKey(falseNum)){
          falseAmount++;
        }
      });

      falsePositiveRate+=falseAmount/20;
    }
    debugger;
    expect(falsePositiveRate/10000).to.equal('I just wanna take a look at this number, if it is around 0.88888 then it is correct');

  });

});

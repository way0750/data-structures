// create a BloomFiler class
// to make hashes
// to keep bitArray
// to faceCheck if a key exist

var BloomFilter = function(max, mod) {
    this.bitArray = [];
    this.max = max;
    this.mod = mod;
};

BloomFilter.prototype.createSingleHash = function(key, mod) {

    var hash = 0;
    for (var i = 0; i < key.length; i++) {
        hash = (hash << 5) + hash + key.charCodeAt(i) + mod;
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
    }

    return hash % this.max;

};


// to output hashes for bitArray;
BloomFilter.prototype.createHashes = function(key) {

    var mod = this.mod;
    var hashes = [];
    while (mod) {
        hashes.push(this.createSingleHash(key, mod));
        --mod;
    }
    return hashes;

};

BloomFilter.prototype.enterBitArray = function(key) {

    var hashes = this.createHashes(key);
    var bFilter = this;
    hashes.forEach(function(hashIndex) {
        bFilter.bitArray[hashIndex] = 1;

    });

};

BloomFilter.prototype.checkKey = function(key) {
    var hashes = this.createHashes(key);
    var bitArray = this.bitArray;
    return hashes.every(function(hash) {
        return bitArray[hash];
    });
};

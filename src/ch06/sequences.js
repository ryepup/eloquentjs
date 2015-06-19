/**
 * Design an interface that abstracts iteration over a collection of
 * values. An object that provides this interface represents a
 * sequence, and the interface must somehow make it possible for code
 * that uses such an object to iterate over the sequence, looking at
 * the element values it is made up of and having some way to find out
 * when the end of the sequence is reached.
 *
 * When you have specified your interface, try to write a function
 * logFive that takes a sequence object and calls console.log on its
 * first five elements—or fewer, if the sequence has fewer than five
 * elements.
 *
 * Then implement an object type ArraySeq that wraps an array and
 * allows iteration over the array using the interface you
 * designed. Implement another object type RangeSeq that iterates over
 * a range of integers (taking from and to arguments to its
 * constructor) instead.
 */

// interface: hasItems() + next()

function ArraySeq(list) {
  this.i = 0;
  this.list = list;
}

ArraySeq.prototype.hasItems = function() {
  return this.i < this.list.length;
};

ArraySeq.prototype.next = function() {
  return this.list[this.i++];
};

function RangeSeq(start, end) {
  this.i = start;
  this.end = end;
}

RangeSeq.prototype.hasItems = function() {
  return this.i < this.end;
};

RangeSeq.prototype.next = function() {
  return this.i++;
};


function logFive(seq) {
  for(var i = 5; seq.hasItems() && i > 0; i--){
    console.log(seq.next());
  }
}

// extra credit non-OO version

STOP_ITERATION = {};

function arrayIterator(list) {
  var i = 0;
  return function() {
    if(i < list.length) return list[i++];
    throw STOP_ITERATION;
  };
}

function rangeIterator(from, to) {
  return function() {
    if(from < to) return from++;
    throw STOP_ITERATION;
  };
}

function logFiveIterator(iter) {
  for(var i = 0; i < 5; i++){
    try{
      console.log(iter());
    }catch(e){
      if (e === STOP_ITERATION) break;
      else throw e;
    }
  }
}

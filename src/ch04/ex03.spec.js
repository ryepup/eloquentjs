describe('ch04ex03', function() {
  describe('arrayToList', function() {
    it('builds a list', function() {
      expect(arrayToList([10,20])).toEqual({value: 10, rest: {value: 20, rest: null }});
    });
  });

  describe('listToArray', function() {
    it('builds an array', function() {
      expect(listToArray(arrayToList([10,20,30]))).toEqual([10,20,30]);
    });
  });
  describe('prepend', function() {
    it('builds a list', function() {
      expect(prepend(10, prepend(20, null)))
        .toEqual({value: 10, rest: {value: 20, rest: null}});
    });
  });
  describe('nth', function() {
    it('finds the value', function() {
      expect(nth(arrayToList([10, 20, 30]), 1)).toBe(20);
    });
    it('throws if you ask for a bad index', function() {
      expect(function() {
        nth(arrayToList([10, 20, 30]), 5000);
      }).toThrow('index out of range');
    });
  });
});

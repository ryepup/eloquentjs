describe('ch04ex01', function() {
  describe('range', function() {
    it('generates an array', function() {
      expect(range(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
      expect(range(2, 6)).toEqual([2,3,4,5,6]);
      expect(range(1, 1)).toEqual([1]);
    });

    it('throws an exception invalid input', function() {
      expect(function() { range(10, 1); }).toThrow();
      expect(function() { range(1, 10, 0); }).toThrow();
      expect(range).toThrow();
      expect(function() { range(null, new Date()); }).toThrow();
    });

    describe('with positive step', function() {
      it('supports the step', function() {
        expect(range(1, 10, 2)).toEqual([1,3,5,7,9]);
        expect(range(1, 1, 2)).toEqual([1]);
      });
      it('throws if we ask to count the wrong way', function() {
        expect(function() { range(10, 1, 2); }).toThrow();
      });
    });

    describe('with negative step', function() {
      it('supports the step', function() {
        expect(range(5,2,-1)).toEqual([5,4,3,2]);
        expect(range(1,1,-1)).toEqual([1]);
      });
      it('throws if we ask to count the wrong way', function() {
        expect(function() { range(1, 10, -1); }).toThrow();
      });
    });

  });

  describe('sum', function() {
    it('sums a range', function() {
      expect(sum(range(1,10))).toBe(55);
    });
    it('sums an array', function() {
      expect(sum([1,2,3,0])).toBe(6);
    });

    it('sums emptyish things as 0', function() {
      expect(sum()).toBe(0);
      expect(sum(null)).toBe(0);
      expect(sum(undefined)).toBe(0);
      expect(sum([])).toBe(0);
    });

    it('throws on invalid input', function() {
      expect(function() { sum('foo'); }).toThrow();
      expect(function() { sum({x:1}); }).toThrow();
    });
  });
});

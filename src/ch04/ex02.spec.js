describe('ch04ex02', function() {
  describe('reverseArray', function() {
    it('returns a new array', function() {
      var a = [1,2,3];
      var reversed = reverseArray(a);
      expect(reversed).toEqual([3,2,1]);
      expect(reversed).not.toBe(a);
    });
    it("doesn't modify the input", function() {
      var a = [1,2,3];
      reverseArray(a);
      expect(a).toEqual([1,2,3]);
    });
  });

  describe('reverseArrayInPlace', function() {
    it('reverses odd-numbered array lengths', function() {
      var a = [1,2,3];
      reverseArrayInPlace(a);
      expect(a).toEqual([3,2,1]);
    });
    it('reverses even-numbered array lengths', function() {
      var a = [1,2,3,4];
      reverseArrayInPlace(a);
      expect(a).toEqual([4,3,2,1]);
    });
  });
});

describe('ch04ex04', function() {
  describe('deepEqual', function() {
    var a = {here: {is: "an"}, object: 2},
        aClone = {here: {is: "an"}, object: 2},
        b = {here: 1, object: 2},
        c = {array:[1,2,3]},
        cClone = {array:[1,2,3]},
        d = {x:null},
        dClone = {x:null}
    ;

    it('handles same object', function() {
      expect(deepEqual(a,a)).toBe(true);
    });
    it('handles same content', function() {
      expect(a).not.toBe(aClone);
      expect(deepEqual(a,aClone)).toBe(true);
    });
    it('handles different content', function() {
      expect(deepEqual(a,b)).toBe(false);
    });
    it('handles arrays', function() {
      expect(deepEqual(c,cClone)).toBe(true);
    });
    it('handles nulls', function() {
      expect(deepEqual(d,dClone)).toBe(true);
    });
  });
});

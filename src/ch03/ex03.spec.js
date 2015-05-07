describe('ch03ex03', function() {
  describe('countBs', function() {
    it('counts Bs', function() {
      expect(countBs('BBC')).toBe(2);
    });
    it('is case sensitive', function() {
      expect(countBs('bbC')).toBe(0);
    });
  });

  describe('countChar', function() {
    it('counts', function() {
      expect(countChar('kakkerlak', 'k')).toBe(4);
    });
    it('is case sensitive', function() {
      expect(countBs('bbC', 'B')).toBe(0);
    });
  });

});

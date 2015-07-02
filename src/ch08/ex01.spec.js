describe('reliableMultiply', function() {
  it('works', function() {
    for(var i = 0; i < 100; i++){
      expect(reliableMultiply(8,8)).toBe(64);
    }
  })
});

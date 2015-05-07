describe('ch03ex02', function() {
  it('supports positive numbers', function() {
    expect(isEven(50)).toBe(true);
    expect(isEven(75)).toBe(false);
  });

  it('supports negative numbers', function() {
    expect(isEven(-1)).toBe(false);
  });
});

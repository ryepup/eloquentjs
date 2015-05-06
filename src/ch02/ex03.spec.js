describe('ch02ex03', function() {
  it('generates 8x8', function() {
    expect(ch02ex03a()).toBe(__html__['src/ch02/8x8.txt'], '8x8');
  });

  it('generates 3x3', function() {
    expect(ch02ex03b(3)).toBe(__html__['src/ch02/3x3.txt'], '3x3');
  });

  it('generates 20x20', function() {
    expect(ch02ex03b(20)).toBe(__html__['src/ch02/20x20.txt'], '20x20');
  });

});

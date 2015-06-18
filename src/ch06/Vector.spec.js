describe('Vector', function() {
  it('can add', function() {
    var a = new Vector(1, 2),
        b = new Vector(2, 3),
        c = a.plus(b);
    expect(c).not.toBe(a);
    expect(c).not.toBe(b);
    expect(c.x).toBe(3);
    expect(c.y).toBe(5);
  });

  it('can subtract', function() {
    var a = new Vector(1, 2),
        b = new Vector(2, 3),
        c = a.minus(b);
    expect(c).not.toBe(a);
    expect(c).not.toBe(b);
    expect(c.x).toBe(-1);
    expect(c.y).toBe(-1);
  });

  it('has a length', function() {
    expect(new Vector(3, 4).length).toBe(5);
  });
});

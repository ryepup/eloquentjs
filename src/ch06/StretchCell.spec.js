describe('StretchCell', function() {
  var sc, stretched;

  beforeEach(function() {
    sc = new StretchCell(new TextCell("abc"), 1, 2);
    stretched = new StretchCell(new TextCell("abc"), 5, 2);
  });

  it('calculates min width', function() {
    expect(sc.minWidth()).toBe(3);
    expect(stretched.minWidth()).toBe(5);
  });
  it('calculates min height', function() {
    expect(sc.minHeight()).toBe(2);
  });
  it('draws', function() {
    expect(sc.draw(3,2)).toEqual(["abc", "   "]);
    expect(stretched.draw(3,2)).toEqual(["abc", "   "]);

  });
});

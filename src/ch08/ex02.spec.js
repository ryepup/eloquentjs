describe('withBoxUnlocked', function() {
  beforeEach(function() {
    box._content = [];
  });

  it('unlocks', function() {
    expect(box.locked).toBe(true);
    withBoxUnlocked(function() {
      expect(box.locked).toBe(false);
    });
    expect(box.locked).toBe(true);
  });

  it('adds when unlocked', function() {
    expect(box._content).toEqual([]);
    withBoxUnlocked(function() {
      box.content.push('gold');
    });
    expect(box._content).toEqual(['gold']);
  });

  it('re-locks after errors', function() {
    expect(function() {
      withBoxUnlocked(function() {
        throw new Error('hey');
      });
    }).toThrowError('hey');
  });
});

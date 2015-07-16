describe('ch09', function() {

  describe('ex01 regex golf', function() {
    it('car or cat', function() {
      var re = null;
      expect(re).toMatchAll("my car", "bad cats");
      expect(re).toMatchNone("camper", "high art");
    });

    it('pop and prop', function() {
      var re = null;
      expect(re).toMatchAll("pop culture", "mad props");
      expect(re).toMatchNone("plop");
    });
    it('ferret, ferry, and ferrari', function() {
      var re = null;
      expect(re).toMatchAll("ferret", "ferry", "ferrari");
      expect(re).toMatchNone("ferrum", "transfer A");
    });
    it('Any word ending in ious', function() {
      var re = null;
      expect(re).toMatchAll("how delicious", "spacious room");
      expect(re).toMatchNone("ruinous", "consciousness");
    });
    it('A whitespace character followed by a dot, comma, colon, or semicolon', function() {
      var re = null;
      expect(re).toMatchAll("bad punctuation .");
      expect(re).toMatchNone("escape the dot");
    });
    it('A word longer than six letters', function() {
      var re = null;
      expect(re).toMatchAll("hottentottententen");
      expect(re).toMatchNone("no", "hotten totten tenten");
    });
        it('A word without the letter e', function() {
      var re = null;
      expect(re).toMatchAll("red platypus", "wobbling nest");
      expect(re).toMatchNone("earth bed", "learning ape");
    });
  });

  it('swaps quotes', function() {
    var text = "'I'm the cook,' he said, 'it's my job.'",
        re = /A/g,
        replacement = "B"
    ;
    expect(text.replace(re, replacement))
      .toBe('"I\'m the cook," he said, "it\'s my job."');

  });

  it('matches numbers', function() {
    var re = null;
    expect(re).toMatchAll("1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
                          "1e+12");
    expect(re).toMatchNone("1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
                           ".");
  });
});

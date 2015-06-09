describe('ch05', function() {
  describe('flatten', function() {
    it('works', function() {
      expect(flatten([[1, 2, 3], [4, 5], [6]]))
        .toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  var ancestry, byName;
  beforeEach(function() {
    ancestry = __fixtures__['src/ch05/ancestry'];
    byName = {};
    ancestry.forEach(function(person) {
      byName[person.name] = person;
    });
  });

  describe('averageMotherChildAgeDifference', function() {
    it('averages', function() {
      expect(averageMotherChildAgeDifference(ancestry, byName))
        .toBeCloseTo(31.2, 1);
    });
  });

  describe('averageAgeByCentury', function() {
    var expected = {
          16: 43.5,
          17: 51.2,
          18: 52.8,
          19: 54.8,
          20: 84.7,
          21: 94
        };

    it('averages', function() {
      var res = averageAgeByCentury(ancestry);
      for(var k in expected){
        expect(res[k]).toBeCloseTo(expected[k], 1);
      }
    });
  });

  describe('groupBy', function() {
    it('groups', function() {
      var data = [
        {state:'tx', id:1},
        {state:'tx', id:2},
        {state:'fl', id:3}
      ], getState = function(item) {
        return item.state;
      };

      expect(groupBy(data, getState)).toEqual({
        tx: [{state:'tx', id:1}, {state:'tx', id:2}],
        fl: [{state:'fl', id:3}]
      });
    });
  });

  describe('some', function() {
    it('works', function() {
      expect(some([NaN, 3, 4], isNaN)).toBe(true);
      expect(some([2, 3, 4], isNaN)).toBe(false);
    });
  });

  describe('every', function() {
    it('works', function() {
      expect(every([NaN, NaN, NaN], isNaN)).toBe(true);
      expect(every([NaN, NaN, 4], isNaN)).toBe(false);
    });
  });
});

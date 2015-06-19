describe('sequences', function() {
  var logs;

  beforeEach(function() {
    logs = [];
    console.log = function(msg) { logs.push(msg); };
  });

  it('ArraySeq', function() {
    logFive(new ArraySeq([1,2]));
    expect(logs).toEqual([1,2]);
  });

  it('RangeSeq', function() {
    logFive(new RangeSeq(100, 1000));
    expect(logs).toEqual([100,101,102,103,104]);
  });
});

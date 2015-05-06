describe('ch02ex01', function() {
  'use strict';

  it('logs a triangle', function() {
    // override console.log to store the results
    var logs = [];
    console.log = function(msg) { logs.push(msg); };
    ch02ex01();
    expect(logs.length).toBe(7);

    expect(logs[0]).toBe('#');
    expect(logs[1]).toBe('##');
    expect(logs[2]).toBe('###');
    expect(logs[3]).toBe('####');
    expect(logs[4]).toBe('#####');
    expect(logs[5]).toBe('######');
    expect(logs[6]).toBe('#######');
  });
});

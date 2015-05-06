describe('ch02ex02', function() {
  'use strict';

  var logs;

  beforeEach(function() {
    logs = [];
    console.log = function(msg) { logs.push(msg); };
  });

  it('can fizz or buzz', function() {
    ch02ex02a();
    expect(logs.length).toBe(100);
    expect(logs).toEqual(__fixtures__['ch02/ex02a']);
  });

  it('can fizz, buzz, and fizzbuzz', function() {
    ch02ex02b();
    expect(logs.length).toBe(100);
    expect(logs).toEqual(__fixtures__['ch02/ex02b']);
  });
});

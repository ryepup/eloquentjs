/**
 * some basic tests demonstrating the jasmine test framework
 */
describe('jasmine basics', function() {
  it('has simple equality expectations', function() {
    expect(true).toBe(true);
    expect(1 === 1).toBe(true);
    expect(1).toBe(1);
    expect(3.14).toBe(3.14);
    expect('n').toBe('n');
    expect('3.14').not.toBe(3.14);
  });

  it('has null/undefined expectations', function() {
    var unitializedVariable;
    expect(unitializedVariable).toBeUndefined();
    expect(unitializedVariable).toBeFalsy();
    expect(unitializedVariable).not.toBeNull();
    var x = null;
    expect(x).toBeNull();
  });

  it('has complex equality', function() {
    var arrayA = [1,2,3],
        arrayB = [1,2,3],
        objA = {key:'value'},
        objB = {key:'value'};

    expect(arrayA).not.toBe(arrayB, 'should not point to the same array');
    expect(arrayA).toEqual(arrayB, 'should have the same contents');

    expect(objA).not.toBe(objB, 'should not point to the same object');
    expect(objA).toEqual(objB, 'should have the same contents');
  });

  it('can read json fixtures', function() {
    var f = __fixtures__['test-basics/test-data'];
    expect(f).toEqual([1,2,3]);
  });

  it('can read txt fixtures', function() {
    var f = __html__['src/test-basics/test.txt'];
    expect(f).toBe('multi\nline\nstring\n');
  });
});

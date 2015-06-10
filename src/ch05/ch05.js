/**
 * Use the reduce method in combination with the concat method to
 * “flatten” an array of arrays into a single array that has all the
 * elements of the input arrays.
 */
function flatten(list){
  function f(result, item){
    return result.concat(item);
  }
  return list.reduce(f, []);
};

/**
 * Using the example data set from this chapter, compute the average
 * age difference between mothers and children (the age of the mother
 * when the child is born). You can use the average function defined
 * earlier in this chapter.
 *
 * Note that not all the mothers mentioned in the data are themselves
 * present in the array. The byName object, which makes it easy to
 * find a person’s object from their name, might be useful here.
 */

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function averageMotherChildAgeDifference(ancestry, byName) {
  function hasAMother(child) {
    return child.mother != null && byName[child.mother];
  }
  function momsAgeAtBirth(child) {
    return child.born - byName[child.mother].born;
  }
  return average(ancestry.filter(hasAMother).map(momsAgeAtBirth));
}

/**
 * When we looked up all the people in our data set that lived more
 * than 90 years, only the latest generation in the data came
 * out. Let’s take a closer look at that phenomenon.
 *
 * Compute and output the average age of the people in the ancestry
 * data set per century. A person is assigned to a century by taking
 * their year of death, dividing it by 100, and rounding it up, as in
 * Math.ceil(person.died / 100).
 *
 */
function averageAgeByCentury(ancestry) {
  function deathCentury(person) {
    return Math.ceil(person.died / 100);
  }
  function ageOfDeath(person) {
    return person.died - person.born;
  }
  var pplByCentury = groupBy(ancestry, deathCentury);
  for(var k in pplByCentury){
    pplByCentury[k] = average(pplByCentury[k].map(ageOfDeath));
  }
  return pplByCentury;
}

/**
 * For bonus points, write a function groupBy that abstracts the
 * grouping operation. It should accept as arguments an array and a
 * function that computes the group for an element in the array and
 * returns an object that maps group names to arrays of group members.
 */
function groupBy(list, key) {

  function f(result, item){
    if(result[item.key] === undefined) result[item.key] = [];
    result[item.key].push(item.value);
    return result;
  }

  return list
    .map(function(item) {
      return {key: key(item), value: item};
    })
    .reduce(f, {});
}

/**
 * Write two functions, every and some, that behave like these
 * methods, except that they take the array as their first argument
 * rather than being a method.
 */

function some(list, test){
  // quit as soon as one is true
  if(list.length === 0) return false;
  return test(list[0]) || some(list.slice(1), test);
}

function every(list, test) {
  // quit as soon as one is false
  // every item is x == no items that aren't x
  return !some(list, function(item) { return !test(item); });
}

function arrayToList(array) {
  if(array.length === 0) return null;
  return prepend(array[0], arrayToList(array.slice(1)));
}

function listToArray(list) {
  if(list === null) return [];

  return [list.value].concat(listToArray(list.rest));
}

function prepend(car, cdr) { return {value: car, rest: cdr}; }

function nth(list, idx) {
  if(idx === 0) return list.value;
  if(list.rest === null) throw 'index out of range';
  return nth(list.rest, idx - 1);
}

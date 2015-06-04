function deepEqual(a, b) {
  // same type + value
  if(a === b) return true;
  // one is null
  if(a === null || b === null) return false;
  // recurse through objects
  if (typeof(a) === 'object' && typeof(b) === 'object'){
    return objectEqual(a,b) && objectEqual(b, a);
  }
  // must just be different values
  return false;
}

function objectEqual(a, b){
  for(k in a){
    if(!deepEqual(a[k], b[k])) return false;
  }
  return true;
}

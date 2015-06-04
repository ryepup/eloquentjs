function reverseArray(array){
  if(array.length == 0) return [];

  return reverseArray(array.slice(1)).concat([array[0]]);
}

function reverseArrayInPlace(array){
  var halfway = Math.floor(array.length/2);
  for(var i = 0; i < halfway; i++){
    var tailIdx = array.length - 1 - i,
        head = array[i];
    array[i] = array[tailIdx];
    array[tailIdx] = head;
  }
}

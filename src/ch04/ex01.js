function range(start, end, step){
  if(step === undefined) step = 1;
  if(step === 0
     || !start || !end
     || (step < 0 && start < end)
     || (step > 0 && start > end))
    throw 'cannot create this range';

  var result = [start];
  try{
    return result.concat(range(start + step, end, step));
  }catch(e){
    return result;
  }
}

function sum(array){
  if(!array) return 0;
  if(!Array.isArray(array)) throw 'only works for arrays';
  if(array.length === 0) return 0;

  return array[0] + sum(array.slice(1));
}

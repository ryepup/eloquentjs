/**
 * Write a function countBs that takes a string as its only argument
 * and returns a number that indicates how many uppercase “B”
 * characters are in the string.
 */

function countBs(input){
  return countChar(input, 'B');
}

/**
 * Next, write a function called countChar that behaves like countBs,
 * except it takes a second argument that indicates the character that
 * is to be counted (rather than counting only uppercase “B”
 * characters). Rewrite countBs to make use of this new function.
 */

function countChar(input, char){
  var count = 0;
  for(var i = 0; i < input.length; i++){
    if(input[i] === char) count++;
  }
  return count;
}

/**
 * Write a loop that makes seven calls to console.log to output the
 * following triangle
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */
function ch02ex01(){
  for(var i = 0, msg = '#'; i < 7; i++, msg += '#'){
    console.log(msg);
  }
}

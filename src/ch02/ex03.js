function ch02ex03a() {
  return ch02ex03b(8);
}

function ch02ex03b(size) {
  var result = '', chars = ' #';
  for(var i = 0; i < size; i++){
    var offset = i % 2;
    for(var j = 0; j < size; j++){
      result += chars[(offset + j)%2];
    }
    result += '\n';
  }
  return result;
}

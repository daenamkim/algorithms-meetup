function replaceWords(str) {
  var hash = {
     'O': 0,
     'D': 0,
     'I': 1,
     'l': 1,
     'Z': 2,
     'E': 3,
     'h': 4,
     'A': 4,
     'S': 5,
     'b': 6,
     'G': 6,
     'T': 7,
     'L': 7,
     'j': 7,
     'B': 8,
     'P': 9,
  };

  var result = '';
  for (var item of str) {
    result += hash[item] !== undefined ? hash[item] : item;
  }

  return result;
}

console.log(replaceWords('ELITE'));
console.log(replaceWords('ode Chrysalis'));
console.log(replaceWords('ZEHITOMO'));

function substring(haystack, needle) {
  var indices = [];
  for (var i = 0; i <= haystack.length - needle.length; i++) {
    var found = true;
    // TODO: index j of FOR IN is STRING! what?
    // for (var j in needle) {
    for (var j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        found = false;
        break;
      }
    }

    if (found) {
      indices.push(i);
    }
  }

  console.log(indices);
}

substring('abcdabcd', 'cd');
substring('abcccdabcdccd', 'cc');


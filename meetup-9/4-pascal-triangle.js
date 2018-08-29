function pascalTriangle(endIndex, curIndex, prevRow) {
  prevRow = prevRow === undefined ? [] : prevRow;
  curIndex = curIndex === undefined ? 0 : curIndex;

  var curRow = [];
  for (var i = 0; i <= curIndex; i++) {
    var left = isNaN(prevRow[i - 1]) ? 0 : prevRow[i - 1];
    var right = isNaN(prevRow[i]) ? 0 : prevRow[i];
    var value = left < 1 && right < 1 ? 1 : left + right;
    curRow.push(value);
  }

  if (curIndex + 1 > endIndex) {
    console.log(endIndex + ' --> [' + curRow.join(', ') + ']');
    return;
  }

  pascalTriangle(endIndex, curIndex + 1, curRow);
}

pascalTriangle(0);
pascalTriangle(1);
pascalTriangle(2);
pascalTriangle(8);

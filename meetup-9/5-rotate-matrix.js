function rotateMatrix(matrixSrc) {
  var row = matrixSrc.length;
  var col = matrixSrc[0].length;
  // 90 degree in clock wise matrix.
  // TODO: Below doesn't work. why?
  // var matrixRot = Array(col).fill(Array(row).fill(0));
  var matrixRot = [];
  for (var i = 0; i < col; i++) {
    matrixRot.push(Array(row).fill(0));
  }
  console.log('\n=====================');
  console.log(matrixSrc.join('\n'));

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      matrixRot[j][row - i - 1] = matrixSrc[i][j];
    //   console.log(i, j, row - i - 1, matrixSrc[i][j]);
    //   console.log(matrixRot[j][row - i - 1]);
    }
  }

  console.log('---------------------');
  console.log(matrixRot.join('\n'));
}


var input1 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J']
];

var input2 = [
  [1, 2],
  [3, 4]
];

var input3 = [
    [1, 2, 3],
    [4, 5, 6]
  ];

rotateMatrix(input1);
rotateMatrix(input2);
rotateMatrix(input3);

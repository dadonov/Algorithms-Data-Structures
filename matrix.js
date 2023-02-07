const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 5, 9, 0],
  [2, 6, 9, 0],
];

function logMatrixElements(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`Item at {${i} ${j}} is ${matrix[i][j]}`);
    }
  }
}

function showMatrix(matrix) {
  console.log("\nShow matrix:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

function showRowSum(matrix) {
  let sumMatrix = [];
  let sum;
  for (let i = 0; i < matrix.length; i++) {
    sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    sumMatrix.push(sum);
  }
  console.log(`Sum of numbers in each row is ${sumMatrix}`);
}

function showColumnsWithZero(matrix) {
  let columnsWithZero = [];
  let columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        columnsWithZero.push(i);
        break;
      }
    }
  }
  return columnsWithZero;
}

function snakeBypass(matrix) {
  console.log("\nSnake bypass");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIndex = i % 2 === 0 ? j : matrix[i].length - 1 - j;
      console.log(matrix[i][columnIndex]);
    }
  }
}

function showMainDiag(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}

function showSideDiag(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - (i + 1)]);
  }
}

function showBottomTriangle(matrix) {
  let row;
  for (let i = 0; i < matrix.length; i++) {
    row = [];
    for (let j = 0; j <= i; j++) {
      row.push(matrix[i][j]);
    }
    console.log(row.join(" "));
  }
}

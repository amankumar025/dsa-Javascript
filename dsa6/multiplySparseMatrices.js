function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    
    // Initialize the result matrix with zeros
    const result = Array.from({ length: m }, () => Array(n).fill(0));
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          if (mat1[i][x] !== 0 && mat2[x][j] !== 0) {
            result[i][j] += mat1[i][x] * mat2[x][j];
          }
        }
      }
    }
  
    return result;
  }
  const mat1 = [
    [1, 0, 0],
    [-1, 0, 3]
  ];
  
  const mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
  ];
  
  console.log(multiplySparseMatrices(mat1, mat2));
  // Output: [[7, 0, 0], [-7, 0, 3]]
   
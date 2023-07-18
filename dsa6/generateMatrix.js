function generateMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1; // Start with number 1
    let top = 0; // Top row index
    let bottom = n - 1; // Bottom row index
    let left = 0; // Left column index
    let right = n - 1; // Right column index
  
    while (num <= n * n) {
      // Fill the top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num;
        num++;
      }
      top++;
  
      // Fill the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num;
        num++;
      }
      right--;
  
      // Fill the bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num;
        num++;
      }
      bottom--;
  
      // Fill the left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num;
        num++;
      }
      left++;
    }
  
    return matrix;
  }
  const n = 3;
  console.log(generateMatrix(n));
  // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
   
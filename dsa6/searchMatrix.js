function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midElement = matrix[Math.floor(mid / n)][mid % n];
  
      if (midElement === target) {
        return true;
      } else if (midElement < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  const target = 3;
  
  console.log(searchMatrix(matrix, target)); // Output: true
   
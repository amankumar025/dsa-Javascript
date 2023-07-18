function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return []; // If the length is odd, it can't be doubled
    }
  
    const original = [];
    const countMap = new Map();
  
    // Count the occurrences of each element in the changed array
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Sort the changed array in ascending order
    changed.sort((a, b) => a - b);
  
    // Traverse the sorted changed array to find the original elements
    for (const num of changed) {
      const doubleNum = num * 2;
  
      if (countMap.get(num) > 0 && countMap.get(doubleNum) > 0) {
        original.push(num);
        countMap.set(num, countMap.get(num) - 1);
        countMap.set(doubleNum, countMap.get(doubleNum) - 1);
      }
    }
  
    // If all elements are successfully paired, return the original array
    return original.length === changed.length / 2 ? original : [];
  }
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed)); // Output: [1, 3, 4]
    
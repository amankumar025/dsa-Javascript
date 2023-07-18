function twoSum(numbers, target) {
    let index1 = 0;
    let index2 = numbers.length - 1;
  
    while (index1 < index2) {
      const currentSum = numbers[index1] + numbers[index2];
  
      if (currentSum === target) {
        return [index1 + 1, index2 + 1]; // Adding one to make it 1-indexed
      } else if (currentSum < target) {
        index1++;
      } else {
        index2--;
      }
    }
  
    // If no solution is found, we can return an empty array or null as desired.
    return [];
  }
  const numbers = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(numbers, target);
  console.log(result); // Output: [1, 2]
  
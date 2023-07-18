function findMaxLength(nums) {
    const n = nums.length;
    const map = new Map(); // Key: running sum, Value: first index where that sum is reached
    let maxLength = 0;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      // Treat 0s as -1 and 1s as 1
      sum += nums[i] === 0 ? -1 : 1;
  
      if (sum === 0) {
        // If sum is 0, the entire subarray starting from index 0 to i is a valid subarray
        maxLength = i + 1;
      } else if (map.has(sum)) {
        // If the same sum has been seen before, the subarray between the current index and the index where the sum was seen is a valid subarray
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        // If the sum hasn't been seen before, add it to the map with its index
        map.set(sum, i);
      }
    }
  
    return maxLength;
  }
  const nums = [0, 1];
  console.log(findMaxLength(nums)); // Output: 2
   
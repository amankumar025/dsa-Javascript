function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[mid + 1]) {
        // The peak is on the right side, move right
        left = mid + 1;
      } else {
        // The peak is on the left side, move left
        right = mid;
      }
    }
  
    // At the end of the loop, left and right will be equal, pointing to the peak element
    return left;
  }
  const nums = [1, 2, 3, 1];
  const peakIndex = findPeakElement(nums);
  console.log(peakIndex); 
  
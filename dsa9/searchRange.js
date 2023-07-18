function searchRange(nums, target) {
    const leftIndex = findLeftMostIndex(nums, target);
    const rightIndex = findRightMostIndex(nums, target);
    return [leftIndex, rightIndex];
  }
  
  function findLeftMostIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  
  function findRightMostIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return result;
  }
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const result = searchRange(nums, target);
  console.log(result); // Output: [3, 4]
  
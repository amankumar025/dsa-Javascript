function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;
  
    for (const num of nums) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else if (candidate === num) {
        count++;
      } else {
        count--;
      }
    }
  
    // After the loop, the candidate is the potential majority element
    // Now, we need to verify if it appears more than n/2 times
    count = 0;
    for (const num of nums) {
      if (num === candidate) {
        count++;
      }
    }
  
    if (count > nums.length / 2) {
      return candidate;
    } else {
      return null; // No majority element found
    }
  }
  
  const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  console.log(findMajorityElement(nums)); 
  
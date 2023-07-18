function validMountainArray(arr) {
    const n = arr.length;
    
    // Step 1: Check if the length of the array is at least 3
    if (n < 3) {
      return false;
    }
    
    let i = 0;
    
    // Step 2: Traverse the array to find the index where the increasing order stops
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
    
    // Step 3: Check if the array is strictly increasing or decreasing
    if (i === 0 || i === n - 1) {
      return false;
    }
    
    // Step 4: Check if elements after the increasing sequence are strictly decreasing
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
    
    // Step 5: If we have reached the end of the array, it is a valid mountain array
    return i === n - 1;
  }
  const arr = [2, 1];
  console.log(validMountainArray(arr)); // Output: false
    
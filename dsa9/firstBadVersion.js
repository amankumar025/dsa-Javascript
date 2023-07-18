function firstBadVersion(n) {
    let left = 1;
    let right = n;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage (this function is provided, but its implementation is omitted as it's just for demonstration)
  function isBadVersion(version) {
    // Your implementation of the isBadVersion function goes here
    // For demonstration purposes, I'm using a hardcoded bad version value
    const badVersion = 4;
    return version >= badVersion;
  }
  const n = 5;
  console.log(firstBadVersion(n)); 
  
function reconstructPermutation(s) {
    const n = s.length;
    const result = [];
    let smallest = 0;
    let largest = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        result.push(smallest);
        smallest++;
      } else {
        result.push(largest);
        largest--;
      }
    }
  
    // Add the last remaining element to the result
    result.push(smallest);
  
    return result;
  }
const s = "IDID";
const perm = reconstructPermutation(s);
console.log(perm); // Output: [0, 4, 1, 3, 2] 
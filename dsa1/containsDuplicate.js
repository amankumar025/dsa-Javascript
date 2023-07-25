function containsDuplicate(nums) {
    const numSet = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true; // Found a duplicate element
        }
        numSet.add(num);
    }

    return false; // No duplicate element found
}
let nums = [1, 2, 3, 1];
let result = containsDuplicate(nums);
console.log(result); 

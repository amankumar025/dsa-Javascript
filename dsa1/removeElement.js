function removeElement(nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--; 
        } else {
            left++; 
        }
    }

     return left;
}


let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log(k); 
console.log(nums); 

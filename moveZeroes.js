function moveZeroes(nums) {
    let nonZeroIndex = 0;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] !== 0) {
            [nums[nonZeroIndex], nums[currentIndex]] = [nums[currentIndex], nums[nonZeroIndex]];
            nonZeroIndex++;
        }
    }
}
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); 

function twoSum(nums, target) {

    const complementMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complementMap.has(complement)) {

            return [complementMap.get(complement), i];
        } else {
        
            complementMap.set(nums[i], i);
        }
    }
    return [];
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); 

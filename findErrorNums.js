function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate, missing;

    for (const num of nums) {
        if (numSet.has(num)) {
            duplicate = num; // Found the duplicated number
        }
        numSet.add(num);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            missing = i; 
            break;
        }
    }

    return [duplicate, missing];
}


let nums = [1, 2, 2, 4];
let result = findErrorNums(nums);
console.log(result); 

function isStrobogrammatic(num) {
    const strobogrammaticDigits = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6',
    };

    let rotatedNum = '';
    for (let i = num.length - 1; i >= 0; i--) {
        const digit = num[i];
        if (!strobogrammaticDigits.hasOwnProperty(digit)) {
            return false; // If the digit is not strobogrammatic, return false
        }
        rotatedNum += strobogrammaticDigits[digit];
    }

    return num === rotatedNum;
}

console.log(isStrobogrammatic("69")); // Output: true
console.log(isStrobogrammatic("88")); // Output: true
console.log(isStrobogrammatic("818")); // Output: true
console.log(isStrobogrammatic("123")); // Output: false
console.log(isStrobogrammatic("101")); // Output: true

function plusOne(digits) {
    let n = digits.length;
    let carry = 1;

    for (let i = n - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10; 
        carry = Math.floor(sum / 10); 
        if (carry === 0) {
            break;
        }
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
}

let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result); 

function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        const sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10).toString() + result;

        i--;
        j--;
    }

    return result;
}

console.log(addStrings("11", "123")); // Output: "134"
console.log(addStrings("456", "987")); // Output: "1443"
console.log(addStrings("0", "0")); // Output: "0"

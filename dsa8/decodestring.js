function decodeString(s) {
    const stack = [];
    let currentNumber = 0;
    let currentString = '';

    for (const char of s) {
        if (!isNaN(char)) {
            // Convert the digit character to a number
            currentNumber = currentNumber * 10 + parseInt(char, 10);
        } else if (char === '[') {
            // Push the current number and string to the stack
            stack.push(currentNumber);
            stack.push(currentString);
            currentNumber = 0;
            currentString = '';
        } else if (char === ']') {
            // Pop the number and the previous string from the stack
            const prevString = stack.pop();
            const prevNumber = stack.pop();

            // Repeat the current string as many times as the previous number
            currentString = prevString + currentString.repeat(prevNumber);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}

// Test the function
const s = "3[a]2[bc]";
console.log(decodeString(s)); // Output: "aaabcbc"

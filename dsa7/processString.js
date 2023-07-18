function processString(str) {
    const stack = [];

    for (const char of str) {
        if (char === '#') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

function backspaceCompare(s, t) {
    const processedS = processString(s);
    const processedT = processString(t);

    return processedS === processedT;
}

console.log(backspaceCompare("ab#c", "ad#c")); // Output: true

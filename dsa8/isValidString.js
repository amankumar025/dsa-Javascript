function isValidString(s) {
    const stack = [];
    const n = s.length;

    // Process the string character by character
    for (let i = 0; i < n; i++) {
        const char = s[i];

        if (char === '(' || char === '*') {
            // Push left parenthesis or star to the stack
            stack.push(char);
        } else if (char === ')') {
            // Pop a matching left parenthesis or a star from the stack
            if (stack.length === 0) {
                return false; // No left parenthesis or star to match
            }

            let foundMatching = false;
            while (stack.length > 0) {
                const top = stack.pop();
                if (top === '(') {
                    foundMatching = true;
                    break;
                } else if (top === '*') {
                    foundMatching = true;
                    break;
                }
            }

            if (!foundMatching) {
                return false; // No matching left parenthesis or star found
            }
        }
    }

    // After processing the whole string, handle remaining stars and left parentheses
    let stars = 0;
    let leftParentheses = 0;

    while (stack.length > 0) {
        const top = stack.pop();
        if (top === '*') {
            stars++;
        } else if (top === '(') {
            leftParentheses++;
        }
    }

    // Check if we have enough left parentheses to match the remaining stars
    return leftParentheses >= stars;
}

// Test the function
const s = "()";
console.log(isValidString(s)); // Output: true

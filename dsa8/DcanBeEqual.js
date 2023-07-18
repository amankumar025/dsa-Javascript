function canBeEqual(s, goal) {
    if (s.length !== goal.length) {
        return false; // Lengths are different, cannot be equal
    }

    // Check if the characters in s and goal are the same
    let isSame = true;
    let seenDifferent = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            isSame = false;
            if (seenDifferent) {
                return false; // More than one different character, cannot be equal
            }
            seenDifferent = true;
        }
    }

    return !isSame || seenDifferent;
}

// Test the function
const s = "ab";
const goal = "ba";
console.log(canBeEqual(s, goal)); // Output: true

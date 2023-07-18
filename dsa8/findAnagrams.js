function findAnagrams(s, p) {
    const result = [];
    const charFrequencyMapP = new Map();
    const charFrequencyMapWindow = new Map();

    // Populate the frequency map for string 'p'
    for (const char of p) {
        charFrequencyMapP.set(char, (charFrequencyMapP.get(char) || 0) + 1);
    }

    const pLength = p.length;
    let left = 0;
    let right = 0;

    while (right < s.length) {
        // Expand the window to the right
        const charRight = s[right];
        charFrequencyMapWindow.set(charRight, (charFrequencyMapWindow.get(charRight) || 0) + 1);

        // Shrink the window from the left if the window size exceeds 'p' length
        if (right - left + 1 > pLength) {
            const charLeft = s[left];
            if (charFrequencyMapWindow.get(charLeft) === 1) {
                charFrequencyMapWindow.delete(charLeft);
            } else {
                charFrequencyMapWindow.set(charLeft, charFrequencyMapWindow.get(charLeft) - 1);
            }
            left++;
        }

        // Check if the window contains an anagram of 'p'
        if (right - left + 1 === pLength && compareMaps(charFrequencyMapWindow, charFrequencyMapP)) {
            result.push(left);
        }

        right++;
    }

    return result;
}

// Function to compare two frequency maps
function compareMaps(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {
        if (value !== map2.get(key)) {
            return false;
        }
    }

    return true;
}

// Test the function
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]

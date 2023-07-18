function minStepsToDelete(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array filled with zeros to store the length of LCS
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Calculate the LCS using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Calculate the minimum number of steps to make the strings the same
    const lcsLength = dp[m][n];
    return m + n - 2 * lcsLength;
}

// Test the function
const word1 = "sea";
const word2 = "eat";
console.log(minStepsToDelete(word1, word2)); // Output: 2

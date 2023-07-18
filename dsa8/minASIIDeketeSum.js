function minASCIIDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D array filled with zeros to store the minimum ASCII sum
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Calculate the LCS using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Calculate the sum of ASCII values of deleted characters
    let sum = 0;
    for (let i = 0; i < m; i++) {
        sum += s1.charCodeAt(i);
    }
    for (let j = 0; j < n; j++) {
        sum += s2.charCodeAt(j);
    }
    return sum - 2 * dp[m][n]; // Subtract twice the LCS sum as it has been added twice
}

// Test the function
const s1 = "sea";
const s2 = "eat";
console.log(minASCIIDeleteSum(s1, s2)); // Output: 231

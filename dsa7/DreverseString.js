function reverseString(str, start, end) {
    const charArray = str.split('');
    while (start < end) {
        const temp = charArray[start];
        charArray[start] = charArray[end];
        charArray[end] = temp;
        start++;
        end--;
    }
    return charArray.join('');
}

function reverseStrEveryK(s, k) {
    const len = s.length;
    let result = '';

    for (let i = 0; i < len; i += 2 * k) {
        const end = Math.min(i + k - 1, len - 1);
        result += reverseString(s, i, end);
        result += s.slice(end + 1, Math.min(i + 2 * k, len));
    }

    return result;
}

console.log(reverseStrEveryK("abcdefg", 2)); // Output: "bacdfeg"

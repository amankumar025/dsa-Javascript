function compress(chars) {
    let writeIndex = 0; // Position to write the compressed characters
    let readIndex = 0; // Current position while iterating through the array

    while (readIndex < chars.length) {
        let currentChar = chars[readIndex];
        let count = 0;

        // Count the consecutive repeating characters
        while (readIndex < chars.length && chars[readIndex] === currentChar) {
            readIndex++;
            count++;
        }

        // Write the compressed representation to the original array
        chars[writeIndex] = currentChar;
        writeIndex++;

        if (count > 1) {
            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex] = countStr[i];
                writeIndex++;
            }
        }
    }

    return writeIndex;
}

// Test the function
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log("New length:", newLength); // Output: 6
console.log("Compressed array:", chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]

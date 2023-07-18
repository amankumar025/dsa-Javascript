function reverseWords(s) {
    const words = s.split(' ');

    // Function to reverse a word
    const reverseWord = (word) => {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    };

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    return words.join(' ');
}

console.log(reverseWords("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"

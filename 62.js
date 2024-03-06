//Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    // Remove extra whitespace and split the sentence into words using space as delimiter
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

// Example usage:
console.log(countWords("Hello world")); // Output: 2
console.log(countWords("How are you today?")); // Output: 4

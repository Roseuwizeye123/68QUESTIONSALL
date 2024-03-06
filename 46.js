//Write a function that converts an array of strings to uppercase.
function convertToUppercase(array) {
    return array.map(str => str.toUpperCase());
}

// Example usage:
const array = ["hello", "world", "javascript"];
console.log(convertToUppercase(array)); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]

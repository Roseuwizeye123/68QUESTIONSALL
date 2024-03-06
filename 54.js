//Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeFirstLetter("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetter("capitalize the first letter of each word")); // Output: "Capitalize The First Letter Of Each Word"

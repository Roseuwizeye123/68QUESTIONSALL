function countCharacters(str) {
    // Remove spaces from the string
    const stringWithoutSpaces = str.replace(/\s/g, '');
    
    // Return the length of the string without spaces
    return stringWithoutSpaces.length;
}

// Example usage:
const string = "Hello World";
console.log("Number of characters (excluding spaces):", countCharacters(string));

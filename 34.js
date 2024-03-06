//Create a function called “stringModifier”. This function allows a user to provide a string, and then provide the position they want to modify, and a character to replace the modified one from the string. This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.
function stringModifier(str, position, replacementChar) {
    // Convert the string to an array of characters
    const chars = str.split('');

    // Check if the position is within the bounds of the string
    if (position >= 0 && position < chars.length) {
        // Replace the character at the specified position
        chars[position] = replacementChar;
        // Join the array of characters back into a string
        return chars.join('');
    } else {
        // If position is out of bounds, return the original string
        return str;
    }
}


const originalString = "example";
const modifiedString = stringModifier(originalString, 3, "X");
console.log(modifiedString); 

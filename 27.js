function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}


console.log(reverseString("hello")); 
console.log(reverseString("world")); 

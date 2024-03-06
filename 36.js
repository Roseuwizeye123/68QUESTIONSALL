//Write a function that counts the number of consonants in a string.
function countConsonants(str) {
    // Define a variable to store the count of consonants
    let consonantCount = 0;
    
    // Convert the string to lowercase to handle both uppercase and lowercase consonants
    const lowerCaseStr = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Iterate through each character of the string
    for (let char of lowerCaseStr) {
        // Check if the character is a letter and not a vowel
        if (/^[a-z]$/.test(char) && !vowels.includes(char)) {
            // If it is, increment the consonant count
            consonantCount++;
        }
    }
    
    // Return the total count of consonants
    return consonantCount;
}

// Example usage:
console.log(countConsonants("Hello World")); 
console.log(countConsonants("JavaScript")); 

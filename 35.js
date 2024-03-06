//Write a function that counts the number of vowels in a string.
function countVowels(str) {
    // Define a variable to store the count of vowels
    let vowelCount = 0;
    
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    const lowerCaseStr = str.toLowerCase();
    
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Iterate through each character of the string
    for (let char of lowerCaseStr) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // If it is, increment the vowel count
            vowelCount++;
        }
    }
    
    // Return the total count of vowels
    return vowelCount;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
console.log(countVowels("JavaScript")); // Output: 3 (a, a, i)

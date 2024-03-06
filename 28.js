function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert the string to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 

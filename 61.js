//Write a function that checks if a given string contains only digits.
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// Example usage:
console.log(containsOnlyDigits("12345")); // Output: true
console.log(containsOnlyDigits("abc123")); // Output: false

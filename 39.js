//Write a function that checks if a given value is present in an array.
function isValuePresent(array, value) {
    return array.includes(value);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(isValuePresent(array, 3)); 
console.log(isValuePresent(array, 6)); 

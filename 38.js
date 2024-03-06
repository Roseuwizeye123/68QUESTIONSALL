//Write a function that removes duplicates from an array.
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example usage:
const array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(array)); 

//a
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log("Original array:", someNumbers);
console.log("Sorted array:", sortArrayAscending(someNumbers));

//b
function modifyArray(arr) {
    const sortedArray = sortArrayAscending(arr);
    const firstThree = sortedArray.slice(0, 3);
    const lastThree = sortedArray.slice(-3);
    return lastThree.concat(sortedArray, firstThree);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
console.log("Modified array:", modifyArray(someNumbers));

//c
function displayFirstThree(arr) {
    return arr.slice(0, 3);
}

// Example usage:
var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
const sortedArray = sortArrayAscending(someNumbers);
console.log("First three numbers from the sorted array:", displayFirstThree(sortedArray));




// //Loops on Arrays:
// a.    Array Sum:
// Write a function that calculates the sum of all elements in an array.
function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Example usage:
console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15

// b.    Even Numbers:
// Create a program that prints all even numbers from an array.
function printEvenNumbers(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

// Example usage:
printEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: 2, 4, 6

// c.    Array Reverse:
// Implement a function to reverse the elements of an array.
function reverseArray(arr) {
    return arr.reverse();
}

// Example usage:
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// d.    Array Filter:
// Write a program that filters out all elements less than 10 from an array.
function filterLessThan10(arr) {
    return arr.filter(num => num < 10);
}

// Example usage:
console.log(filterLessThan10([8, 15, 3, 12, 6])); // Output: [8, 3, 6]

// e.    Array Average:
// Calculate and print the average of elements in an array.
function arrayAverage(arr) {
    const sum = arraySum(arr);
    return sum / arr.length;
}

// Example usage:
console.log(arrayAverage([1, 2, 3, 4, 5])); // Output: 3

// f.    Array Search:
// Implement a function that searches for a specific element in an array and returns its index.
function searchElement(arr, target) {
    return arr.indexOf(target);
}

// Example usage:
console.log(searchElement([10, 20, 30, 40, 50], 30)); // Output: 2

// g.    Duplicate Elements:
// Write a program to find and print duplicate elements in an array.
function findDuplicates(arr) {
    const duplicates = [];
    arr.forEach((num, index) => {
        if (arr.indexOf(num, index + 1) !== -1 && duplicates.indexOf(num) === -1) {
            duplicates.push(num);
        }
    });
    return duplicates;
}

// Example usage:
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [2, 4]

// h.    Array Sorting:
// Sort an array of numbers in ascending order using any sorting algorithm.
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage:
console.log(sortArray([5, 3, 8, 2, 1])); // Output: [1, 2, 3, 5, 8]

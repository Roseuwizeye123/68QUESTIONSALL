//Write a function that finds the intersection of two arrays.
function findIntersection(array1, array2) {
    return array1.filter(element => array2.includes(element));
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findIntersection(array1, array2)); // Output: [3, 4, 5]

//Write a function that finds the median of an array of numbers.
function findMedian(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
    const length = sortedArray.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If array length is even, return the average of the two middle elements
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
        // If array length is odd, return the middle element
        return sortedArray[middleIndex];
    }
}

// Example usage:
console.log(findMedian([1, 2, 3, 4, 5])); // Output: 3
console.log(findMedian([1, 2, 3, 4, 5, 6])); // Output: 3.5

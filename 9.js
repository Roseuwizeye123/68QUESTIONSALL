function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// Example usage:
const arrange = ['a', 'b', 'c', 'd'];
const arrayTo = ['e', 'f', 'g'];

const combinedArray = combineArrays(arrange, arrayTo);
console.log(combinedArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// //  Loops on Objects:
// a.    Object Properties:
// Write a program to print all the properties of an object.
function printObjectProperties(obj) {
    for (let prop in obj) {
        console.log(prop);
    }
}

// Example usage:
const person = { name: 'John', age: 30, city: 'New York' };
printObjectProperties(person); // Output: name, age, city

// b.    Object Values:
// Create a function that prints all the values of an object.
function printObjectValues(obj) {
    for (let prop in obj) {
        console.log(obj[prop]);
    }
}

// Example usage:
printObjectValues(person); // Output: John, 30, New York

// c.    Object Key Search:
// Implement a function that searches for a specific key in an object.
function searchObjectKey(obj, key) {
    return obj.hasOwnProperty(key);
}

// Example usage:
console.log(searchObjectKey(person, 'age')); // Output: true
console.log(searchObjectKey(person, 'gender')); // Output: false

// d.    Object Manipulation:
// Write a program that modifies the values of an object based on certain conditions.
function modifyObjectValues(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2; // Double the value if it's a number
        }
    }
}

// Example usage:
console.log(person); // Before modification
modifyObjectValues(person);
console.log(person); // After modification

// e.    Object Filtering:
// Create a function that filters out key-value pairs from an object based on a condition.
function filterObject(obj, condition) {
    const filteredObj = {};
    for (let prop in obj) {
        if (condition(obj[prop])) {
            filteredObj[prop] = obj[prop];
        }
    }
    return filteredObj;
}

// Example usage:
const filteredPerson = filterObject(person, value => typeof value === 'string');
console.log(filteredPerson); // Output: { name: 'John', city: 'New York' }

// f.    Object Merging:
// Combine two objects into a single object.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// g.    Object Size:
// Write a program that calculates and prints the number of key-value pairs in an object.
function getObjectSize(obj) {
    return Object.keys(obj).length;
}

// Example usage:
console.log(getObjectSize(person)); // Output: 3 (assuming 'person' object from previous examples)

// h.    Nested Object:
// Access and print values from a nested object.
const nestedObject = {
    person: {
        name: 'Alice',
        age: 25
    }
};

// Accessing nested object values
console.log(nestedObject.person.name); // Output: Alice
console.log(nestedObject['person']['age']); // Output: 25

// i.    Object Sorting:
// Sort the keys of an object in alphabetical order.
function sortObjectKeys(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (let key of sortedKeys) {
        sortedObj[key] = obj[key];
    }
    return sortedObj;
}

// Example usage:
console.log(sortObjectKeys(person)); // Output: { age: 30, city: 'New York', name: 'John' }

// j.    Object Transformation:
// Create a function that transforms the values of an object (e.g., convert all values to uppercase).
function transformObjectValues(obj, transformFunction) {
    const transformedObj = {};
    for (let prop in obj) {
        transformedObj[prop] = transformFunction(obj[prop]);
    }
    return transformedObj;
}

// Example usage:
const uppercasePerson = transformObjectValues(person, value => value.toUpperCase());
console.log(uppercasePerson); // Output: { name: 'JOHN', age: '30', city: 'NEW YORK' }

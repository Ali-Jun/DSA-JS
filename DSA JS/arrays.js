/*Arrays in JavaScript:

An array is a data structure used to store multiple values in a single variable.
In JavaScript, an array is an ordered collection of values, and each value has an index.

JavaScript arrays use zero-based indexing, so the first element is at index 0.

Example:
*/

const numbers = [10, 20, 30, 40];

console.log("Array:", numbers);
console.log("First element:", numbers[0]); // 10
console.log("Second element:", numbers[1]); // 20

/*
Array Operations:

1. Access
Access means getting an element using its index.
Time Complexity: O(1)
*/

console.log("Access index 2:", numbers[2]); // 30

/*
2. Update
Update means changing the value at a specific index.
Time Complexity: O(1)
*/

numbers[1] = 50;
console.log("After update:", numbers); // [10, 50, 30, 40]

/*
3. Add at the end
push() adds an element at the end of the array.
Time Complexity: O(1) average
*/

numbers.push(60);
console.log("After push:", numbers); // [10, 50, 30, 40, 60]

/*
4. Remove from the end
pop() removes the last element from the array.
Time Complexity: O(1)
*/

numbers.pop();
console.log("After pop:", numbers); // [10, 50, 30, 40]

/*
5. Add at the beginning
unshift() adds an element at the beginning.
Time Complexity: O(n)
*/

numbers.unshift(5);
console.log("After unshift:", numbers); // [5, 10, 50, 30, 40]

/*
6. Remove from the beginning
shift() removes the first element.
Time Complexity: O(n)
*/

numbers.shift();
console.log("After shift:", numbers); // [10, 50, 30, 40]

/*
7. Search
includes() checks if a value exists in the array.
indexOf() returns the index of a value.
Time Complexity: O(n)
*/

console.log("Includes 30:", numbers.includes(30)); // true
console.log("Index of 40:", numbers.indexOf(40)); // 3

/*
8. Loop through an array
Looping means visiting each element one by one.
Time Complexity: O(n)
*/

console.log("Loop through array:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/*
9. Insert or remove in the middle
splice() can add or remove elements.
Time Complexity: O(n)
*/

numbers.splice(2, 0, 25);
console.log("After inserting 25 at index 2:", numbers);

numbers.splice(2, 1);
console.log("After removing item at index 2:", numbers);

/*
10. Copy part of an array
slice() copies part of an array without changing the original.
Time Complexity: O(k), where k is the number of copied elements.
*/

const copiedPart = numbers.slice(1, 3);
console.log("Copied part:", copiedPart);
console.log("Original array:", numbers);

/*
Summary:

Arrays are useful for storing lists of values.
In JavaScript, arrays are dynamic, ordered, and accessed using indexes.
Common array operations include access, update, add, remove, search, loop, splice, and slice.
*/
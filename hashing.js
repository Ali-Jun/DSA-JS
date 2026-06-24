/*
  Hashing Concepts and Types

  Definition:
  Hashing is a technique used to convert data into a fixed-size value
  called a hash value, hash code, or digest.

  A hash function takes input such as a string, number, or file and
  produces a hash value.

  Hashing is used for fast searching, storing data, checking duplicates,
  verifying files, and securing passwords.
*/


// 1. Division Method
// Formula: hash(key) = key % tableSize

function divisionHash(key, tableSize) {
  return key % tableSize;
}

console.log("Division Hash:", divisionHash(27, 10)); // 7


// 2. Multiplication Method
// The key is multiplied by a constant between 0 and 1.

function multiplicationHash(key, tableSize) {
  const A = 0.618;
  return Math.floor(tableSize * ((key * A) % 1));
}

console.log("Multiplication Hash:", multiplicationHash(27, 10));


// 3. Mid-Square Method
// The key is squared, and the middle digit is used as the hash value.

function midSquareHash(key, tableSize) {
  const square = key * key;
  const str = square.toString();
  const middle = Math.floor(str.length / 2);

  return Number(str[middle]) % tableSize;
}

console.log("Mid-Square Hash:", midSquareHash(25, 10)); // 2


// 4. Folding Method
// The key is divided into parts, and the parts are added together.

function foldingHash(key, tableSize) {
  const str = key.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i += 2) {
    sum += Number(str.slice(i, i + 2));
  }

  return sum % tableSize;
}

console.log("Folding Hash:", foldingHash(123456, 10)); // 2


// 5. Cryptographic Hashing
// Used for security, password storage, file verification, and digital signatures.
// Example using Node.js crypto module.

const crypto = require("crypto");

const cryptoHash = crypto
  .createHash("sha256")
  .update("hello")
  .digest("hex");

console.log("Cryptographic Hash SHA-256:", cryptoHash);


/*
  Conclusion:
  Hashing converts data into a fixed-size hash value.
  Common hashing types include:
  1. Division Method
  2. Multiplication Method
  3. Mid-Square Method
  4. Folding Method
  5. Cryptographic Hashing
*/
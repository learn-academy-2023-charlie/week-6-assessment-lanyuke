// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



  // describe("pplJob", () => {
  //   it("returns an array with a sentence about each person with their name capitalized.", () => {
  //     expect(pplJob(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  //   })
  // })

  // good fail:
  // FAIL  ./code-challenges.test.js
  // pplJob
  //   ✕ returns an array with a sentence about each person with their name capitalized. (1 ms)

  // ● pplJob › returns an array with a sentence about each person with their name capitalized.

  //   ReferenceError: pplJob is not defined

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo coding:
// input:arr
// output:returns an array with a sentence about each person with their name capitalized.
// process: create a function name: pplJob
// create a new variable newArr = []
// use for loop starting at 0, ending is smaller then arr.length iteration is i++

// then make new variable capFirst use .split(' ') with arr.name at 0 index and mention 0 index again ref first letter in frist name and use .charAt with 0 index then use .toUppercase() to capitalize first letter of first name 
// then adding remaining word using arr[i].name.split(' ')[0].slice(1)

// create a new variable capLast use .split(' ') with arr.name at 1 index and mention 0 index ref first letter in last name and use .charAt with 1 index then use .toUppercase() to capitalize first letter of last name 
// then adding remaining word using arr[i].name.split(' ')[1].slice(1)

// then return using .push on newArr with capFirst + capLast and arr.occupation
// pass test

  // const pplJob = (arr) => {
  //   const newArr = []
  //   for (let i = 0; i < arr.length; i++) {
  //     const capFirst = arr[i].name.split(' ')[0][0].toUpperCase() + arr[i].name.split(' ')[0].slice(1)
  //     const capLast = arr[i].name.split(' ')[1][0].toUpperCase() + arr[i].name.split(' ')[1].slice(1)
  //     newArr.push(`${capFirst} ${capLast} is ${arr[i].occupation}.`)
  //   }
  //   return newArr
  // }

  // pass test:
  // PASS  ./code-challenges.test.js
  // pplJob
  //   ✓ returns an array with a sentence about each person with their name capitalized. (7 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

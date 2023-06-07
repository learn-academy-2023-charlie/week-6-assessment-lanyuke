// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { fail } = require("yargs")

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
  // then make new variable capFirst:
      //  use .split(' ') with a space on arr.name to sperate first and last name and use [0] index to get first name and mention [0] index again ref first letter in frist name and use .charAt with 0 index then use .toUppercase() to capitalize the letter 
      // then adding remaining word by using .slice on first name to remove the first letter
  // create a new variable capLast:
      //  using same logic as first name but mention [1] index to get last name then mention [0] again to get first letter and capitalize it
      // then adding remaining word of last name using same logic with .slice to remove first letter
  // then return using .push on newArr with capFirst + capLast and arr[i].occupation in a sentence.
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

  // describe("reMain3", () => {
  //   it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
  //     expect(reMain3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  //     expect(reMain3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  //   })
  // })

  // good fail:
  // FAIL  ./code-challenges.test.js
  // reMain3
  //   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)

  // ● reMain3 › returns an array of only the REMAINDERS of the numbers when divided by 3.

  //   ReferenceError: reMain3 is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

  // Pseudo coding:
  // input:arr
  // output: returns an array of only the REMAINDERS of the numbers when divided by 3.
  // process: create a function name: reMain3
  // create a variable: filArr
  // in filArr use .filter method on arr, declear filter using value, and use typeof(value) method is equal to "number" to get value thats a number.
  // then return .map method on filArr, declear map using value, and have the value % 3
  // pass test

  // const reMain3 = (arr) => {
  //   const filArr = arr.filter((value) => typeof(value) === "number")
  //   return filArr.map((value) => value % 3)
  // }

  // pass test:
  // PASS  ./code-challenges.test.js
  // reMain3
  //   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3. (2 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

  describe("sumCubed", () => {
    it("returns the sum of all the numbers cubed.", () => {
      expect(sumCubed(cubeAndSum1)).toEqual(99)
      expect(sumCubed(cubeAndSum2)).toEqual(1125)
    })
  })

  // good fail:
  // FAIL  ./code-challenges.test.js
  // sumCubed
  //   ✕ returns the sum of all the numbers cubed. (1 ms)

  // ● sumCubed › returns the sum of all the numbers cubed.

  //   ReferenceError: sumCubed is not defined


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

  // Pseudo coding:
  // input:arr
  // output: returns the sum of all the numbers cubed.
  // process: create a function name: sumCubed
  // create a variable newArr:
  // use .map method on arr, declaer using value, have value  * it self 2 times to get new arr with all number cubed value
  // create another variable but use let to allow it change, sum = 0
  // use for loop, starting at 0, ending at arr.length, iteration i++
  // using addtion assignmet with sum and newArr[i]
  // return sum
  // pass test

  const sumCubed = (arr) => {
    const newArr = arr.map((value) => value * value * value)
    let sum = 0
    for (let i = 0; i < arr.length; i++ ){
    sum += newArr[i]
    }
    return sum
  }

  // pass test
  // PASS  ./code-challenges.test.js
  // sumCubed
  //   ✓ returns the sum of all the numbers cubed. (2 ms)

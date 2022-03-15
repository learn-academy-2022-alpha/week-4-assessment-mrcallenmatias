// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("firstRemoveThenShuffle", () => {
    it("takes in an array, then removes the first item from the array and shuffles the remaining content.", () => {

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

      expect(firstRemoveThenShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(firstRemoveThenShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })
// b) Create the function that makes the test pass.

// make a function that takes in an array
// use .shift method to remove the first index inside the array
// make a new variable of array to store the shuffle array
// make a variable that takes in a random number and use that variable to get the index of the array, add it to the new variable then delete that array by using splice method.
// repeat the process by using while loop until the array is empty
// return a shuffle array without the first index
const firstRemoveThenShuffle =(arr) => {
  arr.shift()
  let length = arr.length
  let randomColors = []
  let randomNum = 0
  
  while (length--){
      randomNum = Math.floor(Math.random() * (length + 1))
      randomColors.push(arr[randomNum])
      arr.splice(randomNum, 1)
  }

  return randomColors
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
  it("returns an array of the minimum and maximum numbers in that order", () => {
    
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
     
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})


// b) Create the function that makes the test pass.

// create a function that takes in an aray of numbers
// create a min and max variable and assign it to the first index on the array
// use while loop to go through each index in the array
// use the method max to get the highest number and min to get the minimum number of each array/
// store them in their new variable, then add the min and max variable to a new array
// return an array of the minimum and maximum numbers in that order
const minMax = (arr) => {
  minMaxArray = []
  maxNum = arr[0]
  minNum = arr[0]
  let i = 1
  while (true) {
      maxNum = Math.max(maxNum, arr[i])
      minNum = Math.min(minNum, arr[i])
      i++
      if (i == arr.length) {
          break
      }
  }
  minMaxArray.push(minNum, maxNum)
  
  return minMaxArray
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combineArr", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
     
    expect(combineArr(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})


// b) Create the function that makes the test pass.

// create a function with two parameters
// combine the first array and the second array by concatinating it
// make a new variable to store the update array
// make a loop and a statement that adds the number to the new variable array if it is not in that new variable yet
// return the array with no duplicate values on it
const combineArr = (arr1, arr2) => {
  let comArr = arr1.concat(arr2)
  let finalArry = []
  for (let i = 0; i < comArr.length; i++) {
      if (!finalArry.includes(comArr[i])) {
          finalArry = [...finalArry, comArr[i]]
      }
  }
  return finalArry
}

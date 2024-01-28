// Acc Pattern

// Iterative Native Array Methods

// For each of the following exercises, 
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5] 

 function lengthOfStrings(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(arr[i].length);
        }
        return newArr;




    const lengths = []; // accumulator

    for (let str of arr) { // loop
      lengths.push(str.length) // transforms the accumulator
    }
    return lengths; // return the accumulator
  }
  



// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function longStrings(arr) {
    const result = []; // accumulator
  
    for (let str of arr) { // loop 
      if (str.length > 5) { // finding the length thats greater thank 5 
        result.push(str); // pushing the string thats greater than 5
      }
    }
    return longStrings; // return the accumulator 
  }


// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

// 4. Write a function that takes an array of numbers and returns the sum of all even numebrs

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)
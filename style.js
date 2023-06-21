/*
Write a function frequencyCounter, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the dsecond array. The frequency values must be the same length.
*/

// Solution Using Nested Loops
function frequencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {   // the length of arr1 isnt the same as the length of arr2 then...
        return false;
    }
    for (let i = 0; i < arr1.length; i++) { // loops 1 less than of the length of length
        let index = arr2.indexOf(arr1[i] ** 2);  // index = index of arr2 for the first value is provided by arr1 ** 2. So if arr[i] is 5 and 5**2 = 25. index = the index of the value of 25 located in arr2
        if (index === -1) { // -1 is returned (would be equal to index) of arr[i] ** 2 wasnt found in arr2, then...
            return false;
        }
        arr2.splice(index, 1)   // removes the index 
    }
    return true;
}

console.log(frequencyCounter([2,3,4], [16,9,4])) // true
console.log(frequencyCounter([4,3,2], [9,16,4])) // true
console.log(frequencyCounter([1,2,2], [4,1,1])) // false
console.log(frequencyCounter([1,2],[1])) // false

// Above we see just 1 loop, but we are using indexOf so it will be big O of O(n**2) time complexity. We can solve this problem in big O(n) using javascript object.

// Solution Using Frequency Counter Pattern
    //The Pseudocode for this would look something like:
        /*
            1. Create a func called same that accepts two arrays.
            2. If the length of the two arrays is not the same, return false.
            3. Create 2 empty objects
            4. Loop over each array indiviually and create a frequency counter in the 2 empty objects
            5. Create a third loop to compare both frequency counter objects
            6. Return true if every value in the 1st array has its corresponding value ** 2 in the 2nd array, otherwise return false
        */
const frequencyCounter2 = (arr1, arr2) => {                 // step 1.
    if (arr1.length !== arr2.length){                       // step 2.
        return false;
    }

    let object1 = {};                                       // step 3.
    let object2 = {};                                       // step 3. 

    arr1.forEach(element => {                               // step 4. forEach - executes a provided function once for each array element
        object1[element] = (object1[element] || 0) + 1;     // This is where we are actually adding each character to the frequency counter object and initially setting the value to 0+1. If our character key already exists then its value is added to 1 (incremented). We do the same for our second string.
    })

    arr2.forEach(element => {                               // step 4. 
        object2[element] = (object2[element] || 0) + 1;     // The frequency counter. Your creating key value pairs. the key is the element. and the value is how many times it's ran. NOTE: they will be arranged in ordered from highest to lowest within the above arrays.
    })

    for (let key in object1){                               // step 5. you will get false if the key values dont match. If there are '2': 2 in objec†1, there should be '4': 2 in object2. Otherwise, it will be false, instead of true
        if (!object2[key ** 2]) {
            return false;
        }
        if (object2[key ** 2] !== object1[key]) {
            return false;
        }
    }
    return true;                                            // step 6.
}

console.log(frequencyCounter2([2,3,4], [16,9,4])) // true   object1 = { '2': 1, '3': 1, '4': 1 } ; object2 = { '4': 1, '9': 1, '16': 1 }
console.log(frequencyCounter2([4,3,2], [9,16,4])) // true   object1 = { '2': 1, '3': 1, '4': 1 } ; object2 = { '4': 1, '9': 1, '16': 1 }
console.log(frequencyCounter2([1,2,2], [4,1,1])) // false   object1 = { '1': 1, '2': 2 } ; object2 = { '1': 2, '4': 1 }
console.log(frequencyCounter2([1,2],[1])) // false          didnt make it that far, was immediately elimated because of length

// Another example of Using Objects to Count Frequency
    // determine if two words are anagrams of each other. an anagram is a word or phrase formed by rearranging the letters of another word or phrase
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) {  // checks if the lengths of each str is the same, if not: returns false
          return false;
        }
      
        let freqCounter1 = {};  // declaring our frequency counting objects
        let freqCounter2 = {};  // declaring our frequency counting objects
      
        for (let char of str1) {    // for of - a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList, ect
          freqCounter1[char] = (freqCounter1[char] || 0) + 1; // creates a key:value pair. If the pair doesnt exist it does 0+1 to the pair. If that pair exist already, it adds 1 to its present value in that pair.
        }
        for (let char of str2) {
          freqCounter2[char] = (freqCounter2[char] || 0) + 1;   // creates a key:value pair. If the pair doesnt exist it does 0+1 to the pair. If that pair exist already, it adds 1 to its present value in that pair.
        }
      
        for (let key in freqCounter1) { // loops through the keys in freqCounter1
          if (freqCounter1[key] !== freqCounter2[key]) {    // compare both frequency counter objects
            return false;
          }
        }
        return true;
      };

// Another example of Using Objects to Count Frequency
function same(arr1, arr2){
    if(arr1.length !== arr2.length) return false
   
    let counter1 = {}
    let counter2 = {}
    for(let i=0; i <= arr1.length; i++){
       let num = arr1[i]
       counter1[num] = (counter1[num] || 0) + 1
    }
    for(let i=0; i <= arr2.length; i++){
       let num = arr2[i]
       counter2[num] = (counter2[num] || 0) + 1
    }
     for(let i=0; i < arr1.length; i++){
          let num = arr1[i]
        if(counter1[num] !== counter2[num * num]){
            return false
        }
            return true
        }
}

// Frequecy Counter Pattern
/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/
function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }

    const freqCounter1 = {};
    const freqCounter2 = {};
    
    for (let num of arr1) {
        freqCounter1[num] = (freqCounter1[num] || 0) + 1;
    }

    for (let num of arr2) {
        freqCounter2[num] = (freqCounter2[num] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key ** 2]) { // for ex. if freqCounter1[3] = 2 and freqCounter[3 * 3] doesnt = 2, then return false.
            return false;
        }
    }

    return true
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)


// Discuss Frequency Counter Solution
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function maxChar(str){
    const strLowerCase = str.toLowerCase();
    
    let freqCounter = {};

    for (let i = 0; i < strLowerCase.length; i++){
        let letter = strLowerCase[i];
        freqCounter[letter] = (freqCounter[letter] || 0) + 1;
    }

    let largest = 0

    for (let key in freqCounter) {
        if (freqCounter[key] > largest) {
            largest = freqCounter[key]
            letter = key
        }
    }
    
    return letter;
}

console.log(maxChar("abcccccccd")) // === "c"
console.log(maxChar("apple 1231111")) // === "1
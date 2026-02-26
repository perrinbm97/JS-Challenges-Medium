/** 1.) Given two values, return the first one if
 * falsy, otherwise return the second one */

function filterFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(filterFalsy(0, 10));

/** 2.) Return the length of any given array */

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3, 5]));

/** 3.) Return the last element in an array */

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem(["dog", "cat", "cow", "pig"]));

/** 4.) Given an array, return the sum
 * of all elements */

let sum = 0;
function arrSum(arr) {
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrSum([2, 3, 5, 10]));

/** 5.) Given a number, add all numbers from 1
 * to the number given, returning the sum */

let progSum = 0;
function progressiveSum(num) {
  for (i = 1; i <= num; i++) {
    progSum += i;
  }
  return progSum;
}

console.log(progressiveSum(200));

/** 6.) Given a number in seconds, return
 * the time in mm:ss format */

function calcTime(sec) {
  let timeMin = Math.floor(sec / 60);
  let timeSec = sec % 60;
  if (timeMin.toString().length === 1) {
    timeMin = "0" + timeMin;
  }
  if (timeSec < 10) {
    timeSec = "0" + timeSec;
  }
  return timeMin + ":" + timeSec;
}

console.log(calcTime(125));

/** 7.) Given an array of numbers, return
 * the largest */

function getMax(arr) {
  let maxNum = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(getMax([5, 100, 25]));

/** 8.) Given a string, return the
 * reversed version */

function reverseString(str) {
  // let reverse = '';
  // for (i=1; i<=str.length; i++) {
  //   reverse += str[str.length-i];
  // }
  // return reverse;
  return str.split("").reverse("").join("");
}

console.log(reverseString("Incredible"));

/** 9.) Given an array, return the
 * same length array with all zeros */

function oopsAllZeros(arr) {
  // let newArr = [];
  // for (i = 0; i < arr.length; i++) {
  //   newArr[i] = 0;
  // }
  // return newArr;

  // return new Array(arr.length).fill(0);

  return arr.map((elem) => 0);
}

console.log(oopsAllZeros(["String", 100, `Zero`, 25, 0]));

/** 10.) Given array, if it is an apple
 * remove it from the array */

function filterApples(arr) {
  // let nonApples = [];
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] !== "Apple") {
  //     nonApples.push(arr[i]);
  //   }
  // }
  // return nonApples;

  return arr.filter((elem) => elem !== "Apple");
}

console.log(filterApples(["Banana", "Apple", "Orange", "Apple"]));

/** 11.) Given array, filter out falsy values
 * and only return truthy values */

function removeFalsy(arr) {
  return arr.filter((elem) => !!elem);
}

console.log(removeFalsy([null, "String", undefined, 0, 1, "False"]));

/** 12.) Given array of elements, return the same array of elements
 * in their boolean value */

function convertBoolean(arr) {
    return arr.map(elem => !!elem);
  }

console.log(convertBoolean([500, 0, "Braxton", "", []]));

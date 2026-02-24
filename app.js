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
    return timeMin + ':' + timeSec;
}

console.log(calcTime(125));

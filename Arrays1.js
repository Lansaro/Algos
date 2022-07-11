// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.
// You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]


var array1 = [5,7,2,3]
var toAdd1 = 8


// OPTION 1 (with push)
const pushFront1 = (array, value) => {
    var newArray = [value]
    for (var i=0; i<array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}
// console.log(pushFront1(array1, toAdd1))


// OPTION 2 (using spread operator)
const pushFront2 = (array, value) => {
    return [value, ...array]
}
// console.log(pushFront2(array1, toAdd1))


// OPTION 3 (shifting indexes)
const pushFront3 = (array, value) => {
    for (var i=array.length; i>=0; i--) {
        array[i] = array[i-1]
    }
    array[0] = value
    return array
}
// console.log(pushFront3(array1, toAdd1))


//------------------------------------

// Pop Front
// Given an array, remove and return the value at the beginning of the array.
// Prove the value is removed from the array by printing it.
// You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function


var array2 = [4,5,7,9]


// OPTION 1 (with shift)
const popFront1 = (array) => {
    var removed = array.shift()
    console.log(array)
    return removed
}
// console.log(popFront1(array2))


// OPTION 2 (deconstructing and building a new array)
const popFront2 = (array) => {
    var newArray = []
    for (var i=1; i<array.length; i++) {
        newArray.push(array[i])
    }
    console.log(newArray)
    return array[0]
}
// console.log(popFront2(array2))


// OPTION 3 (shifting)
const popFront3 = (array) => {
    var firstVal = array[0]
    for (var i=0; i<array.length; i++) {
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    console.log(array)
    return firstVal
}
// console.log(popFront3(array2))


//------------------------------------

// Insert At
// Given an array, index, and additional value, insert the value into array at given index.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]


var array3 = [100,200,5]
var index3 = 2
var toAdd3 = 311


// OPTION 1 (push with spread operator)
const insertAt1 = (array, index, value) => {
    var firstArray = []
    for (var i=0; i<index; i++) {
        firstArray.push(array[i])
    }
    var secondArray = []
    for (var i=index; i<array.length; i++) {
        secondArray.push(array[i])
    }
    return [...firstArray, value, ...secondArray]
}
// console.log(insertAt1(array3, index3, toAdd3))


// OPTION 2 (shifting)
const insertAt2 = (array, index, value) => {
    for (var i=array.length; i>=index; i--) {
        array[i] = array[i-1]
    }
    array[index] = value
    return array
}
// console.log(insertAt2(array3, index3, toAdd3))


//------------------------------------

// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index.
// Prove the value is removed from the array by printing it.
// Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function


var array4 = [8,20,55,44,98]
var index4 = 3


// OPTION 1 (array re-construction with push)
const removeAt1 = (array, index) => {
    var filteredArray = []
    for (var i=0; i<array.length; i++) {
        if (i !== index) {
            filteredArray.push(array[i])
        }
    }
    console.log(filteredArray)
    return array[index]
}
// console.log(removeAt1(array4, index4))


// OPTION 2 (shift)
const removeAt2 = (array, index) => {
    var removedVal = array[index]
    for (var i=index; i<array.length; i++) {
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    console.log(array)
    return removedVal
}
// console.log(removeAt2(array4, index4))


//------------------------------------

// BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array.
// If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]


var array5 = [1,2,3,4]


// OPTION 1 (pairing items by index, example 0 and 1, 2 and 3, etc.)
const swapPairs = (array) => {
    for (var i=1; i<array.length; i++) {
        if (i%2!==0) {
            var previous = array[i-1]
            array[i-1] = array[i]
            array[i] = previous
        }
    }
    return array
}
// console.log(swapPairs(array5))


//------------------------------------

// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// If you already made the Remove At function, you are welcome to use that!
// If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]


var array6 = [9,19,19,19,19,19,29]


// OPTION 1 (pushing unique items to a new array)
const removeDupes1 = (array) => {
    var newArray = []
    for (var i=0; i<array.length; i++) {
        if (newArray.includes(array[i])===false) {
            newArray.push(array[i])
        }
    }
    return newArray
}
// console.log(removeDupes1(array6))
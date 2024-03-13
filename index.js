// 1. var num = 2; //LHS

// function multiply(x) { //LHS

//     var result = x * 2; //LHS
//     return result; //RHS
// }


// var multipliedValue = multiply(num); //LHS

// console.log(multipliedValue); //RHS



// 2.function calculate(index) { //LHS
//     const data = [1, 2, 3, 4, 5];  //LHS
//     data[index] = data[index] * 2;  //LHS
//     return data; //RHS
// }

// let value = 10; //LHS
// let result = calculate(value % 4); //LHS
// result[value % result.length] = calculate(result.length - 1)[1];  //LHS

// const obj = { //LHS
//     key: 'initial', //LHS
// };

// obj['key'] = result[0].toString(); //LHS
// obj.key += ' updated'; //LHS

// function updateObject(o, k, v) { //LHS
//     o[k] = v; //LHS
// }

// updateObject(obj, 'newKey', result[2]); //LHS

// console.log(obj);  //RHS


// function fib(n){
//     return n<=1 || Math.floor(n) !== n ? n : fib(n-1) + fib(n-2)
// }
// console.log(fib(9.9));


// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sumAll(5,3,2))


// function groupByProperty(arr, property) {
//     let result = {};
//     for(let i = 0;i < arr.length;i++) {
//         let item = arr[i];
//         let value = item[property];
//         if(!result[value]) {
//             result[value] = [];
//         }
//         result[value].push(item);
//     }
//         return result;
//     }


// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 30 }
//   ];


// console.log( groupByProperty(people,"age"));

// function deepFlatten(arr) {
//     let flattenedArray = [];
//     arr.forEach(element => {
//         if(Array.isArray(element)) {
//             flattenedArray.push(...deepFlatten(element));
//         } else {
//             flattenedArray.push(element);
//         }
//     })
//     return flattenedArray;
// }

// console.log(deepFlatten([1, [2, [3, [4]], 5]]))


// Array.prototype.map = function(callback) {
//     let result = [];
//     for(let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// }

// console.log([1, 2, 3].map(x => x * 2));

// function combineUnique(arr1,arr2) {
//     let newArr = [];
//     let hashTable = {};
//     arr1.forEach(element => {
//         hashTable[element] = true;
//         newArr.push(element);
//     })

//     arr2.forEach(element => {
//         if(!hashTable[element]) {
//         hashTable[element] = true;
//         newArr.push(element);
//         }
//     })
//     return newArr;
// }

// console.log(combineUnique([1, 2, 3],[2,3,4]));

// function findLongestString(arr){
//     let longest = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if(longest.length < arr[i].length){ 
//         longest = arr[i];
//         }
//     }
//     return longest;
// }
// console.log(findLongestString(["short", "medium length", "longest string"]));

// function arrayIntersection(arr1, arr2) {
//     const hashTable = {};
//     for(let i = 0;i < arr1.length;i++) {
//         hashTable[arr1[i]] = true;
//     }
    
//     let result = [];
//     for(let i = 0;i < arr2.length;i++) {
//         if(hashTable[arr2[i]]) {
//             result.push(arr2[i]);
//             delete hashTable[arr2[i]];
//         }
// }
//     return result;
// }

// console.log(arrayIntersection([1,2,3,4],[3,4,5,6]));

// function chunckArray(array,sizeCount) {
//     let result = [];
//     let chunck = [];

//     for(let i = 0;i < array.length;i++) {
//         chunck.push(array[i]);

//         if(chunck.length === sizeCount || i === array.length - 1) {
//             result.push(chunck);
//             chunck = [];
//         }
//     }
//     return result;
// }
// console.log(chunckArray([1, 2, 3, 4, 5, 6, 7], 3));


// Array.prototype.reduceRight = function(callback,initialValue) {
//     let accumulator;
//     let startIndex;

//     if(initialValue !== undefined) {
//         accumulator = initialValue;
//         startIndex = this.length - 1;
//     } else {
//         accumulator = this[this.length - 1];
//         startIndex = this.length - 2;
//     }
//     for(let i = startIndex; i >= 0; i--) {
//         accumulator = callback(accumulator, this[i], i, this);
//     }
//     return accumulator;
// }
// console.log([1, 2, 3, 4, 5].reduceRight((acc, curr) => acc + curr));

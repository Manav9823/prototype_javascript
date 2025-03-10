const fs = require('fs')
// https://www.youtube.com/watch?v=-N9tBvlO9Bo&ab_channel=RyanSchaul

//Example 1

// const obj = {
//     monkey: 'yep'
// }

// console.log(typeof obj === 'object') // true
// console.log(typeof obj === 'function') // false

// console.log(typeof Object === 'function')

// console.log(obj.hasOwnProperty('monkey')) // true
// console.log(obj.hasOwnProperty('donkey')) // false

// console.log(typeof Object) // Function
// console.log(obj.__proto__ === Object.prototype) // true
// console.log(obj.constructor === Object) // true
// console.log(obj.prototype) // undefined

// console.log(Object.prototype.call())


// Example 2

// const arr = [1, 2]

// console.log(arr.join('')) // ab

// console.log(arr.__proto__ === Function.prototype) // true
// console.log(arr.constructor === Array) // true
// console.log(typeof arr) // Object
// console.log(arr.prototype) // undefined

// console.log(arr[1] === 'a') // true
// console.log(arr[2] === 'b') // true

// console.log(Array.__proto__ === Function.prototype)

// Example 3

// const parentObj = {
//     login: function () {console.log(`${this.name} logged in for ${this.time}`)},
//     hii: function() {console.log(`${this.name} said hii from ${this.time}`)}
// }

// function childObj(name, time) {
//     const child1 = Object.create(parentObj)
//     child1.name = name
//     child1.time = time
//     console.log(child1.__proto__ === parentObj)
//     return child1
// }

// const finalChild1 = childObj('Manav', 3)

// // console.log(child1.__proto__ === parentObj)
// console.log(finalChild1.__proto__ === parentObj)
// console.log(finalChild1.constructor === Object)
// console.log(parentObj.__proto__ === Object.prototype)

// finalChild1.login()
// finalChild1.hii()


// Example 4

// constructor function
// function UserCreator(name, points) {
//     this.name = name
//     this.points = points
// }

// UserCreator.prototype.add = function() {
//     this.points++
// }


// const user = new UserCreator('manav', 4) // making a new object
// user.add()
// console.log(user.points)

/**
 * 
 * 
 * 1. constructor function. Intended to be called with the 'new' keyword. If you don't you clober the global object
 * 2. new provides a new execution context
 * What does new keyword do???
 * 3. Does 4 main things for us automatically
 *      1. creates a empty object for us. Before we have to use Object.create()
 *      2. assigns the this keyword to refer to that empty object. Before we had to refer to the object itself to put property/values on it 
 *      3. sets the __proto__ property of the empty object to the functions prototype property. 
 *      4. returns the object out automatically. Before we have to explicity return it 
 */


/**Confusion Check */

// console.log(user.__proto__ === UserCreator.prototype)
// console.log(user.constructor === UserCreator)
// console.log(typeof user) // Object
// console.log(typeof(typeof user.__proto__.constructor))



// Example 6

// class UserCrea







// Array.prototype.myMap = function(callback){
//     let result = []
//     for(let i = 0; i < this.length; i++){
//         result.push(callback(this[i]))
//     }
//     return result
// }

// let array = [1, 2, 3, 4]
// const result = array.myMap((num) => num * 2)
// console.log(result)


// Array.prototype.myFilter = function(callback){
//     let result = []
//     this.forEach((num) => {
//         if(callback(this[num]) === true)  result.push(this[num])
//     })
//     return result
// }

// const result = array.myFilter((num) => num % 2 === 0)
// console.log(result)

// Array.prototype.myReduce = function(callback, intialValue) {
//     let accumulator = intialValue !== undefined ? intialValue : this[0]
//     let startIndex = intialValue !== undefined ? 0 : 1
//     for(let i = startIndex; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i], this)
//     }
//     return accumulator
// }


// Event loop examples



// setImmediate(() => {console.log('set Immediate 1')})

// setTimeout(() => {console.log("set timeout 1")}, 0)

// Promise.resolve("promise").then(console.log('promise 1 '))
// Promise.resolve("promise 2")
// .then(() => {
//     console.log('promise new')
// })

// fs.readFile('./file.txt', 'utf-8' ,() => {
//     setTimeout(() => {
//             console.log('set timeout 2')
//     }, 0);
//     process.nextTick(() => console.log('process.next tick 2 read'))
//     setImmediate(() => {console.log('set immediate 2')})
//     console.log('utf 8 file format read')
// })

// process.nextTick(() => console.log('process.next tick 1 read'))
// console.log('hello from the superstar')



/************************************************************************JAVASCRIPT PRACTICE EXAMPLES**************************************************************/

// function abc() {
//     console.log(abc.xyz)
// }

// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()


// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('FM7'))
// console.log(parseInt('7'))
// console.log([1, 2].map((num) => {
//     if(num > 0) return ;
//     else return num * 2;
// }))

// {
//     function abc(){
//         console.log('mamav')
//     }   
// }

// abc()

// function a(){
//     return 1
// }
// function b(){
//     return 2
// }

// const a = (a(), b()) // 2

// const arr = ['one', 'two']
// let str = 'Hello'

// console.log(arr.includes('on')) // false
// console.log(str.includes('ll')) // true

// console.log(true == '') //false

// let a = 10
// let b = new Number(10)

// console.log(a === b) // false as new Number creates a object and while comparing === it will compare data types also so it is false

console.log(+true) // 1
console.log(!"xyz") // false
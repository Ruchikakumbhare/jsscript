
/*
let list = [10,30,50]  //=> [20,40,60]
let score =[]
for(let i = 0 ; i < list.length;i++){
    console.log(list[i]+10)
    score.push(score[i]+10)
}
console.log(score)
*/

// let student = ["mayuri", "ram", "sita", "vaibhav"]
// console.log(typeof student)//array

// let student1 = "mayurik"
// console.log(typeof student1)//string

// let rollNo = 23
// console.log(typeof rollNo)

//problem 1
//let score = [12, 34, 78, 90]
//index      0    1   2  3
//           1    2   3  4
//plus 2 => [14, 36, 80,92]

 //let plus2 = []
// for (let i = 0; i < score.length; i++) {
  // console.log(score[i] + 2)
 //  plus2.push(score[i] + 2)
//}
// console.log(plus2)

//map()
//action => perform operation with each element
//return => new array

// let score = [12, 34, 78, 90]
// let plusTwo = score.map(function (element, index, array) {
//     return element + 2
// })
// console.log(plusTwo)


//Problem 2
// let marks = [25, 12, 10, 30, 22, 90, 82]
//greter25=[30,90,82]
// let greater25 = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 25) {
//         greater25.push(marks[i])
//     }
// }
// console.log(greater25)

//filter()
//action=> compare the element based on given condition
//return => array
// let greater25 = marks.filter(function (el, index, arr) {
//     return el > 25
// })
// console.log(greater25)

//problem 3
/*
let score = [5, 10, 1, 2]
//sum=18
//bank => deposit=[200,100,10,30]
//total bal=340

let sum = 0 //5 //15 //16 //18
for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
    //0+5=5
    //5+10=>15
    //15+1=> 16
    //16+2 => 18
}
console.log(sum)

//array => reduce()

*/
/*
let score = [12, 34, 78, 90]
let plus2 = []
 for (let i = 0; i < score.length; i++) {
  // console.log(score[i] + 2)
   plus2.push(score[i] + 2)
}
 console.log(plus2)


//.....................map method..................................empty array name.push(array name[i]+2)
let marks = [22,33,44,55,66]
let add = []
for(let i = 0 ; i < marks.length;i++){
   // console.log(marks[i]+2)
    add.push(marks[i]+2)
}
 console.log(add)

 
//.......................reverse with substract.....................................................
 let marks1 = [22,33,44,55,66]
let add2 = []
for(let i1 = marks1.length-1; i1>=0;i1--){
   // console.log(marks1[i]+2)
    add2.push(marks1[i1]-1)
}
 console.log(add2)

//...................................class copy paste.............................................

let names = ["ninad","vijeet","ram","raj"]
//
let q1 = names.push("amol")
console.log(names)
console.log(q1)

let cities = ["pune","mumbai","bangalore","kolkata"]
let q2 = cities.unshift("nagpur")
console.log(cities)
console.log(q2)

let country = ["india","pakistan","srilanka","bangladesh"]
let q3 = country.pop()
console.log(country) 
console.log(q3)

let q4 = country.shift()
console.log(q4)
console.log(country)

let list = ["neha","ruchika","priya","niya","sonia"]
let i = list.shift()
console.log(list)
console.log(i)

let namesB = ["chinmay","sarika","amol","amit"]
let q5 = namesB.includes("amol")
console.log(q5)

*/


//............................................practice...........................................................

//.......................push..................
let fruit = ["mango","banana","apple","lichi","gava"] 
let i = fruit.push("grapes")
console.log(fruit)
console.log(i)     // ["mango","banana","apple","lichi","gava","grapes"]

//.....................pop......................
let fruits = ["mango","banana","apple","lichi"] 
let i1 = fruits.pop()
console.log(i1)
console.log(fruits)

//....................unshift...................
let fruits2 = ["mango","banana","apple","lichi"] 
let i2 = fruits2.unshift("grapes")
console.log(i2)
console.log(fruits2)

//....................shift.....................
let fruits3 = ["mango","banana","apple","lichi"] 
let i3 = fruits3.shift()
console.log(i3)
console.log(fruits3)

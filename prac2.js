// date [04/07/2024] ------> Thursday


//Problem 1 :   Print all even numbers from 0 – 10
/*
for (let i = 0 ; i <= 10; i = i+2){
    console.log(i)
}

// problem 2 :Print a table containing multiplication tables

for (let x = 2 ; x <= 20 ; x = x+2){
    console.log(x)
}


//problem 3: Calculate the sum of numbers within an array
 
let num = [10,20,30,40,50]
let a = num.reduce(function(acc,el,ind,arr){
    return acc + el
},0)
console.log(a)


// problem 4 :Create a function that reverses an array
let city = ["mumbai","pune","nagpur","kolkata"]
let x = city.reverse()
console.log(x)

//Problem 5 : Sort an array from lowest to highest
let city1 = ["mumbai","pune","nagpur","kolkata"]
let y =city1.sort()
console.log(y)


// Problem 6 :Create a function that filters out negative numbers

let num2 = [100,-2,-4,-5,-6,200,40]
let b =num2.filter(function(el,ind,arr){
    return el < 0
})
console.log(b)
*/

// // with para without return
// function calcy (x,y){
//     console.log(x+y)
// }
// calcy(10,10)

// //without para without return
// function calcy2(){
//     console.log(0+100)
// }
// calcy2()
// calcy2()


// // with para with return

// function num (a,b){
//     return a+b
// }
// let i = num(600,600)
// console.log(i)


// let a = 10
// console.log(a)


// for ( let i = 1 ; i <=10;i++){
//     console.log(i)
// }


// for (let i = 10 ; i <=100 ; i = i +10){
//     console.log(i)
// }

// for(let i1 = 100; i1 >=10;i1 = i1-10){
//     console.log(i1)
// }


let cal = [100,200,100,200,500]
//  let i1=cal.reduce(function(acc,el,ind,arr){
//    return acc +el
//  })
//  console.log(i1)

//  let z =cal.reverse()
//  console.log(z)

let i = cal.filter(function(el,ind,arr){
    return el < 200 
})
console.log(i)
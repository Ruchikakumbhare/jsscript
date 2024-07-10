// push(),pop(),unshift(),shift()

// let mylist = ["ruchika","priya","aarya","aastha","palavi","kajal"]
// let x = mylist.shift()
// console.log(x)
// console.log(mylist)







//map(),filter(),reduce(),forEach(),find(),findIndex(),every(),some()
/*
let arr = [10,20,30,40,50]
let a = arr.map(function(el,ind,arr){
    return el +5
})
console.log(a)


let arr1 = [-1,-2,3,4,5]
let b = arr1.filter(function(el,ind,arr){
    return el < 0
})
console.log(b)

let arr2 = [20,40,60]
let x =arr2.reduce(function(acc,el,ind,arr){
return acc +el
},0)
console.log(x)

let arr3 = ["pune","mumbai"]
 arr3.forEach(function(el,ind,arr){
    console.log("welocome " + el)
})

let arr4 = [10,20,30,40,50]
let q = arr4.find(function(el,ind,arr){
    return el < 40
})
console.log(q)


let arr5 = [10,20,30,40,50]
let q1 = arr5.findIndex(function(el,ind,arr){
    return el < 40
})
console.log(q1)


let arr6 = [10,20,30,40,50]
let q3 = arr6.every(function(el,ind,arr){
    return el < 40
})
console.log(q3)
*/



//reverse(),sort(), fill(),falt()at(),indexOf(),concat(),join(),slice(),splice()

// let fruit = ["mango","apple","grapes","banana"]
// let i =fruit.fill("not",2)
// console.log(i)



// let res = [["chawal","Dal"],["roti","sabji"]]
// let i1=res.flat()
// console.log(res[1][0])
// console.log(i1)

// let q =fruit.indexOf("apple")
// console.log(q)

// let fruit1 = ["mango","apple","grapes","banana"]
// //let flower = ["lily","rose","sunflower"]
// let o =fruit1.join("-")
// console.log(o)


let mylist = ["ruchika","priya","aarya","aastha","palavi","kajal"]
// let i =mylist.slice(1,5)
//  console.log(i)

let m =mylist.splice(1,3,"soali")
console.log(m)
console.log(mylist)
// let mylist = ["hindi","marathi","english","maths","geography","history"]
//  let  i = mylist.splice(1,3,"chemistry")
//  console.log(i)
//  //console.log(mylist)


// let stud = {
//     firstname : "ruchika",
//     lastname : "kumbhare",
// }
// console.log(stud.firstname)

// stud.rollno = 25
// console.log(stud)
// stud.contact=2345566
// console.log(stud)

// delete stud.firstname
// console.log(stud)



let names = {
    firstname : "Ruchika",
    lastname : "Kumbhare",
    Email : "ruchika@123",
    contact : 123456789
}

for (let prop in names){
    console.log(prop,names[prop])
}
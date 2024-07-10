


// map(), filter(), reduce(), forEach()
// find() ,findIndex(),every() , some()


// map()
/*
let birthYear = [2000,2001,2002,2003]
// [2024 - 2000 , 2024 - 2001 ,2024 - 2002 ,2024 - 2003]
// [24,23,22,21]

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

// program 2
let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)


// program3
let marks = [78,66,55,66,33,44,88,99,33]
// [78,66,55,66,89,99]
let q3 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q3)

let transactions = [-100,100,10000,-900,899,67,-67,100,344]

let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)

let withdrawl = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawl)

// reduce()

let nums = [11,22,33]
let q4 = nums.reduce(function(acc,el,index,arr){
    return acc + el // acc ==> 66
},0)
console.log(q4)


// forEach()
let cities = ["pune","mumbai","banglore","nagpur"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// map() , filter() ,reduce() , forEach()
//              0  1  2  3  4  5  6  7
let numbersB = [9,33,44,55,66,77,44,66]

let q5 = numbersB.filter(function(el,index,arr){
    return el > 40
})
console.log(q5)

let q6 = numbersB.find(function(el,index,arr){
    return el > 40
})
console.log(q6)

let q7 = numbersB.findIndex(function(el){
    return el > 40
})
console.log(q7)

// every()
let counts = [11,22,33,44,55] 
let q8 = counts.every(function(el,index,arr){
    return el > 50
})
console.log(q8)

//some()
counts = [11,22,33,44,55] 
let q9 = counts.some(function(el,index,arr){
    return el > 55
})
console.log(q9)

// map(), filter(),reduce() , forEach()
// find(),findIndex(),some(),every()

let birthYear = [2000,2001,2002,2003]
// [2024 - 2000 , 2024 - 2001 ,2024 - 2002 ,2024 - 2003]
// [24,23,22,21]

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

*/





//.................................map()..............................
/*
let num = [2011,2012,2013,2014]
let i = num.map(function(el,index,array){
 return 2024 -el
})
console.log(i)




let year = [ 1997,1998,1999,2000]
let x=year.map(function(el,index,arr){
    return 2024 - el 
}) 
console.log(x)


let num2 = [2001,2002,2003,2004]
let y =    num2.map(function(el,ind,arr){
    return 2023-el
   }
) 
console.log(y)


let num = [10,20,30,40,50,60]
 let x = num.map(function(el,ind,arr){
    return el +1
})
 console.log(x)


//............................................filter()..................................


let num = [10,20,30,40]
let i = num.filter(function(el,ind,arr){
    return el <20
 })
 console.log(i)


 let score = [100,-100,200,300,-1,-4,500]
 let x=score.filter(function(el,ind,arr){
    return el < 0
    
 })
 console.log(x)
 let y=score.filter(function(el,ind,arr){
    return el > 0
 })
 console.log(y)
 

 let score = [1,1,1,1,1,1,1,1,1,1]
 let i = score.reduce(function(acc,el,ind,arr){
    return acc+el
 } ,10 )
  console.log(i)
  
 

  //..............................................forEach()........................................


  let list = ["ruchi","payal","riya","vidhi","sonu"]
   list.forEach(function(el,ind,arr){
           console.log("welcome " + el)
   })
   
  
   //.............................................find.............................................
   



let num = [20,22,33,45,65,78,90]
let i = num.find(function(el,ind,arr){
    return el<60
 })
console.log(i)
//...........................................findIndex().......................................

let i1 = num.findIndex(function(el,ind,arr){
    return el >60
})
console.log(i1)
*/
//..............................................every().........................................
let counts = [10,20,30,40,50] 
let q8 = counts.every(function(el,index,arr){
    return el < 40
})
console.log(q8)

//...............................................some().........................................
counts = [11,22,33,44,55] 
let q9 = counts.some(function(el,index,arr){
    return el > 33
})
console.log(q9)


/*
let list = ["blue","red","green","purple","black"]
list.forEach(function(el,ind,arr){
    console.log("color " + el)
})*/


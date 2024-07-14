//..................................string methods..................................................

// 1]  charAt()

let flower = "lotus"
let x = flower.charAt(4)
console.log(x)



// 2] trim()  3] trimStart()      4]trimEnd()

let fruit = " mango "   //total length is 7
let x1 = fruit.trim()
console.log(x1.length)  //5  remove start  and end space 

//3] trimStart() 
let x2 =fruit.trimStart()
console.log(x2.length)   // 6

//4]trimEnd()
let x3=fruit.trimEnd()
console.log(x3.length) //6

//5] toUpperCase()
let name1 = "sarah"
let a =name1.toUpperCase()
console.log(a)

//6] toLowerCase()
let name2="ROHIT"
let b = name2.toLowerCase()
console.log(b)

//7] startsWith()   8] endWit()
let family = "papa"
let m = family.startsWith("pap")
console.log(m)

let n = family.endsWith("a")
console.log(n)

//9]concat()

let s = "Ruchi is a good girl"
let p = " and she is a good dancer"
let my = s.concat(p)
console.log(my)

//10] includes()
let list = "sarah"
let a1 =list.includes("rah")
console.log(a1)
let a2 =list.includes("ka")
console.log(a2)

//11] indexOf()
let nam1="kajal"
let q5=nam1.indexOf("j")
console.log(q5)
let q6=nam1.indexOf("m")
console.log(q6)

//12] replace()
let info = "she is bad girl"
let p1 = info.replace("bad","good")
console.log(p1)

//13] slice()

let country = "America"
let a3 = country.slice(4) //             0 1  2 3 4 5 6
console.log(a3)           //             A m  e r i c a

let a4 = country.slice(2,6)
console.log(a4)

// 14] split()
let address = "ruchikakumbhare@123"
let m1= address.split('i')
console.log(m1)            //['ruchi','a','umbhare@123']

let m2= address.split('r')
console.log(m2)      //[ '', 'uchikakumbha', 'e@123' ]

// //...................Program1
// let name1=["ruchika","neha","sara","diya","baby"]
// let [a1,a2,a3,a4,a5]=name1
//   console.log(a1[0,4])// output is  i 
//   console.log(a2)
//   console.log(a3)
//   console.log(a4)
//   console.log(a5)

// //......................program2
// let rollno = [20,10,40,50]
// let[a,b,c,d]=rollno
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//.....................program3
// let myself={
//   fname :"ruchika",
//   lname :"kumbhare",
//   contact:143,
//   family:{
//     father:"sanjay",
//     mother:"alka",
//     brother:"rohit",
//     friends:["neha","chaitanya","mangesh","apurva","adarsh"]
//   }
// }

// let{fname:a}=myself
// console.log(a)          // ruchika

// let{family:{brother:b}}=myself
// console.log(b)         // rohit

// let{family:{friends:c}}=myself
// console.log(c[4])

// console.log(c[1])

let bio = {
  fname : "ruchi",
  lname : "kumbhare",
  family:{
      mother:"alka",
      father:"sanjay",
      brother:"rohit",
      cousins:["payal","sarah","dolly","parag"],
      hobby:{
          dance :"Hiphop",
          cook : "dosa",
      }
  }
}
let{fname:a1,lname:b1}=bio
console.log(a1)
console.log(b1)
let{family:{mother:a,father:b,brother:c}}=bio
console.log(a)
console.log(b)
console.log(c)

let {family:{cousins:[x,x1,x2,x3]}}=bio
console.log(x3)



let{family:{hobby:{dance:y,cook:z}}}=bio
console.log(y)
console.log(z)
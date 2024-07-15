//...........programs.............date 15/07/24
//.........simple array destruct......
let list = ["ruchika","kumbhare"]
let[a1,b1]=list
console.log(list)
console.log(a1)
console.log(b1)

//........array object destruct 
let list1 = [
    {
        fname : "ruchi",
        mname: "sanjay",
        lname : "Kumbhare",
    }
,
    {
       contact : 45567789910,
       add : "extra"
    }
]
let [{fname:x,mname:y,lname:z},{contact:x1,add:y1}] = list1
console.log(x)
console.log(y)
console.log(z)
console.log(x1)
console.log(y1)

//..........multi array object  destruct

let list2 = [
    {
        fname : "rohit",
        lname : "kumbhare"
    }
    ,
    {
        skills:["py","c","c++"],
        favcolor:["black","blue"]
    }
]

let[{fname:a,lname:b},{skills:[p,q,r],favcolor:[p1,q1]}]=list2
console.log(a)
console.log(b)
console.log(p)
console.log(q)
console.log(r)
console.log(p1)
console.log(q1)

// simple object destruct

let list3 = {
    fname:"diya",
    lname : " sharma"
}
let{fname:a5,lname:a6}=list3
console.log(a5)
console.log(a6)

//multi object desctruct

let list4 = {
    fname:"diya",
    lname : " sharma",
    favfruit:{
      fruit :["mango","pineapple"],
      favcolor:["purple","white"],
      favlist:{
        food:"pizza",
        song:"suniye suniye"
      }
    }
}

let{lname:s}=list4
let{favfruit:{fruit:[s1,s2]}}=list4
let{favfruit:{favcolor:[s3,s4]}}=list4
let{favfruit:{favlist:{food:x11,song:x22}}} = list4
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(x11)
console.log(x22)
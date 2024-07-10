/*function neha(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
}
 neha(10,5)
 neha(10,10) // with parameter


function my(x,y){
    return x+y
}
 e=my(10,2)
 console.log(e)  //with parameter and with return type


 let a = 10
 console.log(a)
 */
 // array
 //  
 /*            0          1        2      3     4
 let names = ["chinmay","sarika","poorva","ram","sham"]
 console.log(names[0])
 console.log(names[1])
 console.log(names[2])
 
 // Human --- amol
 // Properties - color , gender , height , weight 
 // Methods - walk(),talk()
 // Array ----- Objects  ----- properties and methods
 
 let e = names.length
 console.log(e)
 
 // program 2
 //              0        1       2        3
 let fruits = ["apple","mango","banana","orange"]
 console.log(fruits.length)
 console.log(fruits.length-1)
 
 for(let i = 0 ; i < 4 ; i++){
     //console.log(i) // 0,1,2,3
     console.log(fruits[i])
 }
 
 for(let i = 3; i >= 0 ; i--){
     //console.log(i)
     console.log(fruits[i])
 }
 
 // program 2
 //                  0           1         2
 let vegetables = ["brinjal","cabbage","cauliflower"]
 
 for(let i = 0 ; i < vegetables.length ; i++){
     //console.log(i)
     console.log(vegetables[i])
 
 }
 
 for(let i = vegetables.length -1 ; i >= 0 ; i--){
     //console.log(i)
     console.log(vegetables[i])
 
 }
 
 // while loop
 //               0          1       2      3
 let country = ["india","srilanka","cuba","china"]
 
 let i1 = 0
 while(i1 <  country.length){
     //console.log(i1)
     console.log(country[i1])
     i1 = i1 + 1
 }
 
 let i2 = country.length -1
 while(i2 >= 0){
     //console.log(i2)
     console.log(country[i2])
     i2 = i2 - 1
 }
 */
/* 
 let nav = ["neha","ruchika","aarya","apurva"]
    for (let i = 0; i < nav.length;i++){
        console.log(i)
        console.log(nav[i])
    }
 

let nav1 = ["neha","ruchika","aarya","apurva"]
let i = 0
while(i<0){
    console.log(nav1)
    i = i+1
}
 
 

for(let x = 10; x <= 100; x = x+10){
    console.log(x)
}

let y = 10
while(y<=100){
    console.log(y)
    y = y+ 10
}


 
let intro = ["my","name","is ","ruchi"]

for(let i = 0; i< intro.length;i++){
    console.log(i)
    console.log(intro[i])
}

for(let b = intro.length-1;b>=0;b--){
    console.log(intro[b])
}

let a = intro.length-1
while(a>=0 ){
    console.log(a)
    console.log(intro[a])
    a = a-1
}
    

for(let i = 3;i<=30;i=i+3){
    console.log(i)
}
*/
let sum = 0
let num = [12,10,2,3]
for(let i = 0 ; i < num.length;i++){
    sum = sum +num[i]
   

}
console.log(sum)
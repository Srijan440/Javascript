//  Primitive


// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100           //int
// const scoreValue = 100.3    //float

// const isLoggedIn = false  //Boolean
// const outsideTemp = null
// let userEmail;


// let customerId = Symbol('1234')
// let custId = Symbol('1234')


// console.log(customerId === custId);       //for datatypes
// console.log(customerId == custId);        //for value

// in both cases it gives false 


// let bigNumber = 12345678912345n      //now it is a bigint



// Reference (Non-primitive)

/*
Array, Object ,Function

const hero = ["Superman","Batman","Spiderman"];            //array


//Objects   -->  Always in curly braces, and also in key-value pairs

let  myObj = {                       //isko ab hum variables me bhi store ker diye!!
Name : "Srijan",     
Age : 21,
}                                   //string,number,function anything are present in the object




//functions

let myFunction = function(){
console.log("Hello World")
}

*/


//******************************************************************************************** 

// Stack(primitive)    and   Heap(non-primitive)



// Primitve type                         //value ki copy jata hai jissse tum changes krige to pehle wale ke value ko koi fark nhi padega
/*
let myYoutubeName = "Srijan"

let myyoutubeName = myYoutubeName

myyoutubeName = "Satyam"

console.log(myYoutubeName);
console.log(myyoutubeName);
*/


// Non-Primitive type                    //direct value hi chala jata hau jisse tumhara dono me changes aa jata hai
/*
let oneObj = {                           //never define by = sign , define by : this symbol
    Name : "Srijan",
    Age : 21
}

let twoObj = oneObj;

twoObj.Name = "Satyam";                  //issi tarike se access kiy jata hai object ke parts ko

console.log(oneObj);
console.log(twoObj);
*/

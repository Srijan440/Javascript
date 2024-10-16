//Immediately Invoke function Expressions  (IIFE)
/* Global scope ke pollution se problem hoti hai kai baar,to uske variable ke declaration ya variable se 
bachne ke liye IIFE ka use krte hai, or like function ke turant baad agar execute krna hota hai toh..
*/
//implementation of IIFE in fuction called as (named IIFE)

(function one() {
    console.log(`Hello World`);        //without passing arguments and parameters
})();

(function one(name) {
    console.log(`Hello World  ${name} !`);  //with passing arguments and parameters
})('Satyam');

//funtion ko bhi wrap ker do!!!!!!!!!!!!!!!!!! and most important end me semicolon dena jarruri hota hai warna next iife execute nhi hoga

//implementation of IIFE in arrows function called as (unamed IIFE)

((name) => {
    console.log(`Welcome ${name} ! `);  //for normal implementaion remove name & 'Srijan'
})('Srijan');                             



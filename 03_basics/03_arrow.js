// const user = {
//     username : 'Srijan',
//     price : 999,

//     oneFunction : function(){
//         console.log(`${this.username}, welcome to website.`);     //this currently uss user scope ke username ke context ko le raha hai
//         console.log(this);                                        //ye pure user ke scope ko context me le raha hai
//     }
// }
// user.oneFunction();                                    //this.username ko,aur this me pure user ko print ker dega
// user.username = 'Satyam';
// user.oneFunction();                                    //username badal ke print ker dega

// console.log(this);                                     // khali parenthesis ko print krega sirf kyunki global koi context nhi hai
//                                                        // but wahi matter ker jata hai browser ke console me waha pe windows show kerta hai



//////////ye this sirf object me use hota hai function me krenege to undefined and without const use kiye to bahut kuch de deta hai


//////////arrow//////////

//normal declaration
// () => {}

//if we put it in the variable
// const name = (num1,num2) => {
//     return num1 + num2;
// }
// console.log( name(3,4));


//implicit return: which means it take assume that you dont need to write return because you need only one line of statement
// const name = (num1,num2) => num1 + num2;          //no need tot take parenthesis, no need to write return value
// console.log( name(3,4));

//you can also write it as like this:  "const name = (num1,num2) => (num1 + num2);";
//explicit return: where you take return value,



// const name = () => ({username: 'Srijan'});     // that how we return object values in js or arrow function
// console.log(name());                           //{ username: 'Srijan' }





//in array

// const array = [1,2,3,4,5];

// array.forEach(function () {}     for function
// )

// array.forEach(() => ()/{}        for arrow
// )


////////////////////////sum of///////////////////////
/*
() => {}    use for return value, but you have to write return for this
() => ()    use for also return value, but not need to write the return word
*/
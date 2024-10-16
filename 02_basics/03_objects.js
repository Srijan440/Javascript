//singleton
//Object.create  banta hai constructor ke through

/*Object literals    ----
                        |
                        |
                        |
                        V
*/

// const branch = Symbol("Key1");
// const house = Symbol("Key2")

// const KiitStudent = {
//     name : "Srijan",
//     "full name" : "Srijan Singh",
//     branch : "CSE",                      //it get access but not as a symbol but if we write [branch]like this then it use as a symbol
//     [house] : "Red",
//     age : 21,
//     roll_no : 22052511,
//     batch_no : 2022-26,
//     isLoggedIn : true,
// }

// console.log(KiitStudent.name);          //this way we access the object , but this way we can't access "full name";
// console.log(KiitStudent["full name"]);  // this way we access both types of object
// console.log(typeof KiitStudent.branch);
// console.log(typeof KiitStudent.house);   //undefine
// console.log(KiitStudent[house]);        //for accesssing the Symbol

// KiitStudent.isLoggedIn = false;
// Object.freeze(KiitStudent);             //freeze the object KiitStudent
// KiitStudent.isLoggedIn = true;          //so it will not be consider as change 

// console.log(KiitStudent);        
// {
//     name: 'Srijan',
//     'full name': 'Srijan Singh',
//     branch: 'CSE',                      but isko nhi 
//     age: 21,
//     roll_no: 22052511,
//     batch_no: 1996,
//     isLoggedIn: false,
//     [Symbol(Key2)]: 'Red'               it take it as a Symbol key
// }





//////////////////////////////////////////function////////////////////////////////////////////////////


const branch = Symbol("Key1");

const KiitStudent = {
    name : "Srijan",
    "full name" : "Srijan Singh",
    [branch] : "CSE",                  
    age : 21,
    roll_no : 22052511,
    batch_no : 2022-26,
    isLoggedIn : true,
}

KiitStudent.greeting = function(){
    return("Hello my Kiitains");                   
} 

KiitStudent.welcome = function(){
    return(`Hello my lovable kiitian, ${this.name}`);           //by doing "this.name" this, then we only access that object parts and also we have to do in ` `
}

console.log(KiitStudent.greeting());
console.log(KiitStudent.welcome());





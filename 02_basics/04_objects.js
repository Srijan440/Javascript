//singleton   which is formed by constructors


//way to declare
// const tinder = new Object()     ---(1)   singleton

//const tinder = {}            //    ---(2)   non-singleton   this give only this "{}"
// console.log(tinder);     

// tinder.name = "Srijan"
// tinder.age = 21
// tinder.roll_no = 22052511

// console.log(tinder);    

// const omegele = {
//     Name : "Satyam",
//     fullname : {
//         userfullname : {
//             firstname : "Srijan",
//             lastname : "Singh",
//         }
//     }
// }

//now we access the lastname

// console.log(omegele.fullname.userfullname.lastname);



// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'a', 4: 'b'}
// const obj3 = {5: 'a', 6: 'b'}
// const obj4 = {7: 'a', 8: 'b'}

// //const obj5 = { obj1 , obj2 }                    //{1: 'a', 2: 'b', {3: 'a', 4: 'b'}} obj ke ander obj
// const obj5 = Object.assign(obj1,obj2,obj3,obj4);
// console.log(obj5);                                //{...obj1,...obj2,...obj3,...obj4} it is same use in array also
/*
{
  '1': 'a',
  '2': 'b',
  '3': 'a',
  '4': 'b',
  '5': 'a',
  '6': 'b',
  '7': 'a',
  '8': 'b'
}
*/


const users = [
    {
    id:1,
    email: "a@gmail.com",
    },
    {
        id:2,
        email: "b@gmail.com",
    },
    {
        id:3,
        email: "c@gmail.com",
    },
    {
        id:4,
        email: "d@gmail.com",
    }
]


// console.log(users[1].email);            //as users is an array.


// const tinder = {}     

// tinder.name = "Srijan"
// tinder.age = 21
// tinder.roll_no = 22052511

// console.log(tinder);                     // { name: 'Srijan', age: 21, roll_no: 22052511 }
// console.log(Object.keys(tinder))         // this way we find the keys values        [ 'name', 'age', 'roll_no' ]
// console.log(Object.values(tinder))       // this way we find the key-values values  [ 'Srijan', 21, 22052511 ]
// console.log(Object.entries(tinder));     // [ [ 'name', 'Srijan' ], [ 'age', 21 ], [ 'roll_no', 22052511 ] ]
// console.log(tinder.hasOwnProperty('name'));   //state it is present or not in that object (in boolean)   true





///////////////////////////////////object deconstructor//////////////////////////////////////////////

const identity = {
    name : 'srijan',
    age : 21,
    roll_no : 22052511,
}

// instead of identity.age
// we write

const {roll_no: roll } = identity;      //object deconstructor
console.log(roll);


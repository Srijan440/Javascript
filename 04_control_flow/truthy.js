//falsy values

//false, 0, -0, BigInt 0n, ""(Empty String), null, undefined, NaN

//truthy values

// "0"(String ke ander 0), 'false'(String ke ander false), " ",[](empty array), {}(empty object), function(){}(empty function)


//checking object in if-else statement

// const emptyObj = {}
// if(Object.keys(emptyObj) === 0){              //(Array.lenght === 0)
//     console.log('Object is empty');        
// }


//jaise apna (||or , &&and operator hota hai waise hi---> )
//Nullish Coalescing Operator (??) : (null, undefined) is do value pe hi define hai

// let val1;
// val1 = 5 ?? 10      //5
// val1 = null ?? 10      //10
// val1 = undefined ?? 15   //15
// val1 = null ?? 10 ?? 20       //first one number ko assign ker deta hai  10

// console.log(val1);





//Terniary Operator

//condition ? true : false
const icecreamPrice = 100

icecreamPrice <= 50 ?
console.log('less than 50') : console.log('more than 50');


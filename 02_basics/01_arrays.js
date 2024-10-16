//let myArray = [1,2,3,4,5,true, "Srijan"]              //mixup ho skte hai, shallow copy(same ref. jata hai means idhar change to udhar bhi change) 
//[ ] is brackets me direct likh lena hota hai agar is type ka array define ker rahe hai hai toh

// console.log(myArray);

// let arrayOne = new Array(1,2,3,4)  //second method to define an array, isme koi []brackets alagane ka jarrurat nhi hota hai
// console.log(arrayOne[0]);          //access in array



// let arrayOne = new Array(1,2,3,4) 
// arrayOne.push(5)                        //insert at last  [ 1, 2, 3, 4, 5 ]
// arrayOne.push(6)                        //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arrayOne);                  //[ 1, 2, 3, 4, 5 ]
// arrayOne.pop()                          //delete from one
// console.log(arrayOne);

//if i want to insert at first place then-->






// let arrayOne = new Array(1,2,3,4)        
// arrayOne.unshift(0)                         //[ 0, 1, 2, 3, 4 ]     
// console.log(arrayOne);                      

// //if i want to delete the first position of an array then

// arrayOne.shift()                            //[ 1, 2, 3, 4 ]
// console.log(arrayOne);

// //wnat to check present or not in array

// console.log(arrayOne.includes(1));






//convert into string

// const array = [1,2,3,4,5]
// let arr = array.join()
// console.log(array);           [ 1, 2, 3, 4, 5 ]
// console.log(arr);             1,2,3,4,5





// slice, splice

let arr = [1,2,3,4,5,6,7]


console.log("A : ", arr);
const first = arr.slice(1,3)                //Slice1 :  [ 2, 3 ]
console.log("Slice1 : ", first);            //slice kiya jisme 2,3 aya but 4 include nhi hua


console.log("B : ", arr);
const second = arr.splice(1,3)               //Splice1 :  [ 2, 3, 4 ]
console.log("Splice1 : ", second);           //splice mein wo 4 bhi include ho jata hai

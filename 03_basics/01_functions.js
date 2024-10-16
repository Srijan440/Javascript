// function addTwoSum(number1, number2){
//     console.log(number1+number2);
// }
// addTwoSum(3,2);        // it prints 5

// const value = addTwoSum(3,2);     //it print 5 bcz it call that function 
// console.log(value);               // this print undefined bcz of function console.log

//so 
// function addTwoSum(number1, number2){
//     return(number1+number2);
// }
// addTwoSum(3,2);        // it prints 5

// const value = addTwoSum(3,2);     //it print 5 bcz it call that function 
// console.log("result: ",value);               // this print undefined bcz of function console.log




// function loginUser(username){                       //agar loginUser() is cheej se bachna hai toh username = 'sam' ya kuch bhi define ker do ki kam se kam undefine toh nhi rahega 
//     if(!username){
//         console.log("Please enter the username.");
//         return
//     }
//     return `${username} just logged in!`
// }

// console.log(loginUser("Satyam"));
// console.log(loginUser());                    //bydefault it gives undefined





// function calculatecartPrice(...num1){      //this is called rest operator it makes an array of upcoming values which is passed by an arguments
//     return num1;
// }

// console.log(calculatecartPrice(200,300,400));           //[ 200, 300, 400 ]

//if we write this calculatecartPrice(value1,value2, ...num1) then it print  [ 400 ] only.


//object

// const user = {
//     name: 'satyam',
//     Price: 199
// }

// function value(anyObject)                //we basically write anyObject so that koi bhi object jo ho wo isme aa jayega
// {
// console.log(`The user name is ${anyObject.name} and his book price is ${anyObject.Price}`);
// }


// value(user);
//we can also direct the object parts by dont create any other objects for this first we comment out just upper line, now like example:

// value(
//     {
//     name:'Srijan',
//     Price: 200   
//     }
// )






//now we pass an array

// const newarray = [100,200,300,400,500]

// function getSecondValue(getArray){
//     return getArray[1];
// }

// // console.log(getSecondValue(newarray));
// // or

// console.log(getSecondValue([100,200,300,400,500]));       //we create an array in the function call place and we did
//                                                           // the same thing in object, ki like ek baar object create krke 
//                                                           // kiye the or dusre baar function call krte waqt hi create kiye the

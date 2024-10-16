// let score = "33"    //not a number but a string

// console.log(typeof score)  //string
// console.log(typeof(score))  //diff way to write

// let valueInNumber = Number(score);    //Number()
// console.log(typeof valueInNumber);    //number

// let num = "33BC";
// console.log(typeof num)  //string

// let secondNumber = Number(num);    //Number()
// console.log(typeof secondNumber);  //number but 33BC is not a number
// console.log(secondNumber);         //NaN (not a number)

// let abc = null;
// console.log(abc);                   //null thats why we dont use at temp place because some times it gives 0 which is also consider as a value
// let thirdNumber = Number(abc)
// console.log(thirdNumber)            //0 in number conversion


// let bcd = undefined;
// console.log(bcd);                   //undefined 
// let fourthNumber = Number(bcd)
// console.log(fourthNumber)           //NaN

// let cde = true;
// console.log(cde);                   //true                   
// let fifthNumber = Number(cde)
// console.log(fifthNumber)            //1


// let isLoggedIn = 1                    // " " => false , "Satyam" => true
// let boolean = Boolean(isLoggedIn)     //converts the number into boolean
// console.log(boolean)                  //true

// let someNum = 33
// let string = String(someNum)
// console.log(string)                  //33 in string
// console.log(typeof string)           //string




/*************************Operations*************************/



// let value = 3
// let negValue = -value

// console.log(negValue);
// console.log(value + 3);

// console.log(3 ** 3);        //gives to the square;

// console.log("1" + 2)
// console.log(1 + "2")

// console.log("1" + 2 + 2)       // prints 122
// console.log(1 + 2 + "2")       // prints 32
// console.log("1" + 2 + "2")     // prints 122
// console.log(1 + (2 * 2) * 1)   // apply bodmas
// console.log(+true)             // 1  but if it is (true+  => error)
// console.log(+"")               // 0


// let x = 3;
//     x++;
// let y = x++;

// console.log(x,y)        // every time when x++ then that means everytime x are increases = 5
// console.table([x,y])    // and whenever y = x++ present, tab jaha jaha x++ hua y = x++ ke ane se pehle  utna hi x ka value ho jayega = 4


// let x = 3;
//     ++x;
// let y = ++x;

// console.log(x,y)        // every time when ++x then that means everytime x are increases = 5
// console.table([x,y])    // and whenever y = ++x present, tab y = ++x ko bhi include krna hoga = 5 


// let x = 3
// console.log(x++);     // 3  direct x ko consider kiya     
// console.log(x++);     // 4  x and X++ ko consider kiya 
// console.log(++x);     // 6  previous 3,x++,x++ ko consider kiya  

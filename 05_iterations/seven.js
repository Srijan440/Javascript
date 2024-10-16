//we use map function which is used for doing operations on each member of the array  and it returns value as .filter function do
// and we use chaining system here : basically it is use of function over function

const coding = [1,2,3,4,5,6,7,8,9,10]

// const Nums = coding.map((num) => (num+10))    //used for doing operations on each members of the array
// console.log(Nums);                            //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 

const Nums = coding
                    .map((num) => (num*10))
                    .map((num) => num + 1)       //here the num value is updated from its upper function work
                    .filter((num) => num >= 40 )           // used for returning the value when the statement is true

console.log(Nums);                                //[41, 51,  61, 71, 81, 91, 101]
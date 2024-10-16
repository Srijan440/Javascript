//here we use .reduce function which is used for suming of all the elements of the array, which is basically need in adding the shoping cart 


// const coding = [1,2,3,4]

// const sumOf = coding.reduce((acc,curvalue) => (acc+curvalue),0)       //.reduce((ek accumulator hota hai),(array la current value) => (wahi acc+current value))
//                                                                       // yaha se jo plus hoke jata hai wo sidhe acc me add ho jata hai usme.

// const sumOf = coding.reduce(function(acc,curvalue){                      //function ke through add krne ka tarika
//     console.log(`Accumaltor: ${acc}, Current Value: ${curvalue}`);       //just to trace the value of acc and curvalue after each process
//     return acc+curvalue;                                                 
// },0)
// console.log(sumOf);






const array = [
        {
            languageName : 'Javascript',
            price : 20,
        },
        {
            languageName : 'java',
            price : 20,
        },
        {
            languageName : 'python',
            price : 20,
        }
    ]

    const sumOFF = array.reduce((acc, num)=>(acc+num.price),0)              //num represents indexes of array(leftside) and to access that value we write num.price (rightside),we access the element's object's price
    console.log(sumOFF);
    
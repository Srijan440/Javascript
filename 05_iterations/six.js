//we use .filter and .foreach function here 

// const coding = [1,2,3,4,5,6,7,8,9,10]

// 1)
// const number = coding.filter((num)=> (num>4))

// 2)
// const number = coding.filter((num)=> {
//     return num>4
// })

//if we do same thing like filter function have in for each loop then we have to do with if()statement

// const number = []                   //we have to first declare the empty array,
// coding.forEach(num => {                 
//     if(num > 4)
//     {
//         number.push(num)           //according to the if-else statement we push the num into that empty array
//     }
// });

// console.log(number);





const array = [
    {
        languageName : 'Javascript',
        languageFilename : 'js',
        number : 1,
        opcode : 11
    },
    {
        languageName : 'java',
        languageFilename : 'java',
        number : 2,
        opcode : 22
    },
    {
        languageName : 'python',
        languageFilename : 'python',
        number : 3,
        opcode : 33
    }
]
let constant = array.filter(items => {
    return items.number > 1
})

constant = array.filter(items => {
    return items.number > 1 || items.opcode > 0
})

console.log(constant);

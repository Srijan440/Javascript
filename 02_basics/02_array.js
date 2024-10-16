//intialize two arrays
const marvel_heros = ["Ironman","Spiderman","Thor"];
const dc_heros = ["Superman","Batman","Flash"];

// marvel_heros.push(dc_heros);          //it put dc-heros as a 4th element
// console.log(marvel_heros);            //[ 'Ironman', 'Spiderman', 'Thor', [ 'Superman', 'Batman', 'Flash' ] ]

//in push, if we have to access the any element of dc_heros then we have to do : marvel_heros[3][1]

// const allheros = marvel_heros.concat(dc_heros);   // it perfectly add the dc-heros into marvel-heros
// console.log(allheros);                            //[ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]


// //another way to individual the array elements 

// const allHeros = [...marvel_heros, ...dc_heros]   // it perfectly add the dc-heros into marvel-heros
// console.log(allHeros);                            // give same output [ 'Ironman', 'Spiderman', 'Thor', 'Superman', 'Batman', 'Flash' ]
 
//benefit of doing this is : we can add multuple array and make them like this , but in concat we can't do this



// let array = [1,2,3,[4,5,6],7, [8,9,[10,11]]]         // [1,2,3,4,5,6,7,8,9,10,11]
// console.log(array.flat(Infinity));                   // arr.flat(yaha pe apun depth likhte hai)



// console.log(Array.isArray("Satyam"))         //asked that it is a array or not
// console.log(Array.from("Srijan"));           //from make it into array
// //but if we do like this then
// console.log(Array.from({name: "Srijan"}));   //it give null array because it is confused ki kiska array banana hai key ka y avalue ka!


// //initialize 3 array
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));   //of makes an array from the set of elements





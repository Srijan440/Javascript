// let myDate = new Date();
// console.log(myDate);         //2024-10-12T15:00:16.165Z    in terms of Z 
// console.log(myDate.toString());         //Sat Oct 12 2024 20:30:57 GMT+0530 (India Standard Time) much better 
// console.log(myDate.toISOString())       //same as first one (2024-10-12T15:00:16.165Z) 
// console.log(myDate.toJSON())            //same as first one (2024-10-12T15:00:16.165Z)
// console.log(myDate.toDateString())               //Sat Oct 12 2024
// console.log(myDate.toLocaleDateString())         //12/10/2024 
// console.log(myDate.toLocaleString())             //12/10/2024, 8:33:58 pm
// console.log(myDate.toLocaleTimeString())         //8:33:58 pm
// console.log(myDate.toTimeString())               //20:33:58 GMT+0530 (India Standard Time)

// console.log(typeof myDate);            //object




// let myCreatedDate = new Date("10-12-2024")          //if i consider them in double digit the jan represent as 1
// //ex: (2023(yyyy), 0(mm), 23(dd),5(hr), 03(min), 00(sec) ) // but if i consider them in single digit then jan represent as 0
// console.log(myCreatedDate.toLocaleDateString());


// let myDateStamp = Date.now()
// console.log(myDateStamp);                 //1728746694074 in milliseconds

// console.log(myCreatedDate.getTime());     //1728671400000  10-12-2024 is date se leke abhi tak ka

// console.log(Math.floor(Date.now()/1000));             //in seconds 1728746694





// let date = new Date()
// console.log(date.toLocaleDateString());         //12/10/2024
// console.log(date.getDate());                    //12
// console.log(date.getDay());                     //6
// console.log(date.getFullYear());                //2024
// console.log(date.getMonth());                   //9   jan consider as 0



// date.toLocaleString('default',{                 //thats how we modify or customize the date and time value
//     weekday: "long",                            //by ctrl + space we know more terms about this but bkank rahe tab krna 
// })


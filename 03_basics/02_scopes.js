// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);          //ReferenceError: a is not defined as because it is define inside the condition block scope
// console.log(b);          //ReferenceError: a is not defined as because it is define inside the condition block scope
// console.log(c);          // but not for c , it gives output =30, as because it is var


/*that is not the only problem with var. if i define outside the block scope (global scope) then it changes the value
of that variable like ex:*/ 

// var c = 300;
// if(true){
//     var c = 30;
// }
// console.log(c);          // it gives output =30, jabki upper me bhi c ko 300 liya gaya tha, agar if scope ke ander 
//                          // c = 30 bhi likhte sirf toh usme bhi ye overwrite ker deta value.



// let a = 300
// if(true){
//     let a = 10;
//     console.log(a);    //it prints 10, and bottom log prints 300;
    
// }
// console.log(a);        //here when we are under the if scope then we consider a value as 10 , but globally it is 300.



//function scope investigation
// function one(){
//     const username = 'Srijan';
//     function two(){
//         const name = 'Satyam';
//         console.log(username);
//     }
//     // console.log(name);
//     two();
// }
// one();

/*
step 1) one ko call kiya
step 2)username declare kiya
step 3)phir console.log(name); isko print krne ka kosis kiya ab jabki ye ander wale function ke variable ko access nhi ker skta isliye isne error de diya "ReferenceError: name is not defined" 
step 4)isko ab comment out ker denge '// console.log(name);'
step 5)to ab wo two() function ko call krega 
step 6)name ko declare karega 
step 7)and username = Srijan ko print karega 
*/





//if scope investigation
// if (true) {
//     const name = 'Srijan'
//     if(name === 'Srijan')
//     {
//         const ytName = ' & Satyam'
//         console.log(name,ytName);        
//     }
    // console.log(ytName);
// }
// console.log(name);

/*
Steps:-->
step 1)first if ke ander ghusega
step 2)name declare hoga
step 3)second loop ke ander jayega
step 4)yt name ko declare karega
step 5)even ki print bhi karega
step 6)error as it because it want to access inside loop variable(block scope value) which can't be possible: 'ReferenceError: ytName is not defined'
step 7)comment out ho jayega  //console.log(ytName);
step 8)error in "console.log(name);" this line kyunki if wali variabli ko access karna chahta hai 
step 9)ab last ending me wo second loop la last console wale ko print kara dega : 'console.log(name,ytName);' 
*/









/////////////////////////////////////intresting///////////////////////////////////////////////////////

//two type of function declaration
function oneWay(digit){
    return digit + 1; 
}
oneWay(1);


const secondWay = function(digit){
    return digit + 1;
}
secondWay(1);

/*summary:--> 
  first function me oneWay(1);function call ko function declaration ke upper ya niche rakh ke bhi call ker skte ho,
  but
  second function me secondWay(1);apun function declaration krne se pehle usko call nhi ker payenge, which means we
  always have to first declare the function then we call that function unless it give error 
  "Cannot access 'secondWay' before initialization " error dega!!!
*/
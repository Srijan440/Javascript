// const greeting = 'Hello World';

// for (const i of greeting) {                   //for of loop (loi-bhi-variable  of konsa-array/string)
//     console.log(i);
// }






const map1 = new Map()

map1.set('a',1)
map1.set('b',2)
map1.set('c',3)
map1.set('d',4)
map1.set('e',5)
map1.set('f',6)
map1.set('g',7)

// console.log(map1);              //print the whole structure
// console.log(map1.get('a'));     //1
// map1.set('a',100)               //a = 100
// console.log(map1.get('a'));     //100
// console.log(map1.size);         //size = 7
// map1.delete('g')                //delete g
// console.log(map1.size);         //size = 6

//trying for of loop on it

for (const key of map1) {
    console.log(key);
}
/* it prints:   [ 'a', 1 ]
                [ 'b', 2 ]
                [ 'c', 3 ]
                [ 'd', 4 ]
                [ 'e', 5 ]
                [ 'f', 6 ]
                [ 'g', 7 ] 
*/

for (const [key,value] of map1) {
    console.log(key, ':-' ,value);
}

/* it prints:   a :- 1
                b :- 2
                c :- 3
                d :- 4
                e :- 5
                f :- 6
                g :- 7
*/

//if we do same thing for object then it will give output: object is not iterable; bcs there is another process for doing this
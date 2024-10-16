/*
JavaScript Execution Context..

to ye hota kaise hai:--> jab bhi hum log code tayar krte hai to wo global execution context ke form me ready hota hai
         |                jo ki "this" variable ko de diya jata hai
         |
         |
         V

 iske 3 form hote hai: Global Execution Context 
                       Function Execution Context
                       Eval Execution Context


to jo wo apna code box hota hai(jisme apna js pada rahta hai) wo do phase me run hota hai  : Memory (Creation Phase)
                                                                                             Execution Phase               



to ab khanai shuru hota hai: 

            let val1= 10
            let val2 = 5

            function add(num1,num2){
                let total = num1 + num2
                return total;
            }

            let result1 = add(val1,val2)
            let result2 =  add(10,5)

1 process) jisme is code ka global execution context banta hai
2 process) isme memory creation phase hot hai jsime val1: undefined, val2: undefined, add: defination, result1:undefined, result2:undefined hota hai
3 process) execution  phase hota hai jsime val1: 10, val2: 5, assign ho jata hai , phir next line30 me jata hai result 1 ke PaymentResponse,
            waha pe ye ek new executional context banata hai jisme (new environment + executional thread)banata hai or jaise hi isme ka value return hota hai toh wo sidhe global context ko bhejta hai and turant uss execution context ko ye delete ker deta hai
            us box(execution context) me phir se 1)memory phase ata hai jisme  val1: undefined, val2: undefined, and total: undefined rahta hai phir ata hai 2)execution context pe jisme val1: 10, val2: 5, and total: 15 assign ker deta hai or phir total ko send ker deta hai
            or send krne ke baad wo result1 :15 store ker deta hai(jo ki line 35 me continue ho raha tha) jsime sabka value ko assign kiya ja raha tha,

            or jab jab new function aise call hota hai tab tab wo ye same process ko krte rahta hai: new execution context box create krna--> 1)Memory phase 2)execution context phir total transfer kero phir us execution context box ko delete kero .Context 

            phir line38 ko contine krte hue apun result2 me gaye new executioncontext create hoga,phir end me transfer krne ke baad result2 me 15 store ho jayega.


overstack kya hota hai : agar function one by one execute kero to stack me one by one function ata hai
                         or nikal jata hai per agar function ke ander function and again function ko call kiya jaye 
                         to tab overstack form hota hai for example:


                         function one(){                              
                            console.log("one");                      
                            two();
                         }
                         function two(){
                            console.log("two");
                            three();
                         }
                         function three(){
                            console.log("three");
                         }

                         one();   yaha pe pehle one() stack me gaya,phir wo two ko call ker diya jisse two() bhi ab stack me chala gaya phir two function me pata chala ki three() ko bhi call ker diya gaya hai toh ab three bhi stack me hai, but due to LIFO, jab three execute hoga to three() niklega pehle stack se,phir two(), phir one()
                         two();   yaha pe pehle two() jayega , phir three() jayega , phir three() niklega, then two() niklega
                         three(); yaha pe sirf three() jayega or three() hi niklega.............

*/
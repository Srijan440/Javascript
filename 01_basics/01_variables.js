const accountId = 12345
let accName = "Srijan Singh"
var accPassword = "Srijan12345"
let accState;                             //you can put semicolon or not it doesnt matter.

accEmail = "srijan@google.com"

accPassword = "Satyam@123"

/*
Prefer not to use 'var' because of issue in block scope('{ }') and functional scope(f0r)
*/

// accountId = 2

accName = "Satyam"

console.log([accName,accEmail,accPassword]);               //it forms direct output in [ 'Satyam', 'srijan@google.com', 'Satyam@123' ] this form

console.table([accName,accEmail,accPassword,accState]);   //it forms output in tabular form



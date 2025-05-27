/*
Datatype: store data into variable

Variable : name of storage location where we can store data
to declare variable we use keyword(Modern js)
let and const keyword

Syntax
-------------
keyword variablename=value;

let id=100;
let name="Priyanka";

Datatype
==============
Primitive
---------------
1.Number
2.String
3.Boolena
4.Undefined
5.Null
6.BigInt(NA)
7.Symbole(NA)


Non-primitive
----------------
- Object
- Array
- Class

To check the type of data which we store into variable
Javascript have one operator
typeof operator
*/

//1.Number 

let num1=101;
console.log("Num1 value is: "+num1);//101
console.log("typeof num1: "+typeof(num1));//number

let num2=-90;
console.log("Num2 value is: "+num2);//-90
console.log("typeof num2: "+typeof(num2));

let num3=90.78;
console.log("Num3 value is: "+num3)//90.78
console.log("typeof num3: "+typeof(num3));

console.log("============================");
/*
String is collection of character
1.String with single quotes  'Hello'
2.String with double quotes  "Hello"
3.String with template string/ back ticks `Hello`

*/

let firstName='Jay';
console.log("First name is: "+firstName);
console.log("type of firstname: "+typeof(firstName));//String

let lastName="Nigade";
console.log("Last name is: "+lastName);
console.log("type of lastname: "+typeof(lastName));//String

let location=`pune`;
console.log("location is: "+location);
console.log("type of location: "+typeof(location));//String

/*
When you declare string in double quotes , multiple line string we cant write
let info="My name is Priyanka,I have total 15+ years of experience
I have completed ISTB certification and I completed ME in Computers";

*/

let info=`My name is Priyanka,I have total 15+ years of experience
I have completed ISTB certification
 I completed ME in Computers`;

 console.log(info);
 console.log(typeof(info));

 console.log("============================");
 //3.Boolean true/false

 let isActive=true;
 console.log("value is: "+isActive);//true
 console.log("type of : "+typeof(isActive));//boolean
 let currentStatus=false;

 console.log("value is: "+currentStatus);//false
 console.log("type of : "+typeof(currentStatus));//boolean
 console.log("============================");

 /*
 4.undefined
 =============
 If you declare variable without initialization/Assignment
 that variable value and type are undefined
 */

 let email;
 console.log("Value of email: "+email);//undefined
 console.log("Type of email: "+typeof(email));//undefined

  console.log("============================");
 //5.Null- which is unknown

 let phno=null;
 console.log("value for phno: "+phno);//null
 console.log("Type of phno: "+typeof(phno));//object
 //this is bug in javascript

  console.log("============================");

 //6.BigInt
 console.log(Number.MAX_VALUE);//1.7976931348623157e+308
let num=17976931348623157308n;
console.log(num);
console.log(typeof(num))//bigint

//Symbol
let addSymbol=Symbol("add");
console.log(addSymbol);
console.log(typeof(addSymbol));



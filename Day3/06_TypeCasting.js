/*
Type casting: One type of data converted into other type is called type casting

1.Implicit casting
-------------------
Automatic conversion which is taken care by js
Implicit casting is known as Type Coercion

2.Explicit casting
----------------------
forcefull conversion for String, number and boolean

Truthy and falsy
===================
Turthy
---------
Any true value in boolean context called truthy
examples
----------
nonzero and nonempty string,true

falsy
-------
Any false value in boolean context is called falsy
Examples:
=----------
0,NaN,empty string "",undefined,null,false 


*/
console.log("---------------Implicit casting--------------");

console.log("--------String type--------");
/*
When with string (+) arithmetic operator used then other value is converted into string
*/

let msg="Hello"+1042;//1042 number coerced into string
console.log(msg);//Hello1042
console.log(typeof(msg));//string

let msg2="100"+10;//10 number is coerced into String
console.log(msg2);//10010
console.log(typeof(msg2));//string

console.log(10+"100"+20);//10 & 20 coerced intio String//1010020

console.log(10+45+"900");//10 & 45 added so result is 55 and then it is coerced into string 55900 

console.log("90"+true);//true is boolean which is coreced into strimg 90true

console.log("--------Number type--------");
//Number conversion
/*
With string if you use (-,*,/) arithmetic operators then
String will convert into other type(number)
*/


console.log("10"+100);//100 is coreced into string 10100

console.log("100"-80);//"100" is coreced into number 100-80=20

console.log("Hello"-80);//NaN


console.log("100"/"10");//"100"& "10" coreced into number 100/10=10

console.log("1000"*"8");//string will convert into number


console.log("---------------Explicit casting--------------");
//String/Boolean  into number: Number()
//number/boolean into String: String()
//string/number into boolean : Boolean()

//rule: for type casting data/value and type must be convertable

let a1="Hi";
console.log(Number(a1));//NaN

let a2="90";
console.log(typeof(a2));//string
console.log(Number(a2));//90
console.log(typeof(Number(a2)));//number

console.log(Number(true));//1
console.log(Number(null));//0
console.log(Number(false));//0
console.log(Number(undefined));//NaN

//any number or boolean data into string
let b1=900;
console.log(b1);//900
console.log(typeof(b1));//number
console.log(b1+100);//1000

let numToString=String(b1);
console.log(numToString);//"900"
console.log(typeof(numToString));//string

console.log(numToString+100);//900100

/*
Scenario: 
validate amount which should be less than 10000
let bill="Total amount is 5000";


*/
console.log("------boolean conversion-------");
/*Truthy and falsy
===================
Turthy
---------
Any true value in boolean context called truthy
examples
----------
nonzero and nonempty string,true

falsy
-------
Any false value in boolean context is called falsy
Examples:
=----------
0,NaN,empty string "",undefined,null,false 
*/

console.log(Boolean(190));//true
console.log(Boolean(-190));//true
console.log(Boolean("Jay"));//true
console.log(Boolean(89.77));//true
console.log(Boolean(true));//true

//falsy
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false


























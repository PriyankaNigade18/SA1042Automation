/*
Variable :
Name of storage where we can store some data

Variable keywords
----------------------
1.var(older javascript, not recommended to follow)
----------
1. scope: functional and Global scope
2. Redeclaration is allowed


Modern javascript
---------------
Block scope is only applicable to let and const variable


{
block scope
}

2.let
---------------
1. scope:  Block + Global scope
2.Redeclaration is not allowed
3.these variables are mutable

3.const(is like final keyword in java)
-------------------
1. scope:  Block + Global scope
2.Redeclaration is not allowed
3.these variables are immutable



*/


print();
console.log(book);

//Global scope: variable we can call everywhere  within function and outside function also we can call

var fname="Hiteshi";
let loc="Us";
const email="hiteshi@gmail.com";

console.log("-----Global variable scope------");
console.log("first name is: "+fname);
console.log(`first name is: ${fname}`);
console.log("location is: "+loc);
console.log(`email is: ${email}`);

let fun1=function()
{
    console.log("-----Global scope variable through function-----");
    console.log(`first name is: ${fname}`);
    console.log("location is: "+loc);
    console.log(`email is: ${email}`);
}

//call the function

fun1();

console.log("----------Functional scope(Local scope)------");
/*
Functional scope is local scope 
variable declared inside the function you can access within function

*/
function info()
{
    var id=101;
    let ename="Sarang";
    const orgName="Wipro";
    console.log("Calling data from functional scope.....");
    
    console.log("employee id is: "+id);
    console.log("employee first name is: "+ename);
    console.log("employee orgName is: "+orgName);
}


//call
info();

console.log("Calling data from outside the functional scope.....Error");
    
    //console.log("employee id is: "+id);//ReferenceError: id is not defined
    //console.log("employee first name is: "+ename);//ReferenceError: ename is not defined
    //console.log("employee orgName is: "+orgName);//ReferenceError: orgName is not defined

console.log("-----Block scope {}------");

//if block
if(true)
{
    const bname="chrome";
    let version=130;
    
    console.log("browser name is: "+bname);
    console.log("Browser version is: "+version);
    
}

console.log("---Calling outside block----- Error");


//console.log("browser name is: "+bname);//ReferenceError: bname is not defined
//console.log("Browser version is: "+version);//ReferenceError: version is not defined

console.log("-----------var keyword allow redeclarion ------");
var data="programming";
var data="Testing";
var data="Automation"
console.log(data);//Automation

console.log("-----------let and const keyword not allow redeclarion ------");

let num1=90;
console.log("Number 1 is: "+num1);//90
//let num1=100;//Cannot redeclare block-scoped variable 'num1'
num1=1000;//reassingment

console.log("Number 1 is: "+num1);//1000
//for const redeclartion and reassignment not allowe as it is immutable
const pi=3.14;
console.log("Pi value is: "+pi);
//const pi=88.77;//Cannot redeclare block-scoped variable 'pi'
//pi=677.77;//TypeError: Assignment to constant variable.


if(true)
{
    let x=100;
    var y=200;
    console.log("x value: "+x);
    console.log("y value: "+y);
    
    
}


    console.log("y value: "+y);
    //console.log("x value: "+x);//error


    console.log("-----------Hoisting------------");

/*
Hoisting means before declaration and initialization we can call varibales and methods

Applicable to var type and function declaration

Hoisting is not applicable to let, const and function expression
*/

console.log("book is: "+book);//undefined


var book="Fundamentals of API";
console.log("book is: "+book);


//console.log("book is: "+book1);//ReferenceError: book1 is not defined

let book2="fundamentals for Selenium";

console.log("book is: "+book2);

//console.log("book is: "+book3);//ReferenceError: Cannot access 'book3' before initialization

const book3="fundamentals of Java";

console.log("book is: "+book3);



function print()
{
    console.log("Print is calling......");
    
}

//data2();//ReferenceError: Cannot access 'data2' before initialization
    

let data2=function()
{
    console.log("Test function expression");
    
}





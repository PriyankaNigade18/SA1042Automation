/*
Javascript has two types of function
1.Function declaration(older)
2.Function Expression(Modern js)
    2.1 Anomynous function(Function without name)
    2.2 Arrow function


*/

//function declaration

function show()
{
    console.log("This is function declaration is js");
}

//call the function
show();

function add()
{
    let n1=100,n2=200;
    console.log("Addition is:"+(n1+n2));
}

//calling
add();

console.log("-------Anonymous Function---------")

//function without name: Anonymous function
let info=function()
    {
    console.log("Anonymous function calling.....")
    }

//call function
info();


console.log("------Arrow Function---------")

let data=()=>{console.log("This is arrow function....")};

//call
data();

let sum=(a,b)=>{
                console.log("Addition is: "+(a+b));
               }

//call
sum(200,300);





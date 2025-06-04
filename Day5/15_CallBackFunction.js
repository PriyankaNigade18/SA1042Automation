
/*
what is call back function or Higher order function in javascript
-------------------------------------------------------------
whenever we pass any function itself as parameter to any other function
then that function called call back function or higher order function

purpose: Javascript is asynchronus type and to handle any
asynchronus nature we use call back function




*/

//executable function: which accept two parameter
//parameter 1 is fname variable
//parameter 2 is function1 function
function greet(fname,function1)
{
    console.log("Hello   "+fname);
    //calling function1
    function1();
    
}

//call back function
function display()
{
    console.log("Lets learn Javascript call back function!");
    
}

//calling
greet("Meena",display);//display become call back
//whenever we are passing any function as argument/parameter dont write ()

console.log("-------------------------------");

function add(a,b)
{
    console.log("Addition is: "+(a+b));
    
}


function sub(a,b)
{
    console.log("Subtraction is: "+(a-b));
    
}


function calculate(num1,num2,fun)
{
    fun(num1,num2);
}

//call
calculate(100,20,sub);//sub








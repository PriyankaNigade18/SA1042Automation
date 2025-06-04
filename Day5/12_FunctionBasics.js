/*
Javascript has two types of function
1.Function declaration(older)
2.Function Expression(Modern js)
    2.1 Anomynous function(Function without name)
    2.2 Arrow function


*/

console.log("-------Function Declaration----------");

function test1()//0 parameter function
{
    console.log("Function declaration is called!");
    
}

//call
test1();

console.log("----------------------------");

function test2(id,fname)//2 parameter function
{
console.log("first name is: "+fname+" id is: "+id);

}

//call
test2(101,"Pooja");//arguments passing

console.log("---------function with return keyword-------------------");

function test3(msg)//1 parameter function
{
    return msg;
}


//call
// let res=test3("Hello Everyone!");
// console.log(res);

console.log(test3("Hi!"));


console.log("-------------");
function test4(a,b)
{
return a*b;
}

//call
console.log(test4(10,10));

console.log("-------------");

function test5(msg ,id)
{
    //return msg,id;
    return "msg is: "+msg+" id is: "+id;
}

//call

console.log(test5("Hi",101));

console.log("-------Anonymous function--------");

let test6=function(a,b)
    {
    console.log("Addition is: "+(a+b));

    }

    //call
    test6(100,20);

console.log("---------With return keyword----------");

let test7=function()
{
    return "Hello All!";
}

//call
let res2=test7();
console.log(res2);

console.log("-----arrow function---------");

let test8=()=>{
    console.log("Arrow function is calling....");
    
};

//call
test8();

console.log("-------With parameter------");


let test9=(a,b)=>{
    console.log("Multiplication is: "+(a*b));
    
}

//call
test9(90,2);

console.log("-------With return keywor------");


    let areaOfCircle=(radius)=>{
                    return (3.14*radius*radius);
                }

//call
console.log("Area is: "+areaOfCircle(10));










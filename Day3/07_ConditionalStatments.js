/*
1.simpleif: validate single true condition
2.if-else: true/false
multiple conditions
3.ladderif : multiple conditions
4.Nested if
5.Siwtch-case (key == value)


*/


console.log("----Simple if-----");

//true condition
let year=2025;

if(year === 2025)//true
{
    console.log("Current year is 2025!");
    
}

//fail condition

if(year === 2026)//false
{
    console.log("Current year is 2026");
    
}

console.log("false condition");

console.log("---------------If-else------------");
//age validation for voating

let age=10;

if(age >= 18)
{
    console.log("You are Adult...You can voat!");
    
}else
{
    console.log("You are Teanager...You can't voat!");
}

console.log("-----------ladder if-----");

// check number is positive, negative or its zero

let num=-10;

if(num > 0)
{
    console.log("number is positive");
    
}else if(num< 0)
{
     console.log("number is Negative");

}else
{
        console.log("number is Zero");

}





console.log("-----------Nested if-----");
/*
1.if marks greater than or equal to 90 --->A
2.if marks greater than or qual to 95 ---->A++
3.otherwise B grade
*/

let marks=98;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
        
    }else
    {
        console.log("A");
        
    }
}else{
    console.log("B")
    
}

console.log("-----switch case-(key == value)-----");
//traffic lights

let color="black";

switch (color)
 {
    case "red":
        console.log("Stop");
         break;
    case "yellow":
        console.log("Ready");
         break;
    case "green":
        console.log("Go");
         break;

    default:
       console.log("Wrong color!");
       
}

console.log("----------Real time scenario----");

let bname="Edge";

switch(bname.toLowerCase())
{
    case "chrome":
        console.log("Test case is executing on "+bname);
        break;  
        
        case "edge":
        console.log("Test case is executing on "+bname);
        break;  

        case "firefox":
        console.log("Test case is executing on "+bname);
        break;  

        default:
        console.log("Wrong browser!");
        
}













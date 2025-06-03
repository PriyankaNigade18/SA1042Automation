
/*
String In javscript also its an immutable class

*/

//To ignore white space before and after string : trim()

let msg="    Hello All!    ";
console.log(msg);//
console.log(msg.trim());

//2.get the total length of string : length property
let msg2="Hello All!";

console.log("Total length is: "+msg2.length);//10

//conversion : toUpperCase() toLowerCase()
console.log(msg2.toUpperCase());
console.log(msg2.toLowerCase());

//concat()

let s1="Hello All";
let s2="Welcome tolearn String in Js";

console.log(s1+" "+s2);
console.log(s1.concat(" "+s2));


//includes()
let s3="Cypress is functional and api testing tool";
console.log("test for api?:"+ s3.includes("api"));//true
console.log("test for selenium?: "+s3.includes("selenium"));//false

//charAt(index): return specific character
console.log("character at index 11: "+s3.charAt(11));//f

//indexOf(char): returns index of char
console.log("index of C char: "+s3.indexOf('C'));//0

//replace
let data="Selenium is webui automation test library, its test library";
console.log(data);
//console.log(data.replace("test","***********"));
console.log(data.replaceAll("test","*****"));


//split(regular expression): 
let tools="selenium,Appium,Cypress,postman,playwright";
console.log(tools);

let arr=tools.split(",");
for(let i of arr)
{
    console.log(i);
    
}

console.log("-------------");

//split postman

let ele1=tools.split(",")[3];
console.log(ele1);//postman

/*
validate bill
----------------
amount should be less that 10000
*/

let bill="Total amount is 5000";

//split the string
let stringdata=bill.split(" ")[3];//"5000"

//string to number
let amount=Number(stringdata);//5000

//test
if(amount<10000)
{
    console.log("Amount matched!....Test Pass!");
    
}else{
      console.log("Amount not matched!....Test Fail!");
    
}













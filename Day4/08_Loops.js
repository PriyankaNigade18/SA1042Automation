/*
1.for loop: Number of iterations are fixed
2.while loop: entry control loop,number of iterations are unknown
3.do-while loop: exit control loop, one time iteration without matter what condition it is

4.for...of loop: Iterates over a value (Array)
5.for..in loop: Iterates over index/keys (Object)

*/

console.log("-------for loop--------------");
//print hello statement 5 time
for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}
console.log("--------------------");

//print  1 to 10 number
for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("--------------------");

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}
console.log("--------------------");
//factorial for 5!=5*4*3*2*1=120

let fact=1;
for(let num=5;num>=1;num--)
{
    fact=fact*num;
}

console.log("Factorial for 5! is: "+fact);
console.log("--------while loop-------");

let i=1;

while(i<=10)
{
    console.log("Welcome");
    i++;
    
}

console.log("=========");
/*
By default for loop condition is always true

for(;;)
{
    console.log("Hi...");//infinite time hi will print
    
}*/

//sum of 100 natural numbers 
//1+2+3+4....+100=5050

let num=1,sum=0;

while(num<=100)
{
    sum=sum+num;
    num++;
}

console.log("Sum of 100 natural numbers: "+sum);

console.log("---------do while------");

let j=1;
do{
    console.log("Hi...");
    j++;
}while(j>=5);


console.log("---------do while------");

let a=10;

do{
    console.log("Hello");
    a++;
    
}while(a<=20);

















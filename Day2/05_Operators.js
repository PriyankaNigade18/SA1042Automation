/*
1.Arithmetic operators + - * / %
2.Unary operators ++ --
3.Relational Operator < <= > >= 
    equality check
    ---------------
        1.strict equality ===
        2.loose equality ==

4.Logical Operator && || !

*/


console.log("------Arithmetic Opertors------");

let num1=10, num2=5;
//console.log("Addition is: "+num1+num2);//Addition is: 105

console.log("Addition is: "+(num1+num2));
console.log("subtraction is: "+(num1-num2));
console.log("Division is: "+(num1/num2));
console.log("multiplication is: "+(num1*num2));
console.log("Modulus is: "+(num1%num2));

console.log("------Unary Opertors------");
/*
++(Increment operator) a++/++a= a=a+1
a++ : post increment
++a : Pre increment

--(Decrement operator) a--/--a= a=a-1
a-- : post decrement
--a : Pre decrement
*/

let a=100;
console.log(a);//100
console.log(a++);//100 post operator give result next time when you reuse that variable
console.log(a);//101

let b=50;
console.log(b);//50
console.log(++b);//51

let c=90;
console.log(c);//90
console.log(c--);//90
console.log(c);//89

let d=157;
console.log(d);//157
console.log(--d);//156

let num3=190;
let num4=num3++;//value assign first then increment
console.log(num3);//191
console.log(num4);//190


let num5=78;
let num6=num5++;
console.log(num5);//79
console.log(num6);//78


let num7=584;
let num8=++num7;//value increment first and then assigned
console.log(num7);//585
console.log(num8);//585


let num9=45;
let num10=++num9;
console.log(num9);//46
console.log(num10);//46


let num11=135;
let num12=num11--;
console.log(num11);//134
console.log(num12);//135

let num13=67;
let num14=--num13;
console.log(num13);//66
console.log(num14);//66











/*
Prototype is Object 
Prototype used to create reusable property(variable) and Method
*/

function Employee(id,ename)
{
this.id=id;
this.ename=ename;

}
//Reuseable variable
Employee.prototype.language="Javascript";

let e1=new Employee(101,"Sameer");
//e1.language="Javascript";
console.log("employee id is: "+e1.id+" Employee name is: "+e1.ename+" language is: "+e1.language);

console.log("--------------");

let e2=new Employee(201,"Swati");
console.log("employee id is: "+e2.id+" Employee name is: "+e2.ename+" language is: "+e2.language);

console.log("--------------------");

//Reusaable

let fname="Sagar        ";
console.log("Lenght of fname is: "+fname.length);//13

console.log("True length of fname is: "+fname.trim().length);//5

//design new method for String object
String.prototype.trueLength=function()
                {
                        return this.trim().length;
                }

console.log("True length is:"+fname.trueLength());//5


let data="   cypress is webui automation tool   ";
console.log(data.length);
console.log(data.trueLength());




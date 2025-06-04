
/*
Javascript object is key value pair

4 Ways to create Object
-----------------------
1.unsing literal way (constant data)
2.using class level
3.using Constructor Function
4.Using Object.create(): its prototype based


*/

console.log("------------Object using literal way-------");

let trainer={
        name:"Priyanka",
        job:"SDET"

        }

        console.log(trainer);
        console.log(typeof(trainer));//object

        //single data reading
        console.log("Name is: "+trainer.name);
        

        console.log("-------Iteration for object-------");
        
for(let key in trainer)
{
    console.log(" at key: "+key+" value is: "+trainer[key]);
    
}
console.log("------Object using class-------");

class Color
{
    constructor(colorName)
    {
        this.cname=colorName;
    }

    display()
    {
        console.log("Color selected is: "+this.cname);
        
    }

}

//object
let c1=new Color("Red");
c1.display();

console.log("-------Using Constructor function-------");
/*
Constructor function declared with function keyword
Name for constructor function should start with capital letter
constructor help you to initialize object
*/

function EmployeeData()
{
    //global variable
    this.empId=111;
    this.empName="Poonam";

    //method
    this.print=function()
    {
        console.log("Employee id is: "+this.empId);
        console.log("Employee name is: "+this.empName);
        
        
    }


}

//craete object
let e1=new EmployeeData();
e1.print();


console.log("-------------Using Object.create()-------");
/*
This technique is applicable for Prototype(literal way of object)
*/


//prototype/object literal
let Test={
        subject:"Testing",
        marks:100
        }

//Creates an object that has the specified prototype or that has null prototype.
       let obj= Object.create(Test);
        console.log("Subject name is: "+obj.subject);
        console.log("marks is: "+obj.marks);
        
        
















        
        






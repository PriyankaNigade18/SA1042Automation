
/*
function: group of statement to perform certain functionality
using function keyword we design function

method: Is block related to class Object 
not required to follow function keyword
*/
class StudentData
{
    
    //constructor: used to initialize Object
    //constructor always get called at the time of Object creation
    //with new keyword we are calling constructor
    constructor(i,f)
    {
        //global data
        this.id=i;
        this.fname=f;
    }

//method
/*
setData(id,fname)
{
    console.log("Data get set.....");
    
    //local variable
    // let id=101;
    // let fname="Sarang";
    //to define any data in javascript as global data use this kweyword
    //this keyword is used refer current class object variable/method.
    // this.id=101;
    // this.fname="Sarang";//hard core data
    this.id=id;
    this.fname=fname;

}*/


getData()
{
    console.log("Student id is: "+this.id);
    console.log("Student first name is: "+this.fname);
    
    
}

}

//object create
let s1=new StudentData(201,"Jay");
//s1.setData(101,"Geeta");
s1.getData();


console.log("--------------");

let s2=new StudentData(301,"Yash");
//s2.setData(102,"Kiran");
s2.getData();







/*

Wrapping of data and function together in single unit is called Encapsulation

Purpose is: data hiding/data security

real time: class,capsule

how to implement:
using (local)scope we can hide the data
using getters and setters we can provide access

*/

class Emp
{
    constructor()
    {
        //scope: private/local data
        let empId=101;
        let empSalary=50000;
    }

    //setter method
    setEmpId(id)
    {
        this.empId=id;
    }
    
    setEmpSalary(salary)
    {
        this.empSalary=salary;
    }

    //getter 
    getEmpId()
    {
        return this.empId;
    }

    getEmpSalary()
    {
        return this.empSalary;
    }




}


//object
let obj=new Emp();
obj.setEmpId(101);
console.log("Employee id:"+obj.getEmpId());

obj.setEmpSalary(7777777);
console.log("Salary: "+obj.getEmpSalary());










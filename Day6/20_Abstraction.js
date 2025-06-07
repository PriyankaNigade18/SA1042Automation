/*
Data Abstraction is way to hide internal implementation of software
and provide relevant features to user 


Purpose: Information Hiding

Rela time example: ATM 

How to implement:
Javascript closure/Scope

*/


function Employee(id,name,basicSalary)
{
    this.id=id;
    this.name=name;
    this.basicSalary=basicSalary;

     const bonus=10000;
     const calculate=function()
                    {
                        total=basicSalary+bonus;
                        console.log("Including bonus amount is: "+total);
                        
                    }
    // this.bonus=10000;
    // this.calculate=function()
    //                 {
    //                     total=this.basicSalary+this.bonus;
    //                     console.log("Including bonus amount is: "+total);
                        
    //                 }


                    this.display=function()
                    {
                        console.log("id is: "+id+"name is:"+name+"basicsalary is: "+basicSalary);
                        calculate();
                    }
                }


        //Object
        let emp1=new Employee(101,"Sarang",20000);
        emp1.display();
        // emp1.calculate();
        // emp1.bonus=50000;
        // emp1.calculate();














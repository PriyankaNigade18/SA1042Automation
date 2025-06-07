/*

Inheritance:
----------------
It is process to aquire one class properties into other class 

Purpose: 1.To avoid code duplication
         2.Reusability
         3.Runtime polymorphism

         Real time Example: Parent and child relation
Implement: extends keyword

types:
1.Single level
2.multilevel
3.Hierarchical

js not support 
4.multiple
5.hybrid 


*/

class Vehical{
    breakFeature()
     {
console.log("Vehical.......break()");

    }
    
}

class Car extends Vehical//multilevel
{

start()
{
   console.log("Car......start()");
    
}

refule()
{
   console.log("Car......refule()");
    
}

stop()
{
   console.log("Car......stop()");
    
}

}

class BMW extends Car //
{
    autoEngine()
    {
        console.log("BMW.....autoEngine()");
        
    }
}


class Audi extends Car//Hierarchical inheritance
{

    autoGear()
    {
        console.log("Audi....autonGear()");
        
    }

}

//execution
console.log("Parent class Object: only parent method we can call");
let c1=new Car();
c1.start();//individual
c1.refule();//individual
c1.stop();//individual
c1.breakFeature();//inherited



console.log("Child class object: Parent+child method")
let b1=new BMW();
b1.autoEngine();//individual
b1.start()//inherited
b1.refule();//inherited
b1.stop();//inherited
b1.breakFeature();//inherited


let a1=new Audi();
a1.autoGear();//individual
a1.start();//inherited
a1.refule();//inherited
a1.stop();//inherited
a1.breakFeature();//inherited

















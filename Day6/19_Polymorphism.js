
/*
    Polymorphism:
    One thing(Method) we can reuse in multiple form

    Purpose: Reusability

    Types:
    =======
    1.Compile time polymorphism(Method overloading)
    2.Run time polymorphism(Method overriding)

    Note:
    Javascript is interpreter based language so It does not support
    compile time polymorphism/method overloading

    Implement: Using inheritance


*/

/*
Method overloading is possible when same name method we reuse
in same class multiple number of time 
with different signature
1.Number of arguments
2.Change the type of arguments
3.order of argument

In Js it is not supported
*/
class Test
{


    print()
    {
        console.log("Print 1 is calling.....");
        
    }

//number of argument
    print(id,name)
    {
        console.log("Print 2 is calling with id & name....."+id+" : "+name);
        
    }

    //change the type
    print(id1,id2)
    {
    console.log("Print 3 is calling with both id....."+id1+" : "+id2);
    }

    //change order
    print(name,id)
    {
        console.log("Print 4 is calling with id & name....."+id+" : "+name);
        
    }

    print(msg)
    {
        console.log("Bye everyone!....this is msg");
        
    }

}

//object
let t1=new Test();
t1.print(101,"Shardul");

console.log("--------------------------");

//method overriding supported
/*
When two classes are in relation and Parent and child have
same name and same syntax method then
child class override parent class method

*/

class Fruit
{
    eat()
    {
        console.log("Enjoy Fruit.....");
        
    }
}

class Orange extends Fruit
{

    eat()
    {   console.log("Enjoy Fruit.....");
        console.log("I am Orange.");
        
    }
}


//object
console.log("Parent object: parent method");
let f1=new Fruit();
f1.eat();

console.log("child object: parent+child");
let o=new Orange();
o.eat();









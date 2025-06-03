/*
break: exit from switch and loop body

continue: skip the certain part of the code

*/

for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;//exit from loop/switch
    }else
    {
        console.log(i);
        
    }
}

console.log("-----------------");

for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        continue;//skip the certain part of code and continue iteration till the last
    }else
    {
        console.log(i);
        
    }
}




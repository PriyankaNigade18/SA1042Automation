



//synchronus
/*
console.log("Program started......");

for(let i=1;i<=5;i++)
{
    console.log("Iteration is: "+i);
    
}
console.log("Program ends......");

*/

//Asynchronus task

// console.log("Program started......");

// setTimeout(()=>{console.log("Waiting for 2sec task to completed....");
//     },2000);

// console.log("Program ends........");






/*
In js every async function returns some promise
Promise is class in js
Promise has 3 state 1.pending 2.resolved 3 reject
*/

//design promise
function makePizza()
{
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Pizza is ready in 3 sec"),3000);
    })
    
}

async function placeOrder()
{
    console.log("First make order.....");
    console.log("Waiting.............");
    const result= await makePizza();
    console.log(result);
}
//call 
placeOrder();























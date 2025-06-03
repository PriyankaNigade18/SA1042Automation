/*

Data structure: It is the way to represent data where we can store and perform
operations on data

Array is static data structure

Array is collection of similar type of data/object

Array store data as per index position (indexing starts with 0)

Types of array
-------------
1.single dimension array(1D)
2.multi dimension array(2D)

Ways to declare an array(java)
-------------------------
1.using new keyword
2.Using literal way(constant): javascript way

In javascript multiple methiod support is available


*/

console.log("-----single D Array---------");

let arr=[10,20,30,40,50];
console.log("Total size of array: "+arr.length);//5
//single element from array
console.log("array value at index 4:"+arr[4]);//50
//test for wrong index
console.log("array value at index 9:"+arr[9]);
console.log(arr);
console.log("-----Iteration using simple for loop------");

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}


console.log("-----Iteration using for...of loop------");
//for..of loop iterates over values: array
for(let e of arr)
{
    console.log(e);
    
}

console.log("-------for... in loop------");
//for... in loop: iterates over index/keys(Object/map)

for(let e in arr)
{
console.log(e);

}
//print index and values

console.log("------------------");

for(let i in arr)
{
    console.log("at index: "+i+" value is: "+arr[i]);
    
}


console.log("--------------Methods Of Array---------");

//To add elements in array: push() and unshift()

let color=["Red","blue","yellow","green"];
console.log("Total colors are: "+color.length);//4
console.log(color);//[ 'Red', 'blue', 'yellow', 'green' ]


//push():Appends new elements to the end of an array, and returns the new length of the array.
color.push("white");
console.log(color);//[ 'Red', 'blue', 'yellow', 'green', 'white' ]

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
color.unshift("Pink");
console.log(color);//[ 'Pink', 'Red', 'blue', 'yellow', 'green', 'white' ]

console.log("---------------------");

//remove elements from array pop() and shift()
//pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let lastcolor=color.pop();
console.log(lastcolor);//white

console.log(color);//[ 'Pink', 'Red', 'blue', 'yellow', 'green']


//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let firstcolor=color.shift();
console.log(firstcolor);//pink
console.log(color);//['Red', 'blue', 'yellow', 'green']

//splice():Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//splice(startindex,deletecount,replacement)
//delete yellow
///['Red', 'blue', 'yellow', 'green']
//   0       1       2         3
let deletedcolor=color.splice(2,1);//start with 2index position and delete 1 element

console.log(deletedcolor);//yellow

console.log(color);//[ 'Red', 'blue', 'green' ]

console.log("-----------------");
//delete blue and insert black


let deletedcolor2=color.splice(1,1,"black");
console.log(deletedcolor2);//blue
console.log(color);//[ 'Red', 'black', 'green' ]

console.log("-------------------");

let fname=["Riya","Sameer","Raj","Kiran","Jay","Yash"];
console.log(fname);//

//slice():Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let slice1=fname.slice(1,3);//start index with 1 and end index with 3(lastindex -1)
console.log(slice1);//[ 'Sameer', 'Raj' ]

//upto kiran
let slice2=fname.slice(1,4);//starts with 1index and ends with 4-1=3rd index
console.log(slice2);//[ 'Sameer', 'Raj', 'Kiran' ]

let empdata=["Sarang",'M',40,768767,"Pune"];
console.log(empdata);



console.log("----Multi D Array-------");


let loginData=[["UserName","Password"],
                    ["Admin","admin123"],
                            ["Raj","test123"],
                                ["Kiran","test123"]];

            console.log(loginData);
                                
console.log("-----skip heading----");
for(let i=1;i<loginData.length;i++)
{
    console.log(loginData[i]);
    
}

console.log("-----------------");

//single record
console.log(loginData[2]);
















































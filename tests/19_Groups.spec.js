
import {test,expect} from '@playwright/test';

test.describe.only("Test Suite 1(Group 1)",()=>{

console.log("Group 1 is executing......");

    test.only("Test Case 1",async({page})=>{

    console.log("Test Case 1 executing.......");
    
})

test("Test Case 2",async({page})=>{

    console.log("Test Case 2 executing.......");
    
})



})

test.describe("Test Suite 2(Group 2)",()=>{

    console.log("Group 2 is executing......");
    
test("Test Case 3",async({page})=>{

    console.log("Test Case 3 executing.......");
    
})

test("Test Case 4",async({page})=>{

    console.log("Test Case 4 executing.......");
    
})
})


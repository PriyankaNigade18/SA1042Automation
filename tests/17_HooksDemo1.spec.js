

import {test,expect} from '@playwright/test';
import { log } from 'node:console';


//hooks
test.beforeEach(async()=>{
    console.log("Before each executes before every test case");
    
})
test.afterEach(async()=>{
    console.log("Aftereach executes after every test case");
    
})

test.beforeAll(async()=>{
    console.log("Before all executes before all test cases one time");
    
})

test.afterAll(async()=>{
    console.log("After all executes after all test cases one time");
    
})

test("Test case1",async()=>{
console.log("Test case1 is executing.....");

})


test("Test case2",async()=>{
console.log("Test case2 is executing.....");

})

test("Test case3",async()=>{
console.log("Test case3 is executing.....");

})
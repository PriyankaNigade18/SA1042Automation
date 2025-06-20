
//step1: import playwright library

//way1: using inport statement
import {test,expect} from '@playwright/test';

//way2: using node function you can import playwright library
//const {test,expect}=require('@playwright/test')

//Step2: create test case -test()
/*
test() accept two arguments
1.description of test
2.asynchronus call backback function

In Playwright webapp test we are adding on fixture in call backfunction
Fixture in Playwright its environment
1.page: most commonly we use page (app)
2.request: during api testing we use request fixture
3.browser: during window handling we use browser fixture
4.browser-context: to customize browser session we use browser context fixture

*/
test("This test for launch of Google application",async({page})=>{
    
   //To open any application
await page.goto("https://www.google.com");

})













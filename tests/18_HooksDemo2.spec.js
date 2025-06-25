

import {test,expect} from '@playwright/test';


let page;

//precondition: user must be login
test.beforeEach(async({browser})=>{

    //create new page and that page instance you can share with every test case
    page=await browser.newPage();

    await page.goto("https://automationplayground.com/crm/login.html");
    await page.locator("#email-id").fill("test@gmail.com");
    await page.locator("#password").fill("test123");

    await page.locator("#submit-id").click();

    //await page.getByText("Submit").click();


})

test("Test 1 is to add new customer",async()=>{

    await page.locator("#new-customer").click();

})


test("Test 2 for logout",async()=>{
await page.getByText("Sign Out").click();
})
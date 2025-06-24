

import {test,expect} from '@playwright/test';

test("Test for Basic WebElement",async ({page})=>{

    //open application
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");

    //emailid
    await page.getByPlaceholder("E-Mail Address").fill("test123@gmail.com");

    //wait
    await page.waitForTimeout(1500);

    await page.getByPlaceholder("E-Mail Address").clear();
     //wait
    await page.waitForTimeout(1500);

    await page.getByPlaceholder("E-Mail Address").fill("test24@gmail.com");

     //wait
    await page.waitForTimeout(1500);

})


test("Test for Chechbox status",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    //status of current checkbox: first checkbox should be uncheck

    await expect(page.locator("//input[@type='checkbox']").first()).not.toBeChecked();

    //click--->checked
    await page.locator("//input[@type='checkbox']").first().check();


//last check box should be checked
await expect(page.locator("//input[@type='checkbox']").last()).toBeChecked();

//click--->uncheck
await page.locator("//input[@type='checkbox']").last().uncheck();



})

test.only("Test for multiple Checkbox",async({page})=>{

await page.goto("https://www.letskodeit.com/practice");

await page.locator("//div[@id='checkbox-example-div']//fieldset//input").first().check();

await page.waitForTimeout(1500);
//index total checkboxes =3 index=1
await page.locator("//div[@id='checkbox-example-div']//fieldset//input").nth(1).click();
console.log("done!.....");


await page.waitForTimeout(1500);
await page.locator("//div[@id='checkbox-example-div']//fieldset//input").last().check();

await page.waitForTimeout(1500);

})
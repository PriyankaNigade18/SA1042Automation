/*
Dropdown
==============
1.select tag based: selectOptions()
2.dropdown without select tag: locators


*/

import {test,expect} from '@playwright/test';


test("Automate select based dropdown",async({page})=>{

    await page.goto("https://www.facebook.com/");

    //click on Create new account button
    //await page.locator("//a[text()='Create new account']").click();

    await page.getByText("Create new account").click();

    //identify dropdown-->select option{visible text,label,value,index}
    await page.locator("#month").selectOption("Dec");//visible text
    await page.waitForTimeout(2000);
    //label
    await page.locator("#month").selectOption({label:"Feb"});//label=visible text

    await page.waitForTimeout(2000);
    //value
    await page.locator("#month").selectOption({value:"11"});//Nov
    await page.waitForTimeout(2000);
    //idex
    await page.locator("#month").selectOption({index:6});



    await page.waitForTimeout(2000);

})


test.only("Test for total options from dropdown",async({page})=>{


    await page.goto("https://www.facebook.com/");

    //click on Create new account button
    await page.getByText("Create new account").click();

    //identify dropdown -->click()
    await page.locator("#month").click();

    //all otions from dropdown
    let allOptions=await page.locator("//select[@id='month']//option").all();//12 options are matching
    console.log("Total options for Month dropdown are:"+allOptions.length);

    let expMonth="Dec";

    for(let option of allOptions)
    {
        console.log("Text is: "+await option.textContent());
        let actText=await option.textContent();
        if(await actText.includes(expMonth))
        {
            //await option.click(); because its select based dropdown
            await page.locator("#month").selectOption({label:actText});
            await page.waitForTimeout(1500);
            break;
        }
        
    }

await page.waitForTimeout(2000);    





})






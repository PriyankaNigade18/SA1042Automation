/*

Playwright support all the locator strategies whatever we have in selenium 
Playwright base strategy we use as xpath
Playwright has build in support locators also

How to locate the webelement: locator()
await page.locator("xpath,id...etc")

To enter/type anything in textbox:  fill()
To click: click()

Xpath:
========
//tagname[@attribute='value']

Methods
=============
text(),normalize-space(),contains(),startswith()

//cssSelector
==================
tagname with id,classname and attribute
tagname#id
tagname[attribute='value']
tagname.className

Scenario: Automate Google search box: enter java in google search box


*/


import {test,expect} from '@playwright/test';

test("Test for google search with valid keyword",async({page})=>{


//open application
await page.goto("https://www.google.com");

//identify search box and enter java in search Box
//await page.locator("//textarea[@id='APjFqb']").fill("Java");

//await page.fill("//textarea[@id='APjFqb']","testng");

let searchBoxEle=await page.locator("//textarea[@id='APjFqb']");

//validate 
if( await searchBoxEle.isVisible() && await searchBoxEle.isEnabled)
    {

        await searchBoxEle.fill("selenium");
    }

//validate value selenium-assertion
await expect(searchBoxEle).toHaveValue("selenium");
console.log("Value matched...Test pass");



//wait
await page.waitForTimeout(2000);




})





















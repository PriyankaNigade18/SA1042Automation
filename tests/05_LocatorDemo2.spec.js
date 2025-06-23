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
*/

//login and logout
import {test,expect} from '@playwright/test';

test("Test for logina and logout",async({page})=>{

await page.goto("https://www.saucedemo.com/v1/");

//username using cssSelector with id
await page.locator("#user-name").fill("standard_user");

//password
await page.locator("//input[@placeholder='Password']").fill("secret_sauce");

//login
await page.locator("//input[@value='LOGIN']").click();

//assertion on next page -inventory
let appNextPageUrl=await page.url();
await expect(appNextPageUrl.includes("inventory")).toBeTruthy();


await expect(page).toHaveURL(/inventory/);

//logout-homework




//wait
await page.waitForTimeout(2000);




})









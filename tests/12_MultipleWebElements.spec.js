
import {test,expect} from '@playwright/test';

test("Test for Google search scenario",async({page})=>{

await page.goto("https://www.google.com/");

//search keyword playwright
await page.locator("//textarea[@id='APjFqb']").fill("playwright");

//wait 
await page.waitForTimeout(2000);

//get the options and print in the console:jquery $$
let allOptions=await page.$$("(//ul[@class='G43f7e'])[1]//li//div[@class='wM6W7d']//span");//10 matched

//let allOptions=await page.locator("(//ul[@class='G43f7e'])[1]//li//div[@class='wM6W7d']//span").all();

//In playwright to get the text of element: textContent()
//iterate option
for(let option of allOptions)
{
    console.log("Text Is: "+await option.textContent());
    
}


await page.waitForTimeout(2000);


})




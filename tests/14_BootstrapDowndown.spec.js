

import {test,expect} from '@playwright/test';

test("Tets for Make My trip dropdown",async({page})=>{

await page.goto("https://www.makemytrip.com/");

//close the popup 
await page.locator("//span[@class='commonModal__close']").click();

//click on from dd
await page.locator("//input[@id='fromCity']").click();

//send the location pune
await page.getByPlaceholder("From").fill("Pune");

await page.waitForTimeout(2000);

let allOptions=await page.locator("//ul[contains(@class,'suggestions-list')]//li//span[contains(@class,'makeFlex ')]//span").all();

let exp="Shirdi Airport";

for(let i of allOptions)
{
    let actText=await i.textContent();

    console.log(actText);
    if(actText.includes(exp))
    {
        i.click();
        break;
    }
    
}

console.log("done!");


await page.waitForTimeout(2000);



})
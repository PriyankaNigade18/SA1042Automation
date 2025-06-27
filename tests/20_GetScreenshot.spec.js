
import {test,expect} from '@playwright/test';

test("Get the screenshot",async({page})=>{

await page.goto("https://www.amazon.in/");
//screenshot will be stored in default project location
await page.screenshot({path:"amazon.png"});


//get the screenshot in folder

await page.screenshot({path:"tests/Screenshots/"+"Amazon.png"});

//fullpage screenshot

await page.screenshot({path:"tests/Screenshots/"+"FullPageAmazon.png",fullPage: true});

})
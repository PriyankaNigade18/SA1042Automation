/*
ok: accept()
get Text: message()
cancel: dismiss()
prompt: accpet("prompt")

*/

import {test,expect} from '@playwright/test';
import { log } from 'console';

test("Basic alert/dialog handling",async({page})=>{


//await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.goto("https://www.letskodeit.com/practice");

//add event and handle it
await page.on('dialog',async dialog=>{

console.log("Alert text is: "+await dialog.message());
//ok-accept()
await dialog.accept();


});

//click on button --->alert open
//await page.locator("//button[text()='Click for JS Alert']").click();
await page.locator("#alertbtn").click();

//validate
//await expect(await page.locator("#result")).toHaveText("You successfully clicked an alert");

console.log("Basic Alert handled!");

await page.waitForTimeout(2000);
})



test.only("Confirmation dialog handling",async({page})=>{



await page.goto("https://www.letskodeit.com/practice");

//add event and handle alert first

await page.on('dialog',async dialog=>{
    console.log("Alert text is: "+await dialog.message());
    //cancel
    await dialog.dismiss();
    
})

//open 
await page.locator("#confirmbtn").click();

await page.waitForTimeout(2000);


}
);






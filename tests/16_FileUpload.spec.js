

import {test,expect} from '@playwright/test';

test("Test for File upload",async ({page})=>{


await page.goto("https://www.file.io/");

await page.getByLabel("Upload Files".trim()).setInputFiles("tests/Files/Appiumsetup.txt");

console.log("File uploaded!");

await page.waitForTimeout(2000);


})
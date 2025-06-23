
import {test,expect} from '@playwright/test';

test("Navigation in Playwright",async({page})=>{

//open google application
await page.goto("https://www.google.com");

//wait
await page.waitForTimeout(1500);

//navigate facebook application
await page.goto("https://www.facebook.com");

//wait
await page.waitForTimeout(1500);

//back
await page.goBack();//Google

//wait
await page.waitForTimeout(1500);

//forward
await page.goForward();//facebook

//wait
await page.waitForTimeout(1500);

//refresh page
await page.reload();







})
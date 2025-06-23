
import {test,expect} from '@playwright/test';

test("Validate Google title and url address",async({page})=>{


//open application goto()
await page.goto("https://www.google.com/");


//Validate title of app should be Google:toHaveTitle("fullTitle")
await expect(page).toHaveTitle("Google");

//validate url of application:toHaveUrl("full url"):exact match
await expect(page).toHaveURL("https://www.google.com/");

//validate Url with Partial text google: use regular expression /partail text/
//await expect(page).toHaveURL("google");//fail-wrong syntax

await expect(page).toHaveURL(/google/);//partial match

//to get current title : title()
let appTitle=await page.title();
console.log("Application title is: "+appTitle);

//assertion on variable:expecting current application title should be google and assertion should be true 
await expect(appTitle.includes("Google")).toBeTruthy();//pass(positive)

//falsy: title should not be GoogleApp
await expect(appTitle.includes("GoogleApp")).toBeFalsy();//pass(negative)


//to get current url: url()
let appUrl=await page.url();
console.log("Application url is: "+appUrl);

//url should contains https
await expect(appUrl.includes("https")).toBeTruthy();









})
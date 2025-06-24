
import {test,expect} from '@playwright/test';


test("Test Soft assertion",async({page})=>{


await page.goto("https://www.saucedemo.com/v1/");

let expUrl="https://www.saucedemo.com/v1/";

//full url match
await expect.soft(page).toHaveURL(expUrl);

//partial url match
await expect.soft(page).toHaveURL(/saucedemo/);

//validate full title-OrangeHRM
await expect.soft(page).toHaveTitle("Swag Labs");

//validate partial title match HRM
await expect.soft(page).toHaveTitle(/Labs1234/);

//webElements
let userNameEle=await page.getByPlaceholder("Username");


//test for visible
await expect.soft(userNameEle).toBeVisible();

//test for enability
await expect.soft(userNameEle).toBeEnabled()

//test for editable
await expect.soft(userNameEle).toBeEditable();

//enter data-validate data/value
await userNameEle.fill("Jay");

await expect.soft(userNameEle).toHaveValue("Jay");










})
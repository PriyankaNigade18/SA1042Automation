
import {test,expect} from '@playwright/test';


test("Test Hard assertion",async({page})=>{


await page.goto("https://www.saucedemo.com/v1/");

let expUrl="https://www.saucedemo.com/v1/";

//full url match
await expect(page).toHaveURL(expUrl);

//partial url match
await expect(page).toHaveURL(/saucedemo/);

//validate full title-OrangeHRM
await expect(page).toHaveTitle("Swag Labs");

//validate partial title match HRM
await expect(page).toHaveTitle(/Labs1234/);

//webElements
let userNameEle=await page.getByPlaceholder("Username");


//test for visible
await expect(userNameEle).toBeVisible();

//test for enability
await expect(userNameEle).toBeEnabled()

//test for editable
await expect(userNameEle).toBeEditable();

//enter data-validate data/value
await userNameEle.fill("Jay");

await expect(userNameEle).toHaveValue("Jay");










})
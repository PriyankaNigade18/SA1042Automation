
/*
page.getByRole(): Used to locate elements by explicit and implicit accessibility attributes.
page.getByText(): Used to locate elements by text content.
page.getByLabel(): Used to locate form controls by associated label text.
page.getByPlaceholder (): Used to locate inputs by their placeholder attribute
page.getByAltText(): Used to locate elements, typically images, by their text alternative.
page.getByTitle(): Used to locate elements by their title attribute.
page.getByTestId(): Used to locate elements based on their data-testid attribute (other attributes can be configured).

*/
import {test,expect} from '@playwright/test';

test("Test for BuiltIn locators in Playwright",async({page})=>{

await page.goto("https://automationplayground.com/crm/");


//link: getByRole()
await page.getByRole("link",{name:"Sign In"}).click();

//emailid: getByPlaceholder()
await page.getByPlaceholder("Enter email").fill("test@gmail.com");

//password : getByLabel()
await page.getByLabel("Password").fill("test123");

//checkboxc by role: click() check() uncheck()
await page.getByRole("checkbox",{name:"Remember me"}).check();

//submit button by text():visible Text
await page.getByText("Submit").click();


//wait
await page.waitForTimeout(2000);









})










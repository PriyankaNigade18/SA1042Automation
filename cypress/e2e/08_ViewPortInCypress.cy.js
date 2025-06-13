
describe("Test Maximize and minimize browser window In Cypress",()=>{

it("Test for viewport ",()=>{

//maximize the browser window
cy.viewport(1920,1080);

cy.visit("https://www.amazon.in/");


cy.wait(2000);

//minimize(small size)
cy.viewport(550,300);


cy.wait(2000);

cy.viewport("iphone-8");


})






})
/*
Hooks are run before and after test case or suite
cypress support only 4 hooks
1.before()
2.after()

3.beforeEach()
4.afterEach()
*/

describe("Test Hooks",()=>{

//adding hooks
before(()=>{
    cy.log("Before hook executes only once before all test cases execution")
})

after(()=>{
    cy.log("After hook executes only once after all test cases execution")
})

beforeEach(()=>{
    cy.log("BeforeEach executes before every test case");
     cy.visit("https://automationplayground.com/crm/");
})

afterEach(()=>{
    cy.log("AfterEach executes after every test case");

    cy.url().then((appUrl)=>{
        cy.log("Current application url is: "+appUrl);
    })
})


it("Test Case 1 for SignIn link validation for CRM app",()=>{

   // cy.visit("https://automationplayground.com/crm/");

    //if signinlink in visible then do click on it
    cy.contains("Sign In").should("be.visible").click();

    //assertion
    cy.url().should("include","login");
    cy.log("User navigated to login page!")

});

it("Test Case 2 for Login validation for CRM app",()=>{

//cy.visit("https://automationplayground.com/crm/");

//click on signin
cy.contains("Sign In").click();

//email
cy.get("#email-id").type("test@gmail.com");

//password
cy.get("#password").type("test123");

//submit
cy.get("button").click();


})




})
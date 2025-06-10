
/*
To open any webapplication
------------------------------
cy.visit("url")

To get the current title of application
---------------------------------
cy.title()

To get the current url of application
--------------------------------------
cy.url()


*/


describe("This is for launching web applications",()=>{


it("This is test for Launching Google application",()=>{

cy.visit("https://www.google.com/");
cy.log("Google application is open!");
    
})

it("This is test for launching Amazon application",()=>{

    cy.visit("https://www.amazon.in/");
    cy.log("Amazon application launch!...")
})






})







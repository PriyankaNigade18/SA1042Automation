/*
Xpath is path of webelement from any html or xml document
Xpath identify element directly from html DOM(document object model)

Types
-----------
1.Absolute xpath
2.Relative xpath

Syntax:
------------
//tagname[@attribute='value']

multiple methods
------------------
1.text():visible text

2.normalize-space():visible text

3.contains():partial things
-------------
//tagname[contains(@attribute,'partail value')]

4.startsWith()

Xpath Axies
------------
following
preceding


*/



describe("Test app using xpath",()=>{

it("Automate login with xpath",()=>{

    //open application
    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login");

    //email
    cy.xpath("//input[@id='input-email']").type("test24@gmail.com");

    //password
    cy.xpath("//input[@type='password']").type("test123");


    //click login button

    cy.xpath("//input[contains(@class,'btn-primary')]").click();

    //assertion on url
    cy.url().should("include","account/account");
    cy.log('User navigated to account page...');

})






})





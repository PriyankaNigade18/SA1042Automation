
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

Cypress support inbuild assertion
---------------------------------
Implicit(Inbuild)
---------------------
should()
and()

Explicit
----------------------
expect()---BDD
assert()--TDD

*/

describe("Validate title and url of application",()=>{

//pass scenario
it("Validate valid title of Google",()=>{

    cy.visit("https://www.google.com/");

    //to get the title: title()
    cy.title().should("eq","Google");//eq: exact match

    cy.log("Title is: "+cy.title());
    cy.log("Url is: "+cy.url());

    //to get the url: url()
    cy.url().should("eq","https://www.google.com/");

})


//fail scenario
it("Validate Invalid title of Google",()=>{

    cy.visit("https://www.google.com/");

    //cy.title().should("eq","GoogleApp");//invalid title added

    //wrong url
    cy.url().should("eq","https://www.google.co/")
})





})








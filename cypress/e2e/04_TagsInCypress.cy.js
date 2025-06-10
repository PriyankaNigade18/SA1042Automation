
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

Tags in cypress
----------------
it.only(): execution only the specific test case


it.skip(): test case will skip from current  execution

tags applicable to test cases and suite level also


*/

describe("Suite1:Validate title and url of application",()=>{

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
it.skip("Validate Invalid title of Google",()=>{

    cy.visit("https://www.google.com/");

    //cy.title().should("eq","GoogleApp");//invalid title added

    //wrong url
    cy.url().should("eq","https://www.google.co/")
})


it("Test for crm app launch",()=>{
    cy.visit("https://automationplayground.com/crm/");

})

})

//suite2

describe.only("Sutie 2: Lanch application..",()=>{


    it.skip("Test for tutorial open cart application",()=>{
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login")
    })

      it("Test for orange hrm application",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})








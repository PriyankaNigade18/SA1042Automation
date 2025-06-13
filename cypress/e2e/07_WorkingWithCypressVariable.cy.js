/*
To work with any single element of title or url 
use then()

To work with multiple element and for storage we use each()

Scenario:To get the title and store title into variable and print it
-------------------------------------------------------------------
cy.title().then((nameofVaribale)=>{
    
    cy.log(nameOfVariable)
    
    })

Scenario:To get the Url and store title into variable and print it
-------------------------------------------------------------------
cy.url().then((navmeOfVariable)=>{
    cy.log(nameOfVariable)
    })

Scenario: get the element and store it into variable and get the text of element
------------------------------------------------------------------
//for webelement add $sign for declaring variablename
cy.get("locator strategy").then(($variableName)=>
    {
    cy.log("Text is: "+$variableName.text())
    })



*/

describe("Understand variables in cypress",()=>{

it("Get the title/url and store into variable",()=>{

    cy.visit("https://www.google.com/");
   // cy.log("Title of application is:"+cy.title());//not see the result

    //get the title-->store it --->print 
    cy.title().then((appTitle)=>{//appTitle is name of variable which holds current title
        cy.log("Application title is: "+appTitle);
    })

    //get the url and store into variable and print
    cy.url().then((appUrl)=>{//appUrl is name of variable

        cy.log("Current Url is: "+appUrl);
    })

});

it("Test for Element text",()=>{

    cy.visit("https://automationplayground.com/crm/");

    cy.contains("Customer Service").then(($logoEle)=>{

        let eleText=$logoEle.text();
        cy.log("Text of Application logo is: "+eleText);

    })
})

it.only("Test for WebElement interaction using variable",()=>{

cy.visit("https://automationplayground.com/crm/");

//click on SignIn
cy.get("#SignIn").click();

//enter email into emailid field with variable
cy.get("#email-id").then(($emailEle)=>{

    //click()
   cy.wrap($emailEle).click();

    //type()
    cy.wrap($emailEle).type("test@gmail.com");
})






})




})
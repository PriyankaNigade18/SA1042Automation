/*
For single webelement interaction we use then()

For multiple webelements we use each()
*/

describe("Test multiple webelements",()=>{

it("Test Google search scenario",()=>{
/*
search for cypress and get the all options into console
*/

cy.visit("https://www.google.com/");

cy.get("#APjFqb").type("cypress");

//for all 10 options
cy.get("ul.G43f7e>li").each(($allOptions)=>{

    cy.log("Text is: "+$allOptions.text())


})
});

it.only("Test for attribute and text",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//total hyperlinks are 5
cy.get("a").should("have.length",5);
/*
get all links text and get href attribute value in console
*/
cy.get("a").each(($allLinks)=>{

    //to get any attribute value in cypress method is: attr()
cy.log("Attribute  href value is: "+$allLinks.attr("href"));

    //to get any element text method is text()
    cy.log("Text is: "+$allLinks.text());

    let expectedLink="//www.youtube.com/c/OrangeHRMInc"
    if($allLinks.attr("href").includes(expectedLink))
    {
        cy.log("Link found...Test Pass!");

        //click on same link
        cy.wrap($allLinks).click();
    }


})



})





})
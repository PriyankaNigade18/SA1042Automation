/*
find() is applicable with get()
It help to identify only decedent element
*/


describe("Test find() in cypress",()=>{

it("Test for find()",()=>{

    cy.visit("https://tutorialsninja.com/demo/index.php?route=account/register");

    //parent--->find decendent
    cy.get("div.list-group").find("a").each(($option)=>{

        //total 13 options
        cy.log($option.text());

        if($option.text().includes("Forgotten Password"))
        {
            cy.wrap($option).click();
        }
    })


})

})
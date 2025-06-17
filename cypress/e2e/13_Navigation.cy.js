

describe("Test navigation fo app",()=>{

    it("Test navigation for amazon",()=>{

    //open application
        cy.visit("https://www.amazon.in/");

        cy.title().should("include","India");
        cy.log("Home page open!")

        cy.wait(2000);

        //open Mobiles page
        cy.get("ul.nav-ul>li:nth-child(5)>div>a").click();

        cy.title().should("include","Phones");
        cy.log("Mobiles page open!");

        //Navigation : cy.go(back/forward)
//  Mobiles page--->amazon home page

cy.wait(2000);
cy.go("back");

 cy.title().should("include","India");
cy.log("Home page open!")

        cy.wait(2000);
        //amazon to mobiles page
        cy.go("forward");


    cy.title().should("include","Phones");
        cy.log("Mobiles page open!");


        cy.wait(2000);
        
        //refresh Mobiles page 
        cy.reload();


    })





})
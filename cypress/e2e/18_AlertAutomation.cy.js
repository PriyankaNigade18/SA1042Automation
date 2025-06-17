/*

Cypress automatically handle alert
Ok button

*/

describe("Automation for alerts",()=>{
    it("Test basic alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.contains("Click for JS Alert").click();

        //manually we wanted to handle there you can write cypress event for ok button
        cy.on("window:alert",(alt1)=>{

            expect(alt1).to.equal("I am a JS Alert");
        })

cy.get("#result").should("have.text","You successfully clicked an alert");




   /*
        //alert window open

    //assertion:as alerts are automatically handled by cypress
    cy.get("#result").should("have.text","You successfully clicked an alert");
    */




    })

    it("Test confirmation alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
//how to click on cancel
cy.contains("Click for JS Confirm").click();
//alert will open and handled by cypress automatically
//cy.get("#result").should("have.text","You clicked: Ok");

//to perform cancel button action
cy.on("window:confirm",()=>false);
cy.get("#result").should("have.text","You clicked: Cancel");



    })




it.only("Automate prompt alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");


    //before opening alert take full control of window and make stub(dummy)
    cy.window().then((win)=>{//win is variable name

        cy.stub(win,"prompt").returns("Bye Everyone!");
    })

    cy.contains("Click for JS Prompt").click();
    cy.get("#result").should("have.text","You entered: Bye Everyone!");



})









})
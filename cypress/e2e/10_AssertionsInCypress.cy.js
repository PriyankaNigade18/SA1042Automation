/*
Cypress support two types of assertion
----------------------------
1.Implicit(Inbuild Assetion)
2.Explicit

Assertions help to validate current status of application

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


describe("Test Cypress Assertions",()=>{


it("Test for implicit assertion should() and()",()=>{

//open application
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//assert current title
cy.title().should("eq","OrangeHRM");//exact match
cy.title().should("include","HRM");//partial match
cy.title().should("contain","Orange");//partial match

//assertion using and()
cy.title().should("eq","OrangeHRM").and("include","HRM").and("contain","Orange");

//text Login should be visible and should have text Login
cy.get("h5").should("be.visible").and("have.text","Login");


//test for failed value
// cy.get("input[name='username']").type("Priyanka").should("have.value","Priyanka123");
// cy.log("Test Pass only when inputvalue is same");

/*
Whenever assertion fail you will get AssertionError
By nature assertions are hard assertion type
*/

//total links should be 5
cy.get("a").should("have.length",5);
cy.log("Total Links are 5");


})


it.only("Test for Explicit assertions expect() assert()",()=>{

    //open application
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //enter username and validate its value using explicit
    //note: explicit assertion always applicable on variable

    cy.get("input[placeholder='Username']").type("Jay");

    //1.store the element into variable: then()
    cy.get("input[placeholder='Username']").then(($usernameEle)=>{

        //get the current value:val()
        let actUsername=$usernameEle.val();

        //current value should be Jay:expect() BDD
        expect(actUsername).to.equal("Jay");

        //TDD:assert
        assert.equal(actUsername,"Jay");
        



    })



})





})

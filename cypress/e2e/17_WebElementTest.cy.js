

describe("Test diffent webElements",()=>{

it("Test for checkboxes status",()=>{

cy.visit("https://www.letskodeit.com/practice");

//check that first check box should be initially unchecked
cy.get("#bmwcheck").should("not.be.checked");

//click and check it
cy.get("#bmwcheck").check();


//assert is it really checked?
cy.get("#bmwcheck").should("be.checked");


})

it.only("Test for checkbox functionality",()=>{

    cy.visit("https://www.letskodeit.com/practice");

cy.get("div#checkbox-example-div>fieldset>label>input").should("have.length",3);

//first() last()  eq(index)

cy.get("div#checkbox-example-div>fieldset>label>input").first().check();

cy.wait(1000);

cy.get("div#checkbox-example-div>fieldset>label>input").last().check();

cy.wait(1000);

cy.get("div#checkbox-example-div>fieldset>label>input").eq(1).check();


})




})
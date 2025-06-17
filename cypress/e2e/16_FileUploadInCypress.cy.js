

/*
Fixture folder used to maintain test data/file
*/

describe("Test file upload scenario",()=>{

    it("Test for file upload",()=>{

cy.visit("https://the-internet.herokuapp.com/upload");

//to select the file
cy.get("#file-upload").selectFile("cypress/fixtures/Appiumsetup.txt");


//upload
cy.get("#file-submit").click();

cy.wait(1000);

cy.get("h3").should("have.text","File Uploaded!");




    })
})
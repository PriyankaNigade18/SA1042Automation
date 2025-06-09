/*
Mocha-->Spec file-->TestSuite(describe())--->Testcase(it())

Every cypress command/method starts with cy prefix
To the log the message
-------------------------------
cy.log("---------")
*/


//trpple slash directive
/// <reference types="Cypress" />

//test suite
describe("This is first Test suite",()=>{

//test case1
it("This is Test Case1",()=>{

cy.log("This is test 1 is running........");

});

//test case2
it("This is Test Case2",()=>{
cy.log("This is test2 is running.......");
});

it("This is Test Case3",()=>{
    cy.log("This is Test3 is running.....");
})


})
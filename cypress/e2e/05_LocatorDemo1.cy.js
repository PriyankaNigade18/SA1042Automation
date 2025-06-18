/*

How to Identify any WebElement
=================================
1.Get the address of webelement
2.Identify and perform action on elements

Locator:
Adress of any webelement


Cypress provides 4 ways to locate webelement
----------------------------------------------
1.contains() : Identify web element based on visible text
-----------------
cy.contains("visible text of element");

to identify any webelement
----------------------------
cy.get(locator strategy)

2.tagname
--------------------------
cy.get("tagname of element").click();

3.Using cssSelector(Base strategy)
---------------------------
what is CssSelector ?
----------------------
CssSelectors is locator strategy to locate webelements
CssSelector travel in one direction that is parent node to child node
CssSelector is faster than xpath

 1.tagname with id
 ------------------
  Syntax
 -----------
tagname#id 

example
--------------
 <input id="src">

 input#src

 2.tagname with class
 ------------------------
  Syntax
 -----------
tagname.class

example:
<div class="abc">

div.abc

3.tagname with attribute
---------------------------
syntax:
------------
tagname[attribute='value']

example
-----------
<ul placeholder="first">

ul[placeholder='first']

*/


describe("This is the suite for locators in Cypress",()=>{


it("Test for CRM login and logout scenario",()=>{

//open application
cy.visit("https://automationplayground.com/crm/");

cy.screenshot("HomePage");
//automation for hyperlink signin-using cssselector-tagname with id
//cy.get("a#SignIn").click();

//automate Sigin with visible text:contains()
//<a>Sign In</a>
cy.contains("Sign In").click();
cy.screenshot("SignInpage");

//enter email into inputbox cyress use type():cssSelector using id
cy.get("input#email-id").type("test@gmail.com");

//enter password using cssSelector using attribute
cy.get("input[type='password']").type("test123");

//click on checkbox
/*
To Automate any radio/checkbox cypress provides
-----------------
1.check()
2.uncheck()

*/

//click on checkbox using click()
//cy.get("input#remember").click();

//click on checkbox using cypress command
cy.get("input#remember").check();

//lets add wait(pause:Thread.sleep())
cy.wait(2000);

//uncheck the checked checkbox
cy.get("input#remember").uncheck();

//lets add wait(pause:Thread.sleep())
cy.wait(2000);

//check the chebox
cy.get("input#remember").check();

//click on submit button using cssSelector className
//class="btn btn-default btn-primary"
//cy.get("button.btn").click();

//click on submit button using tagname(applicable for unique element)
cy.get("button").click();
cy.screenshot("CustomerPage");

//assertion on next page url should contains:customers
cy.url().should("include","customers");
cy.log("Authentication is valid user navigated to next page...");




})









})
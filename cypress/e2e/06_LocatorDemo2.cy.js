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


Using cssSelector Parent and child travel
-----------------------------
parent node to child node
------------------------
parentele > childele

for position based identification of element: 
---------------------------
nth-child(index)

nth-of-type(index)

syntax:
============
parent:nth-child(index)>child element tagname

or

parent>child:nth-child(index)

*/


describe("Test Orangehrm login and logout feature",()=>{

    it("This is test for Login and Logout using cssSelector",()=>{

        //open application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //enter username using cssSelector with attribute
        cy.get("input[name='username']").type("Admin").should("have.value","Admin");

        //enter password with assertion
        cy.get("input[placeholder='Password']").type("admin123").should("have.value","admin123");


        //click on Login button using tagname
        //cy.get("button").click();

        //click on Login button using attribute
        //cy.get("button[type='submit']").click();

        //click on login button using classname
        cy.get("button.oxd-button").click();

        //Assert the url : user should be navigated to dashboard page
        cy.url().should("include","dashboard");
        cy.log("User navigated to Dashboard page......!");

        //logout
        //click on arrow
        cy.get("i.oxd-userdropdown-icon").click();

        //from menu click on logout
        //cy.contains("Logout").click();

        //parent to child node
        cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)>a").click();
        cy.wait(2000);





    })






})









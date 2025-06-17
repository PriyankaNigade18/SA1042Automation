/*
Dropdown automation for <select> dropdown in cypress we have select()

we can select values based on index,visibletext,value

*/


describe("Automate Dropdown",()=>{

    it("Automation of Select tag based dropdown",()=>{
        cy.visit("https://www.amazon.in/");

        //with index
        cy.get("select#searchDropdownBox").select(3,{force: true});//Amazon Fashion

        cy.wait(2000);

        //with visible text
        cy.get("select#searchDropdownBox").select("Books",{force: true});//Books

        cy.wait(2000);

        //with value:search-alias=toys
        cy.get("select#searchDropdownBox").select("search-alias=toys",{force: true});
    })

    it("test practice dropdown select based",()=>{
        cy.visit("https://www.letskodeit.com/practice");

        cy.get("select#carselect").select(1);

        cy.wait(2000);

         cy.get("select#carselect").select("Honda");

    })

    
it.only("Test autosuggestion dropdown",()=>{
cy.visit("https://www.goibibo.com/flights/");

//close the popup
cy.get("span.logSprite.icClose").click();

//from
cy.contains("Enter city or airport").click();

//inputbox
cy.get("input[type='text']").type("p");

//to get the all options

cy.get("ul#autoSuggest-list>li>div>div>div>p>span.autoCompleteTitle").each(($option)=>{

cy.log($option.text());


})

    })



})
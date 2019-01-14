const { Given, When, Then } = require('cucumber')

//Contact Us Link

Given(/^user click on Company Overview$/, function () {
   
 dashboardLib.companyOverviewNavigation()
 var leadership = dashboardPage.leadership
 console.log(leadership)
 browser.moveTo(leadership,0,10)
 dashboardPage.leadership.click()
   
}); 

When(/^user validate leadership page with text \"([^\"]*)\"$/, function (expMessage) {
   
   commonLib.switchWindowTab()
   var officeText = commonLib.getElementText(dashboardPage.officeText)
   console.log(officeText);
   commonLib.assertElementText(dashboardPage.officeText, expMessage)
   
});

Then(/^verify leadership page by validating url$/, function () {
   
 dashboardLib.validateLeaderships()
   
});
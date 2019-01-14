const { Given, When, Then} = require('cucumber')

//#..........................Login.......................
Given(/^user has logged in$/, function () {

    loginLib.login()
    console.log("User Logged In")
});


Then(/^user gets message \"([^\"]*)\"$/, function (expMessage) {

    commonLib.assertElementText(loginPage.invalidPasswordMssg, expMessage)  
  });


When(/^user enter Username \"([^\"]*)\"$/, function (loginId) {
    loginLib.enterUsername(loginId)

});

When(/^user enter Password \"([^\"]*)\"$/, function (password) {

    loginLib.enterPassword(password)

});

Then(/^user clicks on Login button$/, function () { 

    loginPage.loginButton.click();
    console.log('Clicked on Login button');
});

Then(/^user is on Dashboard$/, function () { 

    console.log('User is on Dashboard');
});

Then(/^user lands on dashboard with title \"([^\"]*)\"$/, function (expMessage) {

    commonLib.assertElementText(loginPage.dashboardTitle, expMessage)
    console.log('User is on Dashboard');
  });


Then(/^user lands on dashboard with title \"([^\"]*)\"$/, function (expMessage) {
    browser.pause(20000)
    commonLib.assertElementText(loginPage.dashboardTitle, expMessage)
    console.log('User is on Dashboard');
});

Then(/^user scroll down the page$/, function () {
    //loginLib.login()
    browser.pause(2000)
    commonLib.mScrollDown()
    console.log('########################')
    console.log('***********scroll done*********')
    browser.pause(2000)

  });

  Then(/^user scroll up the page$/, function () {
    
    commonLib.mScrollUp()
    console.log('########################')
    console.log('***********scroll up done*********')

  });

  Then(/^user open the menu and close it using swipe$/, function () {
    loginPage.menu.click()
    console.log('########################')
    console.log('***********menu click done*********')
    commonLib.mRightSwipe()
    console.log('########################')
    console.log('***********right swipe done*********')
  
  });

  When(/^user rotate the screen$/, function () {
    commonLib.rotateScreenLandscape()
    console.log('***********rotate screen done*********')
    browser.pause(2000)
    commonLib.rotateScreenPortrait()
    console.log('***********rotate screen done*********')
    browser.pause(2000)
  });

 

  Then(/^user logsout$/, function () {
    //loginLib.logout()
    var elem = loginPage.logout
    //browser.pause(4000)
    loginPage.menu.click()
    console.log(loginPage.menu)
    loginPage.logout.click();
    console.log('User Logged Out');
    //console.log(elem);
  
  });

Then(/^user clicks OK button on alert$/, function () { 

    loginPage.okButton.click();
    console.log('Clicked on Ok button');
});

//#..........................My MTD Commission.......................

Given(/^user clicks on Gaugemeter on MTD Commission Card$/, function () { 

    var elem = mMyMTDCommissionPage.gaugemeter;
    elem.waitForExist(50000)
    elem.isExisting()
    elem.click();
    console.log('Clicked on gaugemeter');
});

Given(/^user selects Month Dec under Incremental Sales$/, function () { 

    var elem = mMyMTDCommissionPage.incSalesMonthDec;
    elem.waitForExist(50000)
    elem.isExisting()
    elem.click();
    console.log('Clicked on month Dec');
});

Given(/^user clicks on Add button$/, function () { 
    mMyMTDCommissionPage.addButton.click()
});

When(/^user lands on page with title \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mMyMTDCommissionPage.addMissingSalesTitle, expMessage)
});

When(/^user enters Product Name$/, function () { 
    mMyMTDCommissionLib.enterProductSold()
});

When(/^user selects date$/, function () { 
    mMyMTDCommissionLib.enterDate()
});

When(/^user selects quantity$/, function () { 
    mMyMTDCommissionLib.enterQuantity()
});

When(/^user enters price$/, function () { 
    mMyMTDCommissionLib.enterPrice()
});

When(/^user enters Confirmation Number$/, function () { 
    mMyMTDCommissionLib.enterConfNo()
});

When(/^user clicks on SAVE & NEW button$/, function () { 
    mMyMTDCommissionPage.savenewButton.click();
});

Then(/^missing sales is added with message \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mMyMTDCommissionPage.recordAddedMessage, expMessage)
});

//#..........................Leaderboard.......................
Then(/^user scrolls to Leaderboard$/, function () { 
    mLeaderboardPage.shareSymbol.touchAction({
        action: 'moveTo', x: 1255, y: 797 }
    )
   /*driver.touchScroll({
    el: mLeaderboardPage.shareSymbol,
    xOffset: 1255,
    yOffset: 797
  });*/
});

Given(/^user clicks on Share symbol$/, function () { 
    mLeaderboardPage.shareSymbol.click();
});

When(/^user lands on Share Leaderboard page with title \"([^\"]*)\"$/, function (expMessage) {

    commonLib.assertElementText(mLeaderboardPage.shareLeaderboardTitle, expMessage)
    console.log('User is on Dashboard');
  });

When(/^user enters Share Your Report description$/, function () { 
    mLeaderboardLib.entershareReportDescription()
});

When(/^user selects Share with tenant$/, function () { 
    mLeaderboardPage.shareWithTenantOption.click();
});

When(/^user verifies message \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mLeaderboardPage.shareWithTenantNote, expMessage)
});

When(/^user selects Share with locations$/, function () { 
    mLeaderboardPage.shareWithLocationsOption.click();
});

When(/^user verifies message \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mLeaderboardPage.shareWithLocationsNote, expMessage)
});

When(/^user selects location$/, function () { 
    mLeaderboardPage.selectLocationDropdown.click();
    mLeaderboardPage.selectLocationValue.click();
});

When(/^user selects Share with location group$/, function () { 
    mLeaderboardPage.shareWithLocationGroupOption.click();
});

When(/^user verifies message \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mLeaderboardPage.shareWithLocationGroupNote, expMessage)
});

When(/^user selects group$/, function () { 
    mLeaderboardPage.SWLGselectGroupDropdown.click();
    mLeaderboardPage.SWLGselectGroupValue.click();
});

When(/^user selects Share with a colleague$/, function () { 
    mLeaderboardPage.shareWithColleagueOption.click();
});

When(/^user verifies message \"([^\"]*)\"$/, function (expMessage) { 
    commonLib.assertElementText(mLeaderboardPage.shareWithColleagueNote, expMessage)
});

When(/^user enters Username under Share with a colleague$/, function () { 
    mLeaderboardPage.shareWithColleagueOption.setValue("testusername");
});

When(/^user clicks on Share button$/, function () { 
    mLeaderboardPage.shareWithColleagueOption.setValue("testusername");
});
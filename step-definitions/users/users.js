const { Given, When, Then} = require('cucumber')

var json = require('json-file');

Given(/^user is on Home page with title \"([^\"]*)\"$/, function (title) {

    //commonLib.assertElementText(usersPage.title, title)
    console.log('user is on Users Page');
  
  });

When(/^user enters name \"([^\"]*)\"$/, function (validusername) {

    usersLib.enterUsername(validusername)
  
  });

  Then(/^user clicks on Search button$/, function () {

    usersPage.searchButton.click();
  
  });

Then(/^user found \"([^\"]*)\"$/, function (userfound) {

    commonLib.assertElementText(usersPage.userFound, userfound)
  
  });

  Then(/^user not found with message \"([^\"]*)\"$/, function (usernotfound) {

    commonLib.assertElementText(usersPage.userNotFound, usernotfound)
  
  });



  



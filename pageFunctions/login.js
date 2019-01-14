
var json = require('json-file');
var file = json.read('./pageObjects/login.page.json');
var testData = json.read('./utilities/testData.json');

class Login {

    enterUsername(loginId){
        
        loginPage.loginTextbox.waitForExist(10000)
        loginPage.loginTextbox.setValue(loginId)
        console.log('Entered loginID');
    }
    enterPassword(password){
        loginPage.passwordTextbox.setValue(password)
        console.log('Entered password');
    }

    login(){
        loginPage.loginTextbox.waitForExist(10000)
        var loginID = process.env.loginID
        var password = process.env.password
        console.log('#######################')
        console.log(loginID)
        //console.log(password)
        loginPage.loginTextbox.setValue(loginID)
        loginPage.passwordTextbox.setValue(password)
        browser.pause(4000)
        loginPage.loginButton.click();
    }

    logout(){
       // loginPage.menu.click();
      // var menunew = loginPage.menu1;
       //browser.moveToObject(menunew, 0, 15).click();
       loginPage.menu.click()
       browser.pause(2000)
       loginPage.logout.click()
       console.log("first");
       browser.pause(2000)
       
       // console.log('User Logged Out');
    }
    

}

module.exports = new Login();
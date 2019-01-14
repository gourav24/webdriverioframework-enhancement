var json = require('json-file');
var file = json.read('./pageObjects/login.page.json');
var file2 = json.read('./utilities/testData.json');

class login {

    get loginTextbox() { return $(file.get('login.selector.loginTextbox')); }
    get passwordTextbox() { return $(file.get('login.selector.passwordTextbox')); }
    get loginButton() { return $(file.get('login.selector.loginButton')); }
    //get noThanksButton() { return $(file.get('login.selector.noThanksButton')); }
    get dashboardTitle() { return $(file.get('login.selector.dashboardTitle')); }
    get invalidPasswordMssg() { return $(file.get('login.selector.invalidPasswordMssg')); }
    get okButton() { return $(file.get('login.selector.okButton')); }
    get menu() { return $(file.get('login.selector.menu')); }
    get logout() { return $(file.get('login.selector.logout')); }

    //testData import
    get testDataLoginId() { return $(file2.get('testData.qa.loginData.Ashlie.loginId')); }
    get testDataPassword() { return $(file2.get('testData.qa.loginData.Ashlie.password')); }
  }
  
  module.exports = new login();
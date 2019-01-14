const { Before, After } = require('cucumber')

var json = require('json-file');
var file = json.read('./utilities/testData.json');

Before(function () {
    
    // commonLib.loadPage('./')
    // loginLib.loginToAmwater(global.loginId, global.password)
    loginLib.login()

});

After(function() {

    browser.pause(2000)
    //browser.startActivity('com.fpg','com.fpg.MainActivity');
    browser.pause(3000)
    loginLib.logout()

    //logout from application
    // if (!dashboardPage.modalWindowCloseButton.isExisting()) {
    //     dashboardLib.logoutAmwater()
    // }


})


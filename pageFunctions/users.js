class users {

    enterUsername(username){
        
        usersPage.userTextbox.waitForExist(10000)
        usersPage.userTextbox.setValue(username)
        console.log('Entered username');
    }
}

module.exports = new users();
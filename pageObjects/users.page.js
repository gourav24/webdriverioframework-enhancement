var json = require('json-file');
var file = json.read('./pageObjects/users.page.json');

class login {

    get title() { return $(file.get('user.selector.title')); }
    get userTextbox() { return $(file.get('user.selector.userTextbox')); }
    get searchButton() { return $(file.get('user.selector.searchButton')); }
    get userFound() { return $(file.get('user.selector.userFound')); }
    get userNotFound() { return $(file.get('user.selector.userNotFound')); }
    
  }
  
  module.exports = new login();
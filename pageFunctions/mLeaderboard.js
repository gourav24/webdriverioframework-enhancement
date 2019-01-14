var json = require('json-file');
var file = json.read('./pageObjects/mLeaderboard.page.json');

class mLeaderboard {

   entershareReportDescription(){

    var elem = mLeaderboardPage.shareReportTextbox;
    elem.waitForExist(10000)
    elem.isExisting()
    elem.setValue("Test Report");
    //console.log('Clicked on add button');
   }

}

module.exports = new mLeaderboard();
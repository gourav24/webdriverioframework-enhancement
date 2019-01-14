var json = require('json-file');
var file = json.read('./pageObjects/mLeaderboard.page.json');
var file2 = json.read('./utilities/testData.json');

class mLeaderboard {

    get shareSymbol() { return $(file.get('mLeaderboard.selector.shareSymbol')); }

    get shareLeaderboardTitle() { return $(file.get('mLeaderboard.selector.shareLeaderboardTitle')); }
    
    get shareReportTextbox() { return $(file.get('mLeaderboard.selector.shareReportTextbox')); }
    
    get shareWithTenantOption() { return $(file.get('mLeaderboard.selector.shareWithTenantOption')); }
    get shareWithTenantNote() { return $(file.get('mLeaderboard.selector.shareWithTenantNote')); }
    
    get shareWithLocationsOption() { return $(file.get('mLeaderboard.selector.shareWithLocationsOption')); }
    get shareWithLocationsNote(){ return $(file.get('mLeaderboard.selector.shareWithLocationsNote')); }
    get selectLocationDropdown() { return $(file.get('mLeaderboard.selector.selectLocationDropdown')); }
    get selectLocationValue() { return $(file.get('mLeaderboard.selector.selectLocationValue')); }
    
    get shareWithLocationGroupOption() { return $(file.get('mLeaderboard.selector.shareWithLocationGroupOption')); }
    get shareWithLocationGroupNote(){ return $(file.get('mLeaderboard.selector.shareWithLocationGroupNote')); }
    get SWLGselectGroupDropdown() { return $(file.get('mLeaderboard.selector.SWLGselectGroupDropdown')); }
    get SWLGselectGroupValue() { return $(file.get('mLeaderboard.selector.SWLGselectGroupValue')); }
    
    get shareWithColleagueOption() { return $(file.get('mLeaderboard.selector.shareWithColleagueOption')); }
    get shareWithColleagueNote() { return $(file.get('mLeaderboard.selector.shareWithColleagueNote')); }
    get colleagueUsername() { return $(file.get('mLeaderboard.selector.colleagueUsername')); }
    
    get shareButton() { return $(file.get('mLeaderboard.selector.shareButton')); }
    
  }
  
  module.exports = new mLeaderboard();
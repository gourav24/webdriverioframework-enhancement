var json = require('json-file');
var file = json.read('./pageObjects/mMyMTDCommission.page.json');

class mMyMTDCommission {

    get gaugemeter() { return $(file.get('mMyMTDCommission.selector.gaugemeter')); }
    get myMTDCommissionCardTitle() { return $(file.get('mMyMTDCommission.selector.myMTDCommissionCardTitle')); }
    get incSalesMonthDec() { return $(file.get('mMyMTDCommission.selector.incSalesMonthDec')); }
    get addMissingSalesTitle() { return $(file.get('mMyMTDCommission.selector.addMissingSalesTitle')); }
    get addButton() { return $(file.get('mMyMTDCommission.selector.addButton')); }
    //get noThanksButton() { return $(file.get('mMyMTDCommission.selector.noThanksButton')); }
    get productSoldTextbox() { return $(file.get('mMyMTDCommission.selector.productSoldTextbox')); }
    get selectDateTextbox() { return $(file.get('mMyMTDCommission.selector.selectDateTextbox')); }
    get selectDateValue() { return $(file.get('mMyMTDCommission.selector.selectDateValue')); }
    get okButton() { return $(file.get('mMyMTDCommission.selector.okButton')); }
    get quantityDropdown() { return $(file.get('mMyMTDCommission.selector.quantityDropdown')); }
    get quantityValue() { return $(file.get('mMyMTDCommission.selector.quantityValue')); }
    get priceTextbox() { return $(file.get('mMyMTDCommission.selector.priceTextbox')); }
    get confNoTextbox() { return $(file.get('mMyMTDCommission.selector.confNoTextbox')); }
    get savenewButton() { return $(file.get('mMyMTDCommission.selector.savenewButton')); }
    get recordAddedMessage() { return $(file.get('mMyMTDCommission.selector.recordAddedMessage')); }
  }
  
  module.exports = new mMyMTDCommission();
var json = require('json-file');
var file = json.read('./pageObjects/mMyMTDCommission.page.json');

class mMyMTDCommission {

   enterProductSold(){

    var elem = mMyMTDCommissionPage.productSoldTextbox;
    elem.waitForExist(10000)
    elem.isExisting()
    elem.setValue("Presendential Suite");
    //console.log('Clicked on add button');
   }

   enterDate(){
    mMyMTDCommissionPage.selectDateTextbox.click()
    mMyMTDCommissionPage.selectDateValue.waitForExist(5000)
    mMyMTDCommissionPage.selectDateValue.click()
    mMyMTDCommissionPage.okButton.click()
   }

   enterQuantity(){
    mMyMTDCommissionPage.quantityDropdown.click()
    mMyMTDCommissionPage.quantityValue.waitForExist(5000)
    mMyMTDCommissionPage.quantityValue.click()
   }

   enterPrice(){
    var elem = mMyMTDCommissionPage.priceTextbox
    elem.setValue('3432.0');
   }

   enterConfNo(){
    var elem = mMyMTDCommissionPage.confNoTextbox
    elem.setValue('test123');
   }
}

module.exports = new mMyMTDCommission();
var json = require('json-file');
var file = json.read('./utilities/testData.json');

class CommonFunctions {

    loadPage(url){
        browser.url(url)
    }
    
    closeSession(){
        var caps = browser.session();
    console.log(caps); // outputs: { browserName: "...", ... }


    console.log(browser.desiredCapabilities);

    // delete the session (equivalent to `end` action command)
    // Note: the wdio testrunner doesn't allow to call this command manually. It will close the session
    // when the test has ended.
    browser.session('delete'); // throws an error
    }
    
    parseIntergerFromString(stringValue){

        var regex = /-?\d*\.{0,1}\d+/g;
        var regexArray = regex.exec(stringValue);

        return parseFloat(regexArray[0]).toFixed(2)

    }

    clickElement(element){

        element.getLocationInView()
        element.waitForVisible(10000)
        element.click()

    }

    getElementText(element) {
        element.waitForExist(10000)
        browser.pause(3000)
        return element.getText()
    }

    assertElementText(element, expectedText) {
        element.waitForExist(10000)
        expect(element.getText().trim()).to.equal(expectedText);
    }

    assertValue(exp, act){
        expect(exp).to.equal(act);
        
    }

    waitForElementExistWithoutException(element, timeout){
        try {

            element.waitForExist(timeout)
            
        } catch (error) {
            
            console.log("Element did not exist within the time limit")
        }
    }

    waitForElementVisibleWithoutException(element, timeout){
        try {

            element.waitForVisible(timeout)
            
        } catch (error) {
            
            console.log("Element did not appear within the time limit")
        }
    }

    clickButtonByQuerySelector(selector){

        console.log("Attempting to click by query selector on element " + selector)
        console.log("Exists: "  + browser.isExisting(selector))
        browser.execute(function(selector) {
            document.querySelector(selector).click()
            
        }, selector)
        
    }

    getCurrentMonth(format) {
        let date = new Date()
        //format: long, short
        let currentMonth = date.toLocaleString("en-us", { month: format });
        console.log(`Current month is ${currentMonth}`)
        return currentMonth
    }

    getLastMonth(format) {
        let x = new Date();
        x.setDate(1);   
        x.setMonth(x.getMonth()-1);
        let date = new Date(x)
        //format: long, short
        let lastMonth = date.toLocaleString("en-us", { month: format });
        console.log(`Last month is ${lastMonth}`)
        return lastMonth
    }

    getLastMonthYear(){
        let x = new Date();
        x.setDate(1);
        x.setMonth(x.getMonth()-1);
        let date = new Date(x)
        console.log(`Year associated with last month is ${date.getFullYear()}`)
        return date.getFullYear()
    }

    getLastMonthFirstDay() {
        let x = new Date();
        x.setDate(1);
        x.setMonth(x.getMonth()-1);
        console.log(`Last month first day is ${x}`)
        return x
    }

    getJulianDate(){

        let today = new Date();
        let currentDay = today.getDate();
        let currentmonth = today.getMonth(); //January is 0
        let temp = file.get('testData.julianMonth.' + (currentmonth)) + currentDay
        let julianDate = (temp).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
        
        return julianDate;

    }

    scrolToScreenTop(){

        browser.execute(function(){
            document.querySelector("#root").scrollTo(0,0)
        })

    }

    switchWindowTab(){
       let handles = browser.windowHandles();
      
      // console.log('TabId 1:'+browser.getCurrentTabId());
       var tab1 = browser.getCurrentTabId();
       console.log('TabId 1:' +handles.value[0]);
       //browser.switchTab(handles[0]).pause(2000);
       console.log('TabId 2:'+browser.getCurrentTabId());
       browser.switchTab(handles.value[1])
   }

    scrollToScreenBottom(){

        browser.execute(function(){
            var root = document.querySelector("#root")
            root.scrollTo(0, root.scrollHeight)

        })

    }

    isTextInDollarFormat(testString){

        let regex = /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/;
        return regex.test(testString)

    }

    isPhoneNumberNANP(number){

        let regex = /^\(?([2-9][0-9]{2})\)?[-. ]?([2-9](?!11)[0-9]{2})[-. ]?([0-9]{4})$/
        return regex.test(number)
    }

    switchToTab(tabIndex){
        let handles = browser.windowHandles();
        console.log(`Total number of active tabs: ${handles.value.length}`)
        browser.switchTab(handles.value[tabIndex]).pause(2000);
        console.log(`Switched control to tab: ${tabIndex}\nPageTitle: ${browser.getTitle()}`)
    }

    getTabCount(){
        return browser.windowHandles().value.length;
    }
   
    mScrollToBottom(){
        browser.touchPerform([
            { action: 'press', options: { x: 100, y: 800 }},
            { action: 'moveTo', options: { x: 100, y: 400 }},
            { action: 'release' }
          ]);
    }

    mScrollDown(){
        browser.touchPerform([
            { action: 'longPress', options: { x: 1000, y: 1000 }},
            { action: 'moveTo', options: { x: 1000, y: 200 }},
            { action: 'release' }
          ]);
    }

    mScrollUp(){
        browser.touchPerform([
            { action: 'longPress', options: { x: 1000, y: 1000 }},
            { action: 'moveTo', options: { x: 1000, y: 1600 }},
            { action: 'release' }
          ]);
    }
    
    scrollToElement(elem, y){

        browser.execute(function(){
            elem.scrollTo(0, y)

        })

    }
    mRightSwipe(){
        // var size = driver.getWindowSize();
        // console.log('################**********************#####################')
        // console.log(size)
        // var endx = (int) (size.width * 0.8);
        // var startx = (int) (size.width * 0.10); 
        // var starty = size.height / 2; 

        // var endx1 = parseInt(endx)
        // console.log('################')
        // console.log(endx1)
        // var startx1 = parseInt(startx)
        // console.log(startx1)
        // var starty1 = parseInt(starty)
        // console.log(starty1)
        browser.touchPerform([
            { action: 'longPress', options: { x: 500, y: 500 }},
            { action: 'moveTo', options: { x: 20, y: 500 }},
            { action: 'release' }
          ]);

    }
    
    mPressKeyCode(){
        browser.pressKeycode('dataProvided')
    }
    mLeftSwipe(){

        browser.touchPerform([
            { action: 'longPress', options: { x: 20, y: 500 }},
            { action: 'moveTo', options: { x: 500, y: 500 }},
            { action: 'release' }
          ]);

    }

    closeApp(){
        browser.closeApp();
    }

    closeAppWithSessionDelete(){
        browser.deleteSession()
        browser.closeApp();
    }
    
    latestNotificationCheck(){
        var monthsName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


        browser.pause(2000);
         var timestamp1 =  Page.timestamp1.getText()
         var timestamp2 =  Page.timestamp2.getText()
         var timestamp3 =  Page.timestamp3.getText()

     
         var timestamps = [timestamp1, timestamp2, timestamp3];
         var testSuccess = true;
         for(let i=0; i<timestamps.length; i++){
         if(!!timestamps[i] && !!timestamps[i+1] && testSuccess){
             var firstDateSplit = timestamps[i].split(" ");
             var secondDateSplit = timestamps[i+1].split(" ");
     
             var date1 = {"day":firstDateSplit[1],"monthIndex": monthsName.indexOf(firstDateSplit[0])};
     
             var date2 = {"day":secondDateSplit[1],"monthIndex": monthsName.indexOf(secondDateSplit[0])};
     
     
             if(date1.day>=date2.day && date1.monthIndex>=date2.monthIndex){
                 // testSuccess = false;
             }else{
                 testSuccess = false;
             }
         }
       }
    }
    waitForElementPresent(elem){
        for (second = 0; second >= 60; second++) {
            if (second >= 60) fail("timeout");
            try { if (isElementPresent(elem)) break;
            } catch (error) {}
            browser.pause(1000);
        }
    }

    rotateScreenLandscape(){
        browser.orientation('landscape');
    }

    mDatePicker(){
        var column = document.getElementsByTagName('script');

        for(var element of column){
           if(element.text().equals(dateProvided)){
              element.findElement(By.linkText(dateProvided)).click();
              break;
           }
       }
    }

    rotateScreenPortrait(){
        browser.orientation('portrait');
    }

    mholdElement(elem){
        browser.hold(elem);
    }
}

module.exports = new CommonFunctions();

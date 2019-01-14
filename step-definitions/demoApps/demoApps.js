const { Given, When, Then } = require('cucumber')

Given(/^user click on display text view$/, function () {

  dashboardPage.displayTextViewButton.click()
  //var elemtext = dashboardPage.textMenu

  // //browser.swipe(elemtext,10,100);
  // console.log('###############First#################%%%%%%%%%%%%%%%%%%&&&&&&&')
  // // elemtext.touchAction('tap');

  // // // simple touch action using selector and x y variables
  // // // tap location is 30px right and 20px down relative from the center of the element
  // // elemtext.touchAction({
  // //     action: 'tap', x: 0, y:100
  // // })
  // elemtext.touchAction([
  //   'press',
  //   { action: 'moveTo', x: 0, y: 300 },
  //   'release'
//])

});

When(/^user click on chrome web view icon$/, function () {

  // var elemtext1 = dashboardPage.textMenu
  // browser.swipe(elemtext1,0,-100);
  dashboardPage.chromeIconWebView.click()
  console.log('###############********************When')

});

When(/^user enter name$/, function () {

  // var elemtext1 = dashboardPage.textMenu
  // browser.swipe(elemtext1,0,-100);
  dashboardPage.chromeIconWebView.click()
  console.log('###############********************When')
  sendmeurNameButton

});

Then(/^user send their name$/, function () {

  // var elemtext1 = dashboardPage.textMenu
  // browser.swipe(elemtext1,0,-100);
  dashboardPage.sendmeurNameButton.click()
  console.log('###############********************Then')

});

When(/^user scrolls up the menu$/, function () {

  // var elemtext1 = dashboardPage.textMenu
  // browser.swipe(elemtext1,0,-100);
  console.log('###############********************When')

});

Given(/^user click on the menu item text$/, function () {
  
  var elemtext = dashboardPage.textMenu
  //var otherlocator = dashboardPage.tipSummary
  // var elemtext = browser.strings();
  //browser.swipe(elemtext,10,100);
  console.log('###############First#################%%%%%%%%%%%%%%%%%%&&&&&&&')
  console.log(elemtext)
  //console.log('###############Other#################%%%%%%%%%%%%%%%%%%&&&&&&&')
  //console.log(otherlocator)
  //var elemtextNew = JSON.stringify(elemtext)
  console.log('###############********************Given')
  //console.log(elemtextNew)
  //browser.moveTo(elemtext,0,1371)
  elemtext.click()
  
});





let webdriver = require('selenium-webdriver');

require("chromedriver");
async function func() {
    let driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();

     await driver.get('https://www.hbomax.com/');
     await driver.findElement(webdriver.By.xpath("//a[@id='promo-banner-btn']")).click();
     await driver.findElement(webdriver.By.xpath("//div[@id='exp-2688-avod-mo']")).click();
}

func();
console.log(func());
// let chrome = new webdriver.Builder().forBrowser("chrome").build();
// chrome.get('https://www.hbomax.com/');

// function firstClick(){
//     let PromoBtn = chrome.findElement(webdriver.By.id('promo-banner-btn'));
//     PromoBtn.click();
// }
// function secondClick(){
//     let PlanBtn = chrome.findElement(webdriver.By.id('exp-2688-avod-mo'));
//     PlanBtn.click();
// }

// firstClick();
// secondClick();
//chrome.findElement(webdriver.By.xpath("//a[@id='promo-banner-btn']")).click();
//chrome.findElement(webdriver.By.xpath("//a[@id='page23957-band410128-Button410142']")).click();
//*[@id="exp-2688-avod-mo"]
//*[@id="exp-2688-avod-mo"]
//*[@id="exp-2688-avod-mo"]/div
// General steps - 1. Create a WebDriver instance
// 2. Navigate to a web page
// 3. Locate  element on the web page
// 4. Perform an action on the element
// 5. Anticipate the browser’s response
// 6. Conclude the test

// require("geckodriver");
// let firefox = new webdriver.Builder().forBrowser("firefox").build();
// firefox.get('https://www.hbomax.com/');
//firefox.quit();

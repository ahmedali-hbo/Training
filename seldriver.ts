let webdriver = require('selenium-webdriver');

require("chromedriver");
let chrome = new webdriver.Builder().forBrowser("chrome").build();
chrome.get('https://www.hbomax.com/');
//chrome.findElement(webdriver.By.xpath("//a[@id='promo-banner-btn']")).click();
chrome.findElement(webdriver.By.xpath("//a[@id='page23957-band410128-Button410142']")).click();

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

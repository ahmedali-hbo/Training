let webdriver = require('selenium-webdriver');

require("chromedriver");
async function func() {
    let driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();

     await driver.get('https://www.hbomax.com/');
     await driver.findElement(webdriver.By.xpath("//a[@id='promo-banner-btn']")).click();
     await driver.findElement(webdriver.By.xpath("//div[@id='exp-2688-avod-mo']")).click();
     await driver.findElement(webdriver.By.xpath("//*[@id='firstName']")).sendKeys("James");
     await driver.findElement(webdriver.By.xpath("//*[@id='lastName']")).sendKeys("William");
     await driver.findElement(webdriver.By.xpath("//*[@id='email']")).sendKeys("JamesW@hbo.com");
     await driver.findElement(webdriver.By.xpath("//*[@id='password']")).sendKeys("James@1234");
     await driver.findElement(webdriver.By.xpath("//*[@id='createAccount']")).click();
}

func();
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

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.findthemissing.org/en');
    console.log("Testing")
    await driver.findElement(By.className('pagetitle'));
    var text = driver.findElement(By.className('pagetitle')).getText();
    text.then(function(val) {
      console.log(val);
    });
  } finally {
    await driver.quit();
  }
})();
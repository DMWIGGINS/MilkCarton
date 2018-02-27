const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');


var missingPersonsArray = [];
var driver = new Builder().forBrowser('chrome').build();

function logCaseInfo(data) {
    //console.log(data);
    missingPersonsArray.push(data);
    driver.findElement(By.id("NextCase"))
    .then(element =>  {
        element.click()
        .then(processIndividual)
    })   
    .catch(() => {
        driver.quit();
        console.log("---------- FINISHED ----------");
        console.log(missingPersonsArray);
    })       
}

function processIndividual() {
    driver.wait(until.elementLocated(By.id('case_information')))
    .then(() => driver.findElements(By.css("#case_information table tr")))
    .then(elements => {
        var results = {};

        function parse(item) {
            if (item >= elements.length) return logCaseInfo(results);
            var row = elements[item];
            row.findElement(By.tagName("label")).getText().then(label => {
                row.findElement(By.className("view_field")).getText().then(value => {
                    results[label] = value;
                    return parse(item + 1);
                });
            })
        };

        parse(0);
    })
}

driver.navigate().to('https://www.findthemissing.org/en')
    .then(() => driver.findElement(By.id('search_Circumstances.StateLKA')).click())
    .then(() => driver.findElement(By.xpath('//option[@value="30"]')).click())
    .then(() => driver.findElement(By.xpath('//input[@name="commit"]')).click())
    .then(() => driver.wait(until.elementLocated(By.css('table#list > tbody > tr:nth-child(2)'))))
    .then(element => element.click())
    .then(processIndividual)

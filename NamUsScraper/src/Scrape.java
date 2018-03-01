import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Scrape {
    private static String _currentCaseID = "";
    private static HashMap<String, HashMap> results = new HashMap<String, HashMap>();

    /**
     * This is the main function that is in charge of driving the automation
     *
     * @param args The arguments for the test
     */
    public static void main(String[] args) {
        ChromeDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, 30);
        driver.navigate().to("https://www.findthemissing.org/en");

        // Select NH as the state and search
        driver.findElement(By.id("search_Circumstances.StateLKA")).click();
        driver.findElement(By.xpath("//option[@value=\"30\"]")).click();
        driver.findElement(By.xpath("//input[@name=\"commit\"]")).click();

        // Wait for list to appear
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("table#list > tbody > tr:nth-child(2)")));

        // Select first item in list and wait for case information to load
        driver.findElement(By.cssSelector("table#list > tbody > tr:nth-child(2)")).click();

        // Process the first account before skipping to the next one
        _processAccount(driver, wait);

        // Loop and continue to check next account if that option exists
        while (driver.findElements(By.id("NextCase")).size() > 0) {
            driver.findElement(By.id("NextCase")).click();
            _processAccount(driver, wait);
        }
        driver.quit();
        // When all is said and done then turn the Java object into JSON using JSONObject
        try {
            // Print the string to the console
            String jsonString = JSONObject.valueToString(results);
            JSONObject jsonObject = new JSONObject(jsonString);
            System.out.print(jsonObject.toString(4));

            // Write the JSON to a file
            FileWriter fileWriter = new FileWriter("results.json");
            fileWriter.write(jsonObject.toString(4));
            fileWriter.flush();
        } catch (JSONException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                 HELPER FUNCTIONS                                               //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * This function processes the current account/case. It is the one that is in charge of
     * opeing each section and calling child functions to get the specific data. It also
     * keeps track of all the results for a given account.
     *
     * @param driver
     * @param wait
     */
    private static void _processAccount(ChromeDriver driver, WebDriverWait wait) {
        HashMap<String, HashMap> accountResults = new HashMap<String, HashMap>();

        // Wait for the title to change and the case info header to load
        if (!"".equals(_currentCaseID)) {
            wait.until(ExpectedConditions.not(ExpectedConditions.titleContains(_currentCaseID)));
        }
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("case_information")));
        _sleep(600); // There is a 600ms animation on the case info that you have to account for

        // Parse the case id from the site title
        int hashLoc = driver.getTitle().lastIndexOf('#') + 1;
        String caseID = driver.getTitle().substring(hashLoc).trim();

        // Store off the case ID for next run to see if the header changes
        _currentCaseID = caseID;

        // Parse out each page of data by calling the helper functions
        accountResults.put("caseInfo", _utilParseTableRows(driver, By.cssSelector("#case_information table tr")));
        accountResults.put("circumstances", _parseCircumstances(driver));
        accountResults.put("characteristics", _parsePhysicalCharacteristics(driver));
        accountResults.put("photos", _parsePhotos(driver));
        accountResults.put("investigatingAgency", _parseInvestigatingAgency(driver));
        _parseContacts(driver, accountResults);

        // Add the current account results to the full list of accounts
        results.put(caseID, accountResults);

        // Switch back to case information and wait for animation to finish before moving on
        driver.executeScript("change_block(\"case_information\")");
        _sleep(1200);
    }

    /**
     * This function takes in the rows of a table and parses out the individual TDs for the key and value
     * it then returns a HashMap of the key value pairs
     *
     * @param driver WebDriver instance
     * @param location Location selector thing to find the rows
     * @return HashMap of key values
     */
    private static HashMap<String, String> _utilParseTableRows(ChromeDriver driver, By location) {
        HashMap<String, String> info = new HashMap<String, String>();

        // Use the given location guy to find all rows to look at
        List<WebElement> elements = driver.findElements(location);
        Iterator<WebElement> elementsIterator = elements.iterator();

        // Loop over each row of data
        while (elementsIterator.hasNext()) {
            WebElement row = elementsIterator.next();
            // For each row get the label and the value
            String key;
            String value;

            // If there is another table nested in this row then skip for now
            if (row.findElements(By.tagName("table")).size() > 0) {
                continue;
            }

            // Check to see how man cells are in the row since it changes how to find the data
            int tdCount = row.findElements(By.tagName("td")).size();
            if (tdCount == 1) {
                continue;
            } else if (tdCount == 3) {
                key = row.findElement(By.cssSelector("td:nth-child(2)")).getText();
                value = row.findElement(By.cssSelector("td:nth-child(3)")).getText();
            } else {
                key = row.findElement(By.cssSelector("td:nth-child(1)")).getText();
                value = row.findElement(By.cssSelector("td:nth-child(2)")).getText();
            }

            // Call helper function to clean up the key
            key = _getKey(key);

            // If a key was found then add it to the info hash map
            if (!"".equals(key)) {
                info.put(key, value);
            }
        }

        return info;
    }

    /**
     * This function handles parsing out the data from the case circumstances page
     *
     * @param driver WebDriver to use
     * @return HashMap of circumstance information
     */
    private static HashMap<String, String> _parseCircumstances(ChromeDriver driver) {
        driver.executeScript("change_block(\"circumstances\")");
        _sleep(1200);

        return _utilParseTableRows(driver, By.cssSelector("#circumstances table tr"));
    }

    /**
     * This function handles parsing out the data from the case physical characteristics page
     *
     * @param driver WebDriver to use
     * @return HashMap of circumstance information
     */
    private static HashMap<String, String> _parsePhysicalCharacteristics(ChromeDriver driver) {
        driver.executeScript("change_block(\"physical_characteristics\")");
        _sleep(1200);

        return _utilParseTableRows(driver, By.cssSelector("#physical_characteristics table tr"));
    }

    /**
     * This function handles parsing out the data from the photos page
     *
     * @param driver WebDriver to use
     * @return HashMap of circumstance information
     */
    private static HashMap<String, String> _parsePhotos(ChromeDriver driver) {
        driver.executeScript("change_block(\"photos\")");
        _sleep(1200);

        // Info to return
        HashMap<String, String> info = new HashMap<String, String>();

        // Find all the images listed
        List<WebElement> images = driver.findElements(By.cssSelector("#photo_box img"));
        Iterator<WebElement> imagesIterator = images.iterator();

        // Loop over each image
        int count = 0;
        while (imagesIterator.hasNext()) {
            WebElement element = imagesIterator.next();

            // For each image get the src and add to return data
            String key = String.valueOf(count);
            String value = element.getAttribute("src");
            count += 1;

            info.put(key, value);
        }

        return info;
    }

    /**
     * This function handles parsing out the data from the case contacts page
     *
     * @param driver WebDriver to use
     * @param results HashMap to data to
     * @return HashMap of circumstance information
     */
    private static void _parseContacts(ChromeDriver driver, HashMap results) {
        driver.executeScript("change_block(\"contacts\")");
        _sleep(1200);

        // Since contacts has two important bits of information add them to the hash map
        results.put("caseManager", _utilParseTableRows(driver, By.cssSelector("#contacts .column2-unit-left table tr")));
        results.put("regionalAdministrator", _utilParseTableRows(driver, By.cssSelector("#contacts .column2-unit-right table tr")));
    }

    /**
     * This function handles parsing out the data from the case investigating agency page
     *
     * @param driver WebDriver to use
     * @return HashMap of circumstance information
     */
    private static HashMap<String, String> _parseInvestigatingAgency(ChromeDriver driver) {
        driver.executeScript("change_block(\"police_information\")");
        _sleep(1200);

        return _utilParseTableRows(driver, By.cssSelector("#police_information table tr"));
    }

    /**
     * This function makes the java process wait the given time
     *
     * @param time Amount of time to sleep in seconds
     */
    private static void _sleep(int time) {
        try {
            Thread.sleep(time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * This function is a little helper function to transform the key that is given into something a bit more friendly
     * for json. Called from the parse table function
     *
     * @param key The key to look at to see if it can be transformed
     * @return
     */
    private static String _getKey(String key) {
        String returnKey = key.toLowerCase();

        switch (returnKey) {
            case "first name":
                returnKey = "firstName";
                break;
            case "last name":
                returnKey = "lastName";
                break;
            case "weight (pounds)":
                returnKey = "weight";
                break;
            case "age now":
                returnKey = "ageNow";
                break;
            case "date last seen":
                returnKey = "lastSeen";
                break;
            case "nickname/alias":
                returnKey = "nickname";
                break;
            case "height (inches)":
                returnKey = "height";
                break;
            case "date entered":
                returnKey = "dateEntered";
                break;
            case "age last seen":
                returnKey = "ageLastSeen";
                break;
            case "middle name":
                returnKey = "middleName";
                break;
            case "case number":
                returnKey = "caseNumber";
                break;
            case "zip code":
                returnKey = "zip";
                break;
            case "date reported":
                returnKey = "dateReported";
                break;
            case "address 1":
            case "address 2":
                returnKey = returnKey.replaceAll(" ", "");
                break;
            // Characteristics...
            case "left eye color":
                returnKey = "leftEyeColor";
                break;
            case "scars and marks":
                returnKey = "scarsAndMarks";
                break;
            case "finger and toe nails":
                returnKey = "fingersAndToeNails";
                break;
            case "foreign objects":
                returnKey = "foreignObjects";
                break;
            case "hair color":
                returnKey = "hairColor";
                break;
            case "eye description":
                returnKey = "eyeDescription";
                break;
            case "skeletal information":
                returnKey = "skeletalInformation";
                break;
            case "body hair":
                returnKey = "bodyHair";
                break;
            case "right eye color":
                returnKey = "rightEyeColor";
                break;
            case "facial hair":
                returnKey = "facialHair";
                break;
            case "other distinctive\nphysical characteristics":
                returnKey = "otherCharacteristics";
                break;
            case "head hair":
                returnKey = "headHair";
                break;
            case "artificial body parts\nand aids":
                returnKey = "prosthetics";
                break;
        }

        return returnKey;
    }
}

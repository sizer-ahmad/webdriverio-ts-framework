import loginData from "../fixtures/login.data.json";
import { logger } from "../logger/logger";

/**
 * Represents methods that are used commonly.
 */
class CommonAction {
  /**
   * Opens the base URL of the application and waits until the page is fully loaded.
   *
   * @returns {Promise<void>} - A promise that resolves when the browser has navigated to the base URL and the page is fully loaded.
   */
  public async openBaseUrl(): Promise<void> {
    try {
      await browser.url(loginData.baseURL);
      logger.info(`Navigating to page: ${loginData.baseURL}`);

      await browser.waitUntil(
        async () =>
          await browser.execute(() => document.readyState === "complete"),
        {
          timeoutMsg: "Page did not load within the expected time!",
        }
      );
      logger.info("Page loaded successfully.");
    } catch (error) {
      logger.error(`Failed to load the page: ${loginData.baseURL}!`);
      throw new Error(
        `Error occurred while loading the base URL: ${loginData.baseURL}`
      );
    }
  }

  /**
   * Sets a value into the specified input field element.
   *
   * @param {string} fieldElement - The selector of the field where the value will be set.
   * @param {string} value - The value to input into the field.
   * @returns {Promise<void>} - A promise that resolves when the value is set.
   */
  public async setValueIntoField(
    fieldElement: string,
    value: string
  ): Promise<void> {
    const field = $(fieldElement);
    try {
      await field.setValue(value);
      logger.info(
        `Value: '${value}' has been set into the field: '${fieldElement}'`
      );
    } catch (error) {
      logger.error(`Field: '${fieldElement}' not found!`);
      throw new Error(
        `Error occurred while filling value into the field: '${fieldElement}'`
      );
    }
  }

  /**
   *
   * Clicks on the specified element after ensuring it is visible and clickable.
   *
   * @param {string} element - The selector of the element to be clicked.
   * @returns {Promise<void>} - A promise that resolves when the element has been clicked.
   * @throws {Error} - Throws an error if the element is not found or not clickable within the default timeout.
   */
  public async clickOnElement(element: string): Promise<void> {
    try {
      const button = $(element);
      await button.waitForDisplayed({
        timeoutMsg: `Element: '${element}' was not displayed within the expected time!`,
      });
      await button.waitForClickable({
        timeoutMsg: `Element: '${element}' was not clickable within the expected time!`,
      });
      await button.click();
      logger.info(`Successfully clicked on the element: '${element}'`);
    } catch (error) {
      logger.error(`Failed to click on the element: '${element}'`);
      throw new Error(
        `Error occurred while clicking on the element: '${element}'`
      );
    }
  }

  /**
   * Validates that the specified element contains the expected text.
   *
   * @param {string} element - The selector of the element to be validated.
   * @param {string} value - The expected text value to validate against the element's text.
   * @returns {Promise<void>} - A promise that resolves if the text matches, or throws an error if it does not match.
   * @throws {Error} - Throws an error if the element is not found, not displayed, or the text does not match.
   */
  public async validateTextInElement(
    element: string,
    value: string
  ): Promise<void> {
    try {
      const el = $(element);
      await el.waitForDisplayed({
        timeoutMsg: `Element: '${element}' was not displayed within the expected time!`,
      });

      const actualText = await el.getText();
      if (actualText !== value) {
        logger.error(
          `Text validation failed, expected: '${value}', but observed: '${actualText}' in element: '${element}'`
        );
        throw new Error(
          `Text validation failed, expected: '${value}', but observed: '${actualText}'`
        );
      }
      logger.info(
        `Text validation successful, value: '${value}' matches the text in element: '${element}'`
      );
    } catch (error) {
      logger.error(`Error in validating text for element: '${element}'`);
      throw new Error(
        `Error occurred while validating text for element: '${element}'`
      );
    }
  }
}

export default new CommonAction();

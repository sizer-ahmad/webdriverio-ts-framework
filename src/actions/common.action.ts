import loginData from "../fixtures/login.data.json";

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
    await browser.url(loginData.baseURL);
    await browser.waitUntil(
      async () =>
        await browser.execute(() => document.readyState === "complete"),
      {
        timeoutMsg: "Page did not load within the expected time",
      }
    );
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
    await field.setValue(value);
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
    const button = $(element);
    await button.waitForDisplayed();
    await button.waitForClickable();
    await button.click();
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
    const el = $(element);
    await el.waitForDisplayed();
    const actualText = await el.getText();
    if (actualText !== value) {
      throw new Error(
        `Text validation failed: expected "${value}", but got "${actualText}"`
      );
    }
  }
}

export default new CommonAction();

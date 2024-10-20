import commonAction from "./common.action";
import loginPage from "../pages/login.page";

/**
 * Represents methods related to the login functionality of the application.
 */
class LoginAction {
  /**
   * Logs in to the application using the provided username and password.
   *
   * @param {string} username - The username to log in with.
   * @param {string} password - The password corresponding to the username.
   * @returns {Promise<void>} - A promise that resolves when the login process is complete.
   * @throws {Error} - Throws an error if any element is not found, not displayed, or not clickable during the process.
   */
  public async login(username: string, password: string): Promise<void> {
    await commonAction.openBaseUrl();
    await commonAction.setValueIntoField(loginPage.userNameField, username);
    await commonAction.setValueIntoField(loginPage.passwordField, password);
    await commonAction.clickOnElement(loginPage.loginButton);
  }
}

export default new LoginAction();

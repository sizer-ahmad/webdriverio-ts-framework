import commonAction from "../actions/common.action";
import loginAction from "../actions/login.action";
import loginData from "../fixtures/login.data.json";
import loginPage from "../pages/login.page";

describe("Validate the login functionality", () => {
  it("Login_01: User should be able to login with valid credentials", async () => {
    await loginAction.login(loginData.username, loginData.password);
    await commonAction.validateTextInElement(
      loginPage.loginValidationTextElement,
      loginData.loginPageValidationText
    );
  });
});

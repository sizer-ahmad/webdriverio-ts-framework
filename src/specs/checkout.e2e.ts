import commonAction from "../actions/common.action";
import loginAction from "../actions/login.action";
import loginData from "../fixtures/login.data.json";
import checkoutPage from "../pages/checkout.page";
import checkoutData from "../fixtures/checkout.data.json";

describe("Validate the checkout functionality", () => {
  beforeEach(async () => {
    await loginAction.login(loginData.username, loginData.password);
  });

  it("Checkout_01: User should be able to add items to cart", async () => {
    await commonAction.clickOnElement(checkoutPage.addBikeLight);
    await commonAction.clickOnElement(checkoutPage.addJacket);
    await commonAction.validateTextInElement(
      checkoutPage.shoppingCartBadge,
      checkoutData.cartItemCount
    );
  });

  it("Checkout_02: Cancel the checkout form", async () => {
    await commonAction.clickOnElement(checkoutPage.shoppingCart);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.cartHeaderText
    );
    await commonAction.clickOnElement(checkoutPage.checkoutButton);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.checkoutHeaderText
    );
    await commonAction.setValueIntoField(
      checkoutPage.firstNameField,
      checkoutData.firstName
    );
    await commonAction.setValueIntoField(
      checkoutPage.lastNameField,
      checkoutData.lastName
    );
    await commonAction.setValueIntoField(
      checkoutPage.zipCodeField,
      checkoutData.zipCode
    );
    await commonAction.clickOnElement(checkoutPage.cancelButton);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.cartHeaderText
    );
  });

  it("Checkout_03: Confirm checkout", async () => {
    await commonAction.clickOnElement(checkoutPage.shoppingCart);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.cartHeaderText
    );
    await commonAction.clickOnElement(checkoutPage.checkoutButton);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.checkoutHeaderText
    );
    await commonAction.setValueIntoField(
      checkoutPage.firstNameField,
      checkoutData.firstName
    );
    await commonAction.setValueIntoField(
      checkoutPage.lastNameField,
      checkoutData.lastName
    );
    await commonAction.setValueIntoField(
      checkoutPage.zipCodeField,
      checkoutData.zipCode
    );
    await commonAction.clickOnElement(checkoutPage.continueButton);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.overViewHeaderText
    );
    await commonAction.clickOnElement(checkoutPage.finishButton);
    await commonAction.validateTextInElement(
      checkoutPage.checkoutHeader,
      checkoutData.orderCompleteHeaderText
    );
    await commonAction.validateTextInElement(
      checkoutPage.orderConfirmation,
      checkoutData.orderConfirmationText
    );
  });
});

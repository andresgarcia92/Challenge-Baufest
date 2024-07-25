import { Page } from "playwright";
import { expect } from "playwright/test";
import * as loginPageloc from "../locators/loginpageloc.json";

interface LocatorConfig {
  usernameTextField: { locator: string };
  passwordTextField: { locator: string };
  loginButton: { locator: string };
  credentialsAlert: { locator: string };
}

const locators: LocatorConfig = loginPageloc as LocatorConfig;
export default class loginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToLoginPage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  async login(username: string, password: string) {
    await this.page.locator(locators.usernameTextField.locator).fill(username);
    await this.page.locator(locators.passwordTextField.locator).fill(password);
    await this.page.locator(locators.loginButton.locator).click();
  }

  async verifyUserLoggedSuccessfully() {
    expect(
      await this.page.locator(locators.usernameTextField.locator).isVisible()
    ).toBe(false);
    expect(
      await this.page.locator(locators.passwordTextField.locator).isVisible()
    ).toBe(false);
    expect(
      await this.page.locator(locators.loginButton.locator).isVisible()
    ).toBe(false);
  }

  async verifyUserIsNotLogged() {
    expect(
      await this.page.locator(locators.usernameTextField.locator).isVisible()
    );
    expect(
      await this.page.locator(locators.passwordTextField.locator).isVisible()
    );
    expect(await this.page.locator(locators.loginButton.locator).isVisible());

    await this.page.waitForSelector(locators.credentialsAlert.locator);
    expect(
      await this.page.locator(locators.credentialsAlert.locator).textContent()
    ).toContain("Invalid credentials");
  }
}

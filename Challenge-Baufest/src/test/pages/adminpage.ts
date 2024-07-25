import { Page } from "playwright";
import * as adminPageloc from "../locators/adminpageloc.json";
import { faker } from '@faker-js/faker';
import { expect } from "playwright/test";
interface LocatorConfig {
  adminMenu: { locator: string };
  addButton: { locator: string };
  userRoleComboBox: { locator: string };
  adminOption: { locator: string };
  essOption: { locator: string };
  employeeNameTextField: { locator: string };
  employeeOption: { locator: string };
  statusComboBox: { locator: string };
  enabledOption:{ locator: string};
  disabledOption:{ locator: string };
  usernameTextField: { locator: string };
  passwordTextField: { locator: string };
  confirmPasswordTextField: { locator: string };
  saveButton: { locator: string };
}

const locators: LocatorConfig = adminPageloc as LocatorConfig;



export default class adminpage {
  page: Page;
  private generatedUserData: {
    username: string;
    password: string;
  };


  constructor(page: Page) {
    this.page = page;
    this.generatedUserData = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };
  }

  async clickOnAdminMenu() {
    await this.page.waitForSelector(locators.adminMenu.locator);
    await this.page.locator(locators.adminMenu.locator).click();
  }

  async goToAdminPage() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
    );
  }

  async clickOnAddButton() {
    await this.page.waitForTimeout(1000);
    await this.page.waitForSelector(locators.addButton.locator);
    await this.page.locator(locators.addButton.locator).click();
  }

  async selectUserRole(userRole: string) {
    await this.page.waitForSelector(locators.userRoleComboBox.locator);
    await this.page.locator(locators.userRoleComboBox.locator).click();
    await this.page.waitForTimeout(3000);
    const roleLocator = userRole === "Admin" ? locators.adminOption.locator : locators.essOption.locator;

    await this.page.locator(roleLocator).waitFor({ state: "visible" });
    await this.page.locator(roleLocator).click();
  }

  async typeEmployeeName(): Promise<string> {
    (
      await this.page.waitForSelector(locators.employeeNameTextField.locator)
    ).fill("a");
    await this.page.waitForTimeout(3000);
    await this.page.locator(locators.employeeOption.locator).click()
   
    const employeeName = await this.page.locator(locators.employeeNameTextField.locator).textContent();
    return employeeName ? employeeName.trim() : '';
  }

  async selectStatus(status: string) {
    (await this.page.waitForSelector(locators.statusComboBox.locator)).click();
    await this.page.waitForTimeout(3000);
    const statusLocator = status === "Enabled" ? locators.enabledOption.locator : locators.disabledOption.locator;

    await this.page.locator(statusLocator).waitFor({state: "visible"});
    await this.page.locator(statusLocator).click();
  }
  async typeUsername() {
    await this.page.waitForSelector(locators.usernameTextField.locator);
    await this.page.locator(locators.usernameTextField.locator).fill(this.generatedUserData.username);
  }

  async typePassword() {
    await this.page.waitForSelector(locators.passwordTextField.locator);
    await this.page.locator(locators.passwordTextField.locator).fill(this.generatedUserData.password);

  }

  async confirmPassword() {
    await this.page.waitForSelector(locators.confirmPasswordTextField.locator);
    await this.page.locator(locators.confirmPasswordTextField.locator).fill(this.generatedUserData.password);
  }

  async addUser() {
    await this.page.waitForSelector(locators.saveButton.locator);
    await this.page.locator(locators.saveButton.locator).click();
  }

  async verifyUserGrid(userRole : string, status: string, employeeName: string) {
    const usernameGridRowLocator = `//*/div[contains(@class, 'oxd-table-row')]//div[contains(text(),'${this.generatedUserData.username}')]`;
    const userRoleGridRowLocator = `//*/div[contains(@class, 'oxd-table-row')]//div[contains(text(),'${this.generatedUserData.username}')]/parent::div/following-sibling::div/div[contains(text(),'${userRole}')]`
    const employeeNameGridRowLocator = `//*/div[contains(@class, 'oxd-table-row')]//div[contains(text(),'${this.generatedUserData.username}')]/parent::div/following-sibling::div/div[contains(text(),'${employeeName}')]`
    const statusGridRowLocator = `//*/div[contains(@class, 'oxd-table-row')]//div[contains(text(),'${this.generatedUserData.username}')]/parent::div/following-sibling::div/div[contains(text(),'${status}')]`
    
    await this.page.waitForTimeout(3000);

    expect(await this.page.locator(usernameGridRowLocator).isVisible());
    expect(await this.page.locator(userRoleGridRowLocator).isVisible());
    expect(await this.page.locator(employeeNameGridRowLocator).isVisible());
    expect(await this.page.locator(statusGridRowLocator).isVisible());


  }
}

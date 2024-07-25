import {
  Given,
  When,
  Then,
  setDefaultTimeout,
  Before,
  After,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import { getPage } from "../../utils/basepage.spec";
import LoginPage from "../pages/loginpage";

let loginPage: LoginPage;

Given(
  "User goes to the webpage", async function () {
  loginPage = new LoginPage(getPage());
  loginPage.goToLoginPage();
});

When(
  "User enters {string} and {string}",
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  }
);

When(
  "User enters wrong credentials {string} and {string}",
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then("User is logged in", async function () {
  await loginPage.verifyUserLoggedSuccessfully();
});

Then("User is not logged in", async function () {
  await loginPage.verifyUserIsNotLogged();
});

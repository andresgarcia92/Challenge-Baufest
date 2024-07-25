import { Given, When, Then } from "@cucumber/cucumber";
import { getPage } from "../../utils/basepage.spec";
import LoginPage from "../pages/loginpage";
import AdminPage from "../pages/adminpage";
import { faker } from '@faker-js/faker';

let loginPage: LoginPage;
let adminPage: AdminPage;
const userRole = faker.helpers.arrayElement(['Admin', 'ESS'])
const userStatus = faker.helpers.arrayElement(['Enabled', 'Disabled'])
let employeeName: string;

Given("User goes to Admin page", async function () {
  loginPage = new LoginPage(getPage());
  adminPage = new AdminPage(getPage());
  await adminPage.goToAdminPage();
  await loginPage.login("Admin", "admin123");
});

When("user selects the User Role {string}", async function (role) {
  await adminPage.selectUserRole(userRole);
});

When(
  "user fills in the Employee Name field with {string}",
  async function (name) {
    employeeName = await adminPage.typeEmployeeName();
  }
);

When("user selects the Status {string}", async function (status) {  
  await adminPage.selectStatus(userStatus);
});

When(
  "user fills in the Username field with {string}",
  async function (username) {
    await adminPage.typeUsername();
  }
);

When(
  "user fills in the Password field with {string}",
  async function (password) {
    await adminPage.typePassword();
  }
);

When(
  "user fills in the Confirm Password field with {string}",
  async function (password) {
    await adminPage.confirmPassword();
  }
);

When("user clicks the Save button", async function () {
  await adminPage.addUser();
});

Then("new user is added successfully", async function () {
  await adminPage.verifyUserGrid(userRole, userStatus, employeeName);
});


import { faker } from "@faker-js/faker";
import { test, expect } from "@playwright/test";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Sidebar from "./Components/Sidebar";
import StudentForm from "./Pages/StudentsForm";

test.beforeEach("has title", async ({ page }) => {
  await page.goto("https://automaty-gd3cb.ondigitalocean.app/");
});

test("should be able to login", async ({ page }) => {
  const login = new Login(page);
  await login.signIn("admin", "admin");

  const welcome = new Welcome(page);
  await expect(welcome.title).toBeVisible({ timeout: 10000 });
});

test("shouldnt login with wrong credentials", async ({ page }) => {
  const login = new Login(page);
  await login.signIn("admint", "admint");

  await expect(login.hasWrongCredentials).toBeVisible({ timeout: 10000 });
});

test("should be able to fill student form", async ({ page }) => {
  const sidebar = new Sidebar(page);
  await sidebar.selectStudents();

  const studentForm = new StudentForm(page);
  await studentForm.fill(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.internet.email(),
    `(849) ${faker.string.numeric(3)}-${faker.string.numeric(4)}`,
    "09/27/1995"
  );
  await studentForm.register();

  await expect(studentForm.hasRegisteredToast).toBeVisible({
    timeout: 10000,
  });
});

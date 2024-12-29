import { Page } from "@playwright/test";

class StudentForm {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fill(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dateOfBirth: string
  ) {
    await this.page.locator("#firstName").fill(firstName);
    await this.page.locator("#lastName").fill(lastName);
    await this.page.locator("#email").fill(email);
    await this.page.locator("#phone").fill(phone);
    await this.page.locator("#\\:r8\\:").fill(dateOfBirth);
    await this.page.getByLabel("Open").click();
    await this.page.getByRole("option", { name: "Santo Domingo" }).click();
  }

  async register() {
    await this.page.getByRole("button", { name: "Register" }).click();
  }

  get hasRegisteredToast() {
    return this.page.getByText("Thanks for");
  }
}

export default StudentForm;

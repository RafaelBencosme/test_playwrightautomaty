import { Page } from "@playwright/test";

class Sidebar {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectStudents() {
    await this.page.getByRole("button", { name: "Students" }).click();
  }
}

export default Sidebar;

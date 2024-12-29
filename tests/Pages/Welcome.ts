import { Page } from "@playwright/test";

class Welcome {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get title() {
    return this.page.getByRole("heading", { name: "Welcome back" });
  }
}

export default Welcome;

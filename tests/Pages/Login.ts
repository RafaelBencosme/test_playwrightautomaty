import { Page } from "@playwright/test";

class Login {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async signIn(username: string, password: string) {
    await this.page.getByLabel("Username", { exact: true }).fill(username);
    await this.page.getByLabel("Password", { exact: true }).fill(password);
    await this.page.getByRole("button", { name: "Sign In" }).click();
  }

  get hasWrongCredentials() {
    return this.page.getByRole("alert");
  }
}

export default Login;

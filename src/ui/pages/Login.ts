import { expect, Locator, Page } from "@playwright/test";
import ENV from "../testdata/environments/env";

export default class Login {
    page: Page;
    username_txtbox: Locator;
    password_txtbox: Locator;
    login_btn: Locator;
    timeatwork_txt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_txtbox = page.getByRole('textbox', { name: 'Username' });
        this.password_txtbox = page.getByRole('textbox', { name: 'Password' });
        this.login_btn = page.getByRole('button', { name: 'Login' });
        this.timeatwork_txt = page.getByText('Time at Work');

    }

    async login() {
        await this.username_txtbox.click();
        await this.username_txtbox.fill(ENV.USERNAME);
        await this.password_txtbox.click();
        await this.password_txtbox.fill(ENV.PASSWORD);
        await this.login_btn.click();
        await expect(this.timeatwork_txt).toBeVisible();
        await this.page.context().storageState({path: 'playwright/.auth/auth.json'})
    }
}
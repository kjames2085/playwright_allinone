import { Locator, Page } from "@playwright/test";

export default class Homepage {
    page: Page;
    admin_lnk: Locator;
    pim_lnk: Locator;
    leave_lnk: Locator;
    time_lnk: Locator;

    constructor(page: Page) {
        this.page = page;
        this.admin_lnk = page.getByRole('link', { name: 'Admin' });
        this.pim_lnk = page.getByRole('link', { name: 'PIM' });
        this.leave_lnk = page.getByRole('link', { name: 'Leave' });
        this.time_lnk = page.getByRole('link', { name: 'Time' });
    }

    async homepage1() {
        await this.admin_lnk.click();
        await this.pim_lnk.click();
    }

    async homepage2() {
        await this.leave_lnk.click();
        await this.time_lnk.click();
    }
}
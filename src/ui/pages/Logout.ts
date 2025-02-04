import { Locator, Page } from "@playwright/test";

export default class Logout {
    page: Page;
    profpic_img: Locator;
    logout_lnk: Locator;

    constructor(page: Page){
        this.page = page;
        this.profpic_img = page.getByRole('img', { name: 'profile picture' });
        this.logout_lnk = page.getByRole('menuitem', { name: 'Logout' });

    }

    async logout(){
        await this.profpic_img.click();
        await this.logout_lnk.click();
    }
}
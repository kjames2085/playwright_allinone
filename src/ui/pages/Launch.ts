import { Page } from "@playwright/test";
import ENV from "../testdata/environments/env";

export default class Launch {

    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async launch(){
        console.log(ENV.FLAG)
        await this.page.goto(ENV.URL);
    }

}
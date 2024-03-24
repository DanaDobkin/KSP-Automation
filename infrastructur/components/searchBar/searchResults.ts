import { Locator, Page } from "@playwright/test";

const locators = {
    resault: "//div[@class='MuiListItemText-root']"
}

export class SearchResaults {
    private page: Page;
    private resault: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resault = page.locator(locators.resault);
    }

    public async getFirstSearch() {
        await this.resault.first().click();
    }
}
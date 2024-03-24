import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Pages/BasePage";

const locators = {
    items: "//div[contains(@class, 'jss')]/a[contains(@href, 'item')]",
}

export class ProductsCatalog extends BasePage {
    private items: Locator;

    constructor(page: Page) {
        super(page);
        this.items = page.locator(locators.items);
    }

    public async getFirstItem() {
        await this.items.first().click();
    }
}
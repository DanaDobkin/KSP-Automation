import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

const locators = {
    categories: '//img[contains(@id, categoryimage)]',
}

export class HomePage extends basePage {
    private categories: Locator;

    constructor(page: Page) {
        super(page);
        this.categories = page.locator(locators.categories);
    }

    public async getCategoryItem(categoryName: string) {
        await this.categories.getByText(categoryName).click();
    }

    public async searchForProduct(productName: string) {
        await this.topBar.searchBar.searcForProduct(productName);
    }
}
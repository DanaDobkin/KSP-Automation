import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductsCatalog } from "../Layouts/ProductsCatalog";

const locators = {
    categories: '//img[contains(@id, categoryimage)]',
}

export class HomePage extends BasePage {
    private categories: Locator;
    private productsCatalog: ProductsCatalog;

    constructor(page: Page) {
        super(page);
        this.categories = page.locator(locators.categories);
        this.productsCatalog = new ProductsCatalog(this.page);
    }

    public async getCategoryItem(categoryName: string) {
        await this.categories.getByText(categoryName).click();
    }

    public async searchForProduct(productName: string) {
        await this.topBar.searchBar.searchForProduct(productName);
    }

    public async getFirstItem() {
        await this.productsCatalog.getFirstItem();
    }
}
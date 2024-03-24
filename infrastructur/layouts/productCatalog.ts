import { Locator, Page } from "@playwright/test";
import { basePage } from "../pages/basePage";

const locators = {
    items: "//div[contains(@class, 'jss')]/a[contains(@href, 'item')]",
    addToCartBts: "הוספה לעגלה"
}

export class ProductCatalog extends basePage {
    private items: Locator;
    private addToCartBts: Locator;

    constructor(page: Page) {
        super(page);
        this.items = page.locator(locators.items);
        this.addToCartBts = page.getByLabel(locators.addToCartBts);
    }

    public async getFirstItem() {
        await this.items.first().click();
    }

    public async addItemToCart() {
        //this.addToCartBts.filter({ hasText: 'הוספה לעגלה' }).scrollIntoViewIfNeeded();
        await this.addToCartBts.scrollIntoViewIfNeeded();
        await this.addToCartBts.click();
    }
}
import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Pages/BasePage";

const locators = {
    items: "//div[contains(@class, 'jss')]/a[contains(@href, 'item')]",
    addToCartBts: "הוספה לעגלה"
}

export class ProductCatalog extends BasePage {
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
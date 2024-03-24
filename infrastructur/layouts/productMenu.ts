import { Locator, Page } from "@playwright/test";
import { BasePage } from "../Pages/BasePage";

export class ProductMenu extends BasePage {
    private addToSalesCartBts: Locator;

    constructor(page: Page) {
        super(page);
        this.addToSalesCartBts = this.page.locator('button').filter({ hasText: 'הוספה לעגלה' });
    }

    public async addItemToCart() {
        await this.addToSalesCartBts.scrollIntoViewIfNeeded();
        await this.addToSalesCartBts.click();

        await this.page.waitForTimeout(5000);
    }
}
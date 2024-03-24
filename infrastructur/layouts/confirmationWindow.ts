import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/basePage";

const locators = {
    addedToCartConfirmation: "המוצר התווסף בהצלחה לעגלת הקניות"
}

export class ConfirmationWindow extends BasePage {
    private addToSaleCartButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addToSaleCartButton = page.getByText(locators.addedToCartConfirmation);
    }

    public async isProductInSalesCart() {
        return this.addToSaleCartButton.isVisible();
    }
}
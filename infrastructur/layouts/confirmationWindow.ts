import { Locator, Page } from "@playwright/test";
import { basePage } from "../pages/basePage";

const locators = {
    addedToCartConfirmation: "המוצר התווסף בהצלחה לעגלת הקניות"
}

export class ConfirmationWindow extends basePage {
    private addedToCartConfirmation: Locator;

    constructor(page: Page) {
        super(page);
        this.addedToCartConfirmation = page.getByText(locators.addedToCartConfirmation);
    }

    public async isAddedToCart() {
        return this.addedToCartConfirmation.isVisible();
    }
}
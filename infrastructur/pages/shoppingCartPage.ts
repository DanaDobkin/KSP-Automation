import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

const locators = {
    objectsAmount: '//span[@class="text"]/span',
    emptyCard: '//span[contains(@class, "fa-eraser")]'
}

const labels = {
    zeroObjects: "יש לך 0 פריטים"
}

export class ShoppingCartPage extends BasePage {
    private objectsAmount: Locator;

    constructor(page: Page) {
        super(page);
        this.objectsAmount = page.locator(locators.objectsAmount);
    }

    public async doesCartIncludeObjects() {
        return this.page.locator(locators.emptyCard).isVisible();
    }
}
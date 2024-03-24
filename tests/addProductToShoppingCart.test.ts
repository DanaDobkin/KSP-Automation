import { test, expect } from "@playwright/test";
import { HomePage } from "../infrastructur/pages/homePage";
import { ProductCatalog } from "../infrastructur/layouts/productCatalog";
import { ConfirmationWindow } from "../infrastructur/layouts/confirmationWindow";

test.describe("add product to cart", () => {
    let homePage: HomePage;
    let item: ProductCatalog;
    let buyingConfirmation: ConfirmationWindow;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://ksp.co.il/web/");

        homePage = new HomePage(page);
        item = new ProductCatalog(page);
        buyingConfirmation = new ConfirmationWindow(page);
    });

    test('add item to shopping cart', async ({ page }) => {
        await homePage.searchForProduct("samsung");
        await item.getFirstItem();
        await item.addItemToCart();
        expect(await buyingConfirmation.isAddedToCart()).toBeTruthy();
    });

    test.afterEach('', async ({ page }) => {
        await page.close();
    });
});
import { test, expect } from "@playwright/test";
import { HomePage } from "../infrastructur/Pages/HomePage";
import { ProductCatalog } from "../infrastructur/Layouts/ProductCatalog";
import { ConfirmationWindow } from "../infrastructur/Layouts/ConfirmationWindow";
import { ShoppingCartPage } from "../infrastructur/Pages/ShoppingCartPage";

test.describe("adding products to cart", () => {
    let homePage: HomePage;
    let item: ProductCatalog;
    let addedToSaleCartConfirmation: ConfirmationWindow;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://ksp.co.il/web/");

        homePage = new HomePage(page);
        item = new ProductCatalog(page);
        addedToSaleCartConfirmation = new ConfirmationWindow(page);
    });

    test('add item to shopping cart', async ({ page }) => {
        await homePage.searchForProduct("samsung");
        await item.getFirstItem();
        await item.addItemToCart();
        expect(await addedToSaleCartConfirmation.isProductInSalesCart()).toBeTruthy();
    });

    test.afterEach('close window', async ({ page }) => {
        await page.close();
    });
});

test.describe("validate cart capacity", () => {
    let cartItems: ShoppingCartPage;

    test.beforeAll(async ({ browser}) => {
        const context = await browser.newContext({
            storageState: "./constants/auth.json"
        });
    
        const page = await context.newPage();
        await page.goto("https://ksp.co.il/cart/");
    });

    test.beforeEach(async ({ page }) => {
        cartItems = new ShoppingCartPage(page);
    });

    test('validate the product was added to user cart', async ({}) => {
        expect(await cartItems.doesCartIncludeObjects()).toBeTruthy();
    });

    test.afterEach('close page', async ({ page }) => {
        await page.close();
    }) 
});

//   await page.locator('button').filter({ hasText: 'הוספה לעגלה' }).click();
import { test, expect } from "@playwright/test";
import { HomePage } from "../infrastructur/pages/homePage";
import { ProductCatalog } from "../infrastructur/layouts/productCatalog";
import { ConfirmationWindow } from "../infrastructur/layouts/confirmationWindow";
import { ShoppingCartPage } from "../infrastructur/pages/shoppingCartPage";

test.describe("adding products to cart", () => {
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

test.describe("validate cart capacity", () => {
    let cartItems: ShoppingCartPage;

    test.beforeAll(async ({ browser}) => {
        const context = await browser.newContext({
            storageState: "./auth.json"
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

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://ksp.co.il/cart/');
//   await page.getByRole('link', { name: 'logo' }).click();
//   await page.getByPlaceholder('חפשו מוצר או מספר קטלוגי מתוך 64,147 פריטים').click();
//   await page.getByPlaceholder('חפשו מוצר או מספר קטלוגי מתוך 64,147 פריטים').fill('sa');
//   await page.getByLabel('שורת חיפוש, ניתן להקליד את שם המוצר אותו אתם מחפשים, באמצעות החיצים ניתן לבחור מבין תוצאות החיפוש או מתוך תוצאות החיפושים האחרונים שביצעת, לבחירת תוצאה הקש אנטר').fill('samsung');
//   await page.getByLabel('שורת חיפוש, ניתן להקליד את שם המוצר אותו אתם מחפשים, באמצעות החיצים ניתן לבחור מבין תוצאות החיפוש או מתוך תוצאות החיפושים האחרונים שביצעת, לבחירת תוצאה הקש אנטר').press('Enter');
//   await page.getByRole('link', { name: 'טלפונים סלולרים', exact: true }).click();
//   await page.getByRole('link', { name: 'אחריות היבואן הרשמי סאני Samsung קונים רק מהיבואן הרשמי! קופון בלעדי לחברי הטלגרם! קבלו שקלים 50 הנחה מיידית ברכישה מעל שקלים 499 מהמוצרים המשתתפים במבצע ללא כפל מבצעים, קופונים, הנחות והצעות החל מ הצטרפו עכשיו תמונה של מוצר טלפון סלולרי Samsung Galaxy S23 FE 5G 8GB+128GB צבע קרם שנה אחריות יבואן רשמי', exact: true }).click();
//   await page.locator('button').filter({ hasText: 'הוספה לעגלה' }).click();
//   await page.getByText('המוצר התווסף בהצלחה לעגלת הקניות').click();
//   await page.getByRole('button', { name: 'מעבר לעגלת הקניות' }).click();
//   await page.getByText('יש לך פריט אחד בעגלת הקניות').click();
// });
import { test } from "@playwright/test";

test("ksp login", async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    });

    const page = await context.newPage();
    await page.goto("https://ksp.co.il/web/");
    await page.waitForTimeout(500);

    // const ctxt = page.context();
    // ctxt.storageState();
});
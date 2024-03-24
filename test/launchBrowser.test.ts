import { test, expect } from "@playwright/test";

test('open Letcode and verify title', async ({ page }) => {
    await page.goto('https://Letcode.in/');
    const title =  await page.title();
    expect(title).toBe("LetCode with Koushik");   
});
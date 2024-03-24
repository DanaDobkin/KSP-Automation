import { test, Locator, Page, expect } from "@playwright/test";

const locators = {
    //searchBar: "//input[@id='searchTextBox']",
    searchBar: "#searchTextBox"
}

export class SearchBarInput {
    private page: Page;
    private searchBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.locator(locators.searchBar);
    }

    public async searcForProduct(searchText: string) {
        await this.searchBar.click();
        await this.searchBar.fill(searchText);
        await this.searchBar.press("Enter");
    }
}
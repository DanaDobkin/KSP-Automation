import { Locator, Page } from "@playwright/test";
import { SearchBarInput } from "../components/searchBar/searchBarInput"
import { SearchResaults } from "../components/searchBar/searchResults";

const locators = {
    header: '//div[@id="site-header"]',
    accesability: "נגישות",
    categories: "קטגוריות",
    infoAndActions: "מידע ופעולות",
    account: "חשבון",
    shoppingCart: "עגלה",
    language: "שפה"
}

export class topBar {
    private page: Page;
    private account: Locator;
    private shoppingCart: Locator;
    public  searchBar: SearchBarInput;
    public searchResaults: SearchResaults;

    constructor(page: Page) {
        this.page = page;;
        this.searchBar = new SearchBarInput(page);
        this.searchResaults = new SearchResaults(page);

        this.account = this.page.getByText(locators.account);
        this.shoppingCart = this.page.getByText(locators.shoppingCart);
    }

    public async goToAccountManagmentPage() {
        await this.account.click();
    }

    public async goToShoppingCartHandling() {
        await this.shoppingCart.click();
    }
}
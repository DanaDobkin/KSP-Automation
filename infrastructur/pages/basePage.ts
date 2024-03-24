import { Page } from "@playwright/test";
import { TopBar } from "../Layouts/topBar";

export abstract class BasePage {
    protected readonly page: Page;
    protected readonly topBar: TopBar;

    constructor(page: Page) {
        this.page = page;
        this.topBar = new TopBar(page);
    }
}
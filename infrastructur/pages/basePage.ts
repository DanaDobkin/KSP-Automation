import { Page } from "@playwright/test";
import { topBar } from "../layouts/topBar";

export abstract class basePage {
    protected readonly page: Page;
    protected readonly topBar: topBar;

    constructor(page: Page) {
        this.page = page;
        this.topBar = new topBar(page);
    }

    async wait(time: number) {
        await this.page.waitForTimeout(time)
    }
}
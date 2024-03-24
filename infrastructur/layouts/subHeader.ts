import { test, Locator, Page, expect } from "@playwright/test";

const locators = {
    tab: '//div[@class="jss18"]/div/button[contains(@type, "button")]',
}

const tabChoices = {
    sales: 'מבצעים',
    finders: 'מציאון ועודפים',
    financeAile: 'מחלקה עסקית',
    giftCard: 'כרטיס מתנה',
    hiring: 'דרושים',
    shoppingGuide: 'מדריכי קנייה',
    centers: 'סניפים ושעות פעילות'
}

export class subHeader {
    private page: Page;
    private tab: Locator;
    private salesTab!: Locator;
    private findersTab!: Locator;
    private financeAile!: Locator;
    private giftCardTeb!: Locator;
    private hiringTab!: Locator;
    private shoppingTab!: Locator;
    private centersTab!: Locator;

    constructor(page: Page) {
        this.page = page;;
        this.tab = page.locator(locators.tab);
        
        (async () => {
            this.salesTab = await this.findNavigatorTab(tabChoices.sales);
            this.findersTab = await this.findNavigatorTab(tabChoices.finders);
            this.financeAile = await this.findNavigatorTab(tabChoices.financeAile);
            this.giftCardTeb = await this.findNavigatorTab(tabChoices.giftCard);
            this.hiringTab = await this.findNavigatorTab(tabChoices.hiring);
            this.shoppingTab = await this.findNavigatorTab(tabChoices.shoppingGuide);
            this.centersTab = await this.findNavigatorTab(tabChoices.centers);
        })();
    }

    private async findNavigatorTab(tabText: string): Promise<Locator> {
        return this.tab.locator('text = ${tabText}');
    }

    public navigateToSalesPage(tab: string) {
        switch(tab) {
            case tabChoices.sales: {
                this.salesTab.click();
                break;
            }
            case tabChoices.finders: {
                this.findersTab.click();
                break;
            }
            case tabChoices.financeAile: {
                this.financeAile.click();
                break;
            }
            case tabChoices.giftCard: {
                this.giftCardTeb.click();
                break;
            }
            case tabChoices.hiring: {
                this.hiringTab.click();
                break;
            }
            case tabChoices.shoppingGuide: {
                this.shoppingTab.click();
                break;
            }
            case tabChoices.centers: {
                this.centersTab.click();
                break;
            }
        }
    }
}
import { Page, expect } from '@playwright/test';


export default class HomePage {

    private readonly serviceTitleSelector = "class=slds-slot";
//e ceva roten la acest selector; 
    constructor(private page: Page) {
    }

    async expectServiceTitleToBeVisible() {
        await expect(this.page.locator(this.serviceTitleSelector)).toBeVisible({timeout : 5000});
    }

}
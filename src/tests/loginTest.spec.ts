//Test script using Page Object Model (POM) design pattern

import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test("test", async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("username");
    await loginPage.fillPassword("password");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
}
)
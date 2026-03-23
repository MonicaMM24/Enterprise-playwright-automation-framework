//Test script using Page Object Model (POM) design pattern

import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import process from 'node:process';
import {decrypt, encrypt} from '../utils/CryptojsUtil';
import { encryptEnvFile } from '../utils/EncryptEnvFile';

test("test", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!)); 
    //!makes sure that the value is not undefined and is not null, otherwise it will throw an error at runtime
    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
}
)

test.skip("Sample env test", async ({ page }) => { 
    // const plaintext = 'Hello, Mars!';
    // const encryptedText = encrypt(plaintext);
    // console.log('SALT:', process.env.SALT);
    // console.log('Encrypted:', encryptedText);
    // const decryptedText = decrypt(encryptedText);
    // console.log('Decrypted:', decryptedText);
    encryptEnvFile();

});
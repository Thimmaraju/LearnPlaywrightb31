import { test, expect } from '@playwright/test';

test.describe('Validate Orange HRM Login functionality with SessionStorage', () => {


    test('Add job title ', async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
        const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("SDET" + random5Char)

        await page.locator("//textarea[@placeholder='Type description here']").fill("Automation")

        await page.locator('input[type="file"]').setInputFiles("testData/uploadfiles/Cat.jpg")

        await page.locator("//button[@type='submit']").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


    });

})
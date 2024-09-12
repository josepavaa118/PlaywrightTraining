import { test, expect } from '@playwright/test';
import CartPage from '../pages/CartPage';
import path from 'path';

test.describe('File Upload Tests', () => {
    let cartPage: CartPage
    const fileName=['yoshi.jpg','3mb.mp4']
    test('File Upload with visible DOM', async ({ page }) => {
        cartPage= new CartPage(page)
        const filePath= path.join(__dirname,'../data/yoshi.jpg')
        await page.goto('https://practice.sdetunicorns.com/cart/')
        cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().messageHeader).toContainText('uploaded successfully') 
    })

    test('File Upload with invisible DOM', async ({ page }) => {
        const filePath= path.join(__dirname,'../data/yoshi.jpg')
        await page.goto('/cart')
    await page.evaluate(() => {
        const selector = document.querySelector('input#upfile_1');
        if (selector) {
          selector.className = ''
        }
      })
      await page.setInputFiles('input#upfile_1', filePath); // throws error
      await page.locator('#upload_1').click();
      await expect(page.locator('#wfu_messageblock_header_1_1'))
        .toContainText('uploaded successfully');
    })
    for (const name of fileName){
        test(`Should upload a ${name} file`, async ({ page }) => {
            const filePath= path.join(__dirname,`../data/${name}`)
            await page.goto('/cart')
            await page.setInputFiles('input#upfile_1',filePath)
            await page.locator('#upload_1').click()
            await expect(page.locator('#wfu_messageblock_header_1_1')).toBeVisible()
            await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully') 
        })
    }
    

})

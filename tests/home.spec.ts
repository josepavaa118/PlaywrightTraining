import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage'

test.describe('Home Page Tests', () => {
    let homePage: HomePage
    test.beforeEach(async ({ page }) => {
    homePage=new HomePage(page)
    await homePage.navigateToHome()
    })
    test('Open HomePage', async ({ page }) => {
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })
    test('Go to About', async ({ page }) => {
        await homePage.aboutLink.click()
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
    test('Go to GS', async ({ page }) => {
        await homePage.getStartedBtn.click()
        await expect(page).toHaveURL(/.*#get-started/)
    })
    test('Submit Contact Form', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/contact/')
        await page.locator('#evf-277-field_ys0GeZISRs-1').fill("Some Name")
        await page.locator('#evf-277-field_LbH5NxasXM-2').fill("some@email.com")
        await page.locator('#evf-277-field_66FR384cge-3').fill("12345678")
        await page.locator('#evf-277-field_yhGx3FOwr2-4').fill("Some Message")
        await page.locator('BUTTON[type="submit"]').click()
        //const successMsg= page.getByRole('alert')
        const submitMsg=page.locator('text=Thanks for contacting us! We will be in touch with you shortly')

        await expect(submitMsg).toBeVisible()
        //await expect(msgContent).toEqual("Thanks for contacting us! We will be in touch with you shortly")

    })

    test('Check Recent Posts', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/blog/')
        const recentPosts= page.locator('#recent-posts-3 ul li')
        for (const entrylenght of await recentPosts.elementHandles()){
            expect((await entrylenght.textContent())?.length).toBeGreaterThan(10)
        }
        expect(await recentPosts.count()).toEqual(5)

    })

    test('Check Navigation Menu Options', async ({ page }) => {
        homePage=new HomePage(page)
        await homePage.navigateToHome()
        const expectedLinks = [
        "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
          ];
          // verify nav links text
          expect(await homePage.navLinksText()).toEqual(expectedLinks);
    })
    
    
})

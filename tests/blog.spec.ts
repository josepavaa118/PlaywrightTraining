import { test, expect } from '@playwright/test';
import BlogPage from '../pages/BlogPage';

test.describe('Blog Test Cases', () => {
    let blogPage: BlogPage
    test('Should search for Blog entries', async ({ page }) => {
        blogPage=new BlogPage(page)
        await blogPage.navigateToBlog()
        await blogPage.searchPost('test')
        await expect(page).toHaveTitle('Search Results for “test” – Practice E-Commerce Site')
    })
    
})

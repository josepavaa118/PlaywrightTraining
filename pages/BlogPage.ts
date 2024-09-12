import { Locator, Page } from '@playwright/test';

class BlogPage {
    private page: Page;
    searchField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByRole('searchbox', { name: 'Search for:' })    
    }

    async searchPost(postName) {
        await this.searchField.fill(postName)
        await this.page.keyboard.press('Enter')
    }
    async navigateToBlog(){
        await this.page.goto('https://practice.sdetunicorns.com/blog/')
    }
}

  export default BlogPage;
import {Page, Locator} from '@playwright/test'
class HomePage {
    page: Page;
    aboutLink: Locator
    getStartedBtn: Locator
    recentPostsList: Locator
    navLinks: Locator
    
    constructor(page) {
        this.page = page
        this.aboutLink = page.locator('#menu-item-491')
        this.getStartedBtn = page.locator('#get-started')
        this.recentPostsList = page.locator('#recent-posts-3 ul li')
        this.navLinks=page.locator('#zak-primary-menu li')
    }

    async navigateToHome(){
        await this.page.goto('/')
    }

    async navLinksText(){
        return this.navLinks.allInnerTexts()
    }
}
export default HomePage
import { Locator, Page } from '@playwright/test';

class ContactForm {
    private page: Page;
    searchField: Locator;
    name: Locator;
    email: Locator;
    phone: Locator;
    message: Locator;
    submitBtn: Locator;
    successMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name=page.locator('#evf-277-field_ys0GeZISRs-1')
        this.email=page.locator('#evf-277-field_LbH5NxasXM-2')
        this.phone=page.locator('#evf-277-field_66FR384cge-3')
        this.message=page.locator('#evf-277-field_yhGx3FOwr2-4')
        this.submitBtn=page.locator('BUTTON[type="submit"]')
        this.successMsg=page.locator('text=Thanks for contacting us! We will be in touch with you shortly')
       
    }

    async submitForm(name,email,phone,message) {
        await this.name.fill(name)
        await this.email.fill(email)
        await this.phone.fill(phone)
        await this.message.fill(message)
        await this.submitBtn.click()
    }
    async navigateToContact(){
        await this.page.goto('/contact')
    }
}

  export default ContactForm;

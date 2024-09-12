import { test, expect } from '@playwright/test'
import ContactForm from '../pages/ContactForm'
import {faker} from '@faker-js/faker'

test.describe('Contact Test Cases', () => {
    let contactForm: ContactForm
    test('Should Submit a Form', async ({ page }) => {
        contactForm=new ContactForm(page)
        await contactForm.navigateToContact()
        await contactForm.submitForm(faker.person.firstName(),faker.internet.email(),faker.phone.number(),faker.lorem.words())
        await expect(contactForm.successMsg).toBeVisible()
    })
    
})
import {Page, Locator} from '@playwright/test'
class uploadComponent {
    page: Page;
    uploadInput: string;
    submitBtn: Locator
    messageHeader: Locator
    
    constructor(page) {
        this.page = page
        this.uploadInput='input#upfile_1'
        this.submitBtn=page.locator('#upload_1')
        this.messageHeader=page.locator('#wfu_messageblock_header_1_1')

    }
    async uploadFile(filePath){
        await this.page.setInputFiles(this.uploadInput,filePath)
        await this.submitBtn.click()
    }
}
export default uploadComponent
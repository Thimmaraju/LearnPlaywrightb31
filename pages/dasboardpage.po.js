import { expect } from "@playwright/test"

exports.dashbaordPage =  class dashbaordPage{
    constructor(page){

        this.page = page
        this.pimMenu = page.locator('a[href="/web/index.php/pim/viewPimModule"]')
        this.leavemenu = page.locator("erwfhb")

       
    }

    async navigatetoPIM(){

      await this.pimMenu.click()
    }

      async navigatetoLeave(){

      await this.pimMenu.click()
    }

   
}


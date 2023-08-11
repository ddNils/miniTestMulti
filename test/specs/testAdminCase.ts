import SecurePage from "../pageobjects/secure.page"
import { logTestStart } from "../utils/logUtils"

describe('Check admin user has admin specific controls enabled on frontend', () => {  
  
    it('admin specific controls should be visible', async function () {
      logTestStart(`${this?.test?.title}`)
      
      // This should of course do something meaningful in real world
      await expect(SecurePage.flashAlert).toHaveTextContaining(
          'You logged into a secure area!')
    })
  })
  
import SecurePage from "../pageobjects/secure.page"
import { logTestStart } from "../utils/logUtils"

describe('Check guest user has guest specific controls enabled on frontend', () => {  
  
    it('admin specific controls should be hidden', async function () {
      logTestStart(`${this?.test?.title}`)
      
      // This should of course do something meaningful in real world
      await expect(SecurePage.flashAlert).toHaveTextContaining(
          'Your username is invalid!')
    })
  })
  